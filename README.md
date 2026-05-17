[1] 개발 환경
- note v24.15.0
- VSCode IDE

[2] 프로젝트 환경
- react@19.2.6
- vite@8.0.11

[3] 프로젝트 실행 명령어
- npm install #라이브러리 다운로드
- npm run dev #실행(package.json 참고)

[4] 주요 세팅
1. vite.config.js
1) alias 등록하여, import 경로를 절대값으로 작성되도록 함
before) import App from './../test/test.jsx'
after ) import App from '@/components/test/App.jsx'
2) 서버요청url이 /api로 시작하는 경우 proxy 설정하여 CORS 방지
Browser
 └── Vite Dev Server (localhost:5173)
      └── Spring Boot Server (localhost:8080)
CORS는 브라우저가 검사하는데,
proxy 쓰면 브라우저 vite 서버(5173포트)로 같은 orgin으로 인식한다.
실제 backend 호출은 vite 서버가 backend(8080포트)로 대신한다.

[5] 인증 절차 설명
1. 인증 절차
1) client 로그인 요청(/api/auth/login) -> server 성공응답(cookie:refreshToken, json:accessToken, user정보)
2) client 데이터 저장 : accessToken(localStorage 저장), user정보(redux에 persist 저장. 새로고침후에도 데이터 남음.)
* accessToken은 server인증시, user정보는 client에서 사용함.
3) client 이후 요청 시. axios intercept로 Header에 AccessToken값 자동주입하여 인증용으로 사용.

2. AccessToken 만료 시 절차
1) server : AccessToken 만료 시 2001에러코드 반환
2) client : axios interceptor에서 2001코드일 경우 api(/api/auth/reissue) 요청
3) server : cookie의 refresh토큰과 db에 저장된 user의 refresh토큰값과 같을 경우 access/refresh token 재발급 후 성공응답(cookie:refreshToken, json:accessToken, user정보)
4) client : 데이터 저장.(인증 절차와 같음)

3. logout시 
1) 로그아웃 시 Redux state 및 저장된 토큰을 모두 제거한다.

[6] 메뉴 세팅
1) 로그인 시
2) 최초 1회 AuthInitializer 실행
* 새로고침 시 AuthInitializer가 실행되며 메뉴api 재요청(auth관련 이슈로 영구저장하지 않음)

[7] 화면 흐름도
App
 └── MainRoute
      └── MainLayout
           ├── Header
           ├── TopMenu
           └── Outlet(XxxPage)
                ├── XxxPage.jsx
                │    ├── state 관리
                │    ├── API 호출
                │    └── event 처리
                │
                └── XxxPageView.jsx
                     ├── Breadcrumb
                     ├── ActionBar
                     ├── SearchFilter
                     └── Grid
           │
           └── Footer


[8] chat gpt 쓰면서 개발하면서 느낀점 4가지
1. 퍼플리셔랑 일하는 것 같았다. css정말 빠르게 잘짰다.
2. 페이지 하나 만들어두고 복사붙여넣기하는 수준이면 정말 잘한다.
3. 때로는 선배처럼 내가 짜고 검토 받기 좋았다.(생각지도 못한 오타, 버그를 검토해준다.)
4. db 설계는 좀 아쉬운 부분이 많았다. 그래서 sqlp 공부하길 잘했다는 생각이 들었다.


부족/보완
화면버그. 조회조건 변경 후 다음페이지 누르면 반영됨
