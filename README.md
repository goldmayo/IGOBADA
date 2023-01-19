# 이고바다(IGOBADA)

<img src="/public/images/logo.png">

## Tech Stack

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"><img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&
logoColor=black"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=black"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=black"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/cloudinary-2C39BD?style=for-the-badge&logoColor=black"><img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=black">

<!-- <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=black">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=black"> -->

## 프로젝트 소개

- 랜딩 페이지
  <img src="/public/images/capture/landing.png">

  - 홈 버튼 로고
  - 로그인 버튼
  - 간단한 소개와 활용법

- 로그인 페이지
  <img src="/public/images/capture/login.png">

  - 로그인 회원가입 기능
  - 구글 깃헙 로그인
  - 이메일 인증 기능

- 메인 페이지
  <img src="/public/images/capture/main.png">

  - 명함 생성
  - 등록한 명함 검색
  - 총 명함 개수
  - 인덱싱

  - 명함 추가
    <img src="/public/images/capture/add.png">

  - 명함 수정 삭제
    <img src="/public/images/capture/modify.png">

## 상태관리

- Redux Toolkit을 적용하여 user props에 대한 props drilling 해소

## 최적화

- 개발환경과 배포환경을 lighthouse로 성능 최적화를 진행하여 Perfomance를 87에서 92로 개선
  <img src="/public/images/capture/before opt.PNG">
  <img src="/public/images/capture/after_opt.PNG">
- 코드 분할을 적용하여 랜딩 페이지의 주요 콘텐츠 로드 시간을 약 60%개선.
  <img src="/public/images/capture/splitting_after.PNG">
  <img src="/public/images/capture/splitting_before.PNG">

- 기존의 index에서 생성한 Firebase 유틸리티 클래스들을 랜딩 페이지에서 필요한 인증 클래스를 제외하고 필요한 페이지 컴포넌트에서 사용할 수 있도록 싱글톤 패턴을 적용하여 리팩토링.

- 렌더링 성능에 영향을 미치는 사용하지 않는 CSS를 purgecss를 사용하여 CSS 다운로드 용량을 줄임.

- video 요소에 poster속성과 preload속성을 추가

## 리소스 출처

- 이미지 : https://storyset.com/online
- 로고 : https://logo.com/
