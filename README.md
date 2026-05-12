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

[5] 흐름도
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





┌────────────────────────────┐
│ 홈 > 사용자관리            │ ← Breadcrumb
├────────────────────────────┤
│ 사용자 관리                │ ← Title
│ 조회 추가 수정 삭제 Excel  │ ← ActionBar
├────────────────────────────┤
│ 검색조건 영역              │ ← SearchArea
├────────────────────────────┤
│ Grid/Table                 │ ← Content
├────────────────────────────┤
│ Pagination                 │
└────────────────────────────┘