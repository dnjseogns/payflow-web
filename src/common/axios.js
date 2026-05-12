import axios from 'axios';

const ACCESS_TOKEN = "accessToken";
let isRefreshing = false;
let refreshSubscribers = [];

// axios instance 생성
const instance = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});


// request interceptor
instance.interceptors.request.use(

    // 요청 전 처리
    (config) => {

        // access token 조회
        const accessToken = localStorage.getItem(ACCESS_TOKEN);

        // Authorization header 추가
        if(accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        // 요청 정보 반환
        return config;
    },

    // 요청 에러 처리
    (error) => {
        return Promise.reject(error);
    }
);

// response interceptor
instance.interceptors.response.use(

    // 정상 응답 반환
    async (response) => {
        // 만료 처리 (예: 토큰 만료 코드)
        if (response.data.code === "2001") {
            // 이미 refresh 중이면 대기
            if (isRefreshing) {
                return new Promise((resolve) => {
                    refreshSubscribers.push(() => {
                        resolve(instance(response.config));
                    });
                });
            }

            isRefreshing = true;

            try {
                // 1. reissue 호출 (cookie 자동 전송됨)
                const reissueRes = await instance.post("/api/auth/reissue");

                const newAccessToken = reissueRes.data.accessToken;

                // 2. 저장
                localStorage.setItem(ACCESS_TOKEN, newAccessToken);

                // 3. 헤더 갱신
                instance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

                // 4. 대기 중이던 요청 재실행
                refreshSubscribers.forEach(cb => cb());
                refreshSubscribers = [];

                // 5. 원래 요청 재시도
                return instance(response.config);

            } catch (e) {
                localStorage.removeItem(ACCESS_TOKEN);
                window.location.href = "/";
                return Promise.reject(e);
            } finally {
                isRefreshing = false;
            }

        }

        return response;
    },

    // 응답 에러 처리
    (error) => {

        // 응답 객체 존재 시
        if(error.response) {

            // status code 분기 처리
            switch(error.response.status) {

                // 인증 만료
                case 401:
                    alert('로그인이 만료되었습니다.');
                    localStorage.removeItem(ACCESS_TOKEN);
                    window.location.href = '/';
                    break;

                // 권한 없음
                case 403:
                    alert('권한이 없습니다.');
                    break;

                // 서버 오류
                case 500:
                    alert('서버 오류가 발생했습니다.');
                    break;

                default:
                    break;
            }
        }

        // 에러 반환
        return Promise.reject(error);
    }
);

export default instance;