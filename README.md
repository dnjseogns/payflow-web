[프로그램 소개]
• PayFlow는 결제 데이터를 조회/관리하고, 집계 및 정산 데이터를 
조회/재처리 하기 위해 만들어진 관리자 시스템입니다.
• React 기반 SPA로 구성된 프론트엔드 프로젝트로,
JWT 인증 기반 API 통신 및 사용자 권한 관리를 수행하며,
Spring Boot 백엔드와 연동됩니다.

[기술스택]
• Frontend : React 19
• Build Tool : Vite
• State Management : Redux Toolkit, Redux Persist
• Routing : React Router DOM v6
• API : Axios

[환경]
1. 개발 환경
• note.js : v24.15.0
• IDE : VSCode
2. 프로젝트 환경
• react : 19.2.6
• vite : 8.0.11

[프로젝트 실행]
• npm install   # 의존성 설치
• npm run dev   # 개발 서버 실행

[프론트엔드 어플리케이션 구조]
main/App
 └─ MainRoute
     └─ MainLayout
          ├─ Header
          ├─ TopMenu
          └─ Outlet(XxxPage)
               └─ XxxPage
                  ├─ XxxPageView(UI 분리)
                  ├─ state 관리
                  ├─ API 호출
                  └─ event 처리
           └── Footer

[주요 세팅]
1. vite.config.js
• alias 설정하여 절대경로 import 작성
before: import App from './../test/test.jsx'
after : import App from '@/components/test/App.jsx'
• 서버요청url이 /api로 시작하는 경우 proxy 설정하여 CORS 방지
Browser
 └─ Vite Dev Server (localhost:5173)
      └─ Spring Boot Server (localhost:8080)
위 세팅으로 브라우저는 동일 origin(localhost:5173)으로 인식하여 CORS 방지하며,
실제 backend 호출은 backend(8080포트)로 한다.

[인증 절차 설명(backend 내용 포함)]
1. 로그인 시
1) client 로그인 요청(/api/auth/login)
2) server 인증 성공 시
• refreshToken : cookie 저장
• accessToken : json 응답
3) client 데이터 저장
• accessToken : localStorage 저장
4) 이후 api 요청 시
• Axios Interceptor에서 Authorization Header 자동 주입

2. AccessToken 만료 시
1) server : 2001 코드 반환(AccessToken 만료)
2) client : axios interceptor에서 api(/api/auth/reissue) 요청
3) server
• cookie refresh token == db저장 refresh token 검증 후 재발급
• 이후는 로그인 시 절차와 같음.

3. logout시 
1) 로그아웃 
• Redux state 초기화
• localStorage 토큰 삭제

[redux]
1) 상태값 저장 시점
- 로그인 시, 새로고침 시(AuthInitializer)
2) 상태 관리
- Login
- Menu
- 공통code

[추가 개선 예정]
- Paging 버그 수정 (조건 변경 시 paging 유지 문제)
- 공통 sort 기능 추가
- CI/CD 자동 배포 환경 구축