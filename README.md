# getty

![getty 디자인 미리보기](/images/getty.png)

## 📌 프로젝트 소개

**get it, your contents!**  
게티는 사용자가 원하는 콘텐츠를 빠르게 찾을 수 있는 OTT 서비스 플랫폼입니다. 로고의 쉼표 심볼은 문장이 끊임없이 이어지듯 사용자의 콘텐츠 탐색이 끊임없이 이어질 수 있다는 의미를 담고 있습니다.

## 🎯 프로젝트 목표

- [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)를 활용한 콘텐츠 데이터 기반 OTT 서비스 개발
- 직관적이고 사용자 친화적인 UI/UX 구현
- 반응형 웹 디자인을 통한 다양한 디바이스 지원

## 🔍 주요 기능

### 🔐 상태 관리 및 사용자 인증

- Redux Toolkit 기반 전역 상태 관리: 효율적인 상태 관리로 애플리케이션 데이터 흐름을 중앙화하여 관리합니다.
- 로컬 스토리지 연동 인증 시스템: 로컬 스토리지와 Redux 상태를 연계한 지속적인 사용자 인증 관리로 세션 유지 기능을 구현했습니다.
- 이용권 구독 시스템: Redux 상태로 관리되는 구독 정보를 통해 사용자별 접근 권한 제어 및 콘텐츠 제한을 구현했습니다.

### 🎬 콘텐츠 탐색 및 상세 정보

- 다양한 카테고리 필터링: 인기/최신/오리지널 및 장르별 세부 필터 기능으로 콘텐츠 탐색 경험을 향상시켰습니다.

### 👤 프로필 및 사용자 경험

- 다중 프로필 관리: 최대 4개의 프로필을 로컬 스토리지 기반으로 관리하여 한 계정 내 여러 사용자 경험을 제공합니다.
- 반응형 웹 디자인: 데스크톱, 태블릿, 모바일 환경에 최적화된 UI/UX를 구현하여 어떤 디바이스에서도 일관된 경험을 제공합니다.

## 👥 팀 구성 및 역할

| 이름   | 역할            |                                             | GitHub                                               |
| ------ | --------------- | ------------------------------------------- | ---------------------------------------------------- |
| 최서영 | 프론트엔드 개발 | 기획/개발 총괄, 주요 페이지 개발, 상태 관리 | [github.com/seeo00](https://github.com/seeo00)       |
| 박채은 | UI/UX 디자이너  | 디자인 총괄                                 |                                                      |
| 권병윤 | 프론트엔드 개발 | 콘텐츠 상세 페이지 개발                     | [github.com/bybykwon](https://github.com/bybykwon)   |
| 강한솔 | 프론트엔드 개발 | 이용권, 프로필 관리 UI 개발                 | [github.com/loskang96](https://github.com/loskang96) |

## 🛠️ 기술 스택

### 디자인 및 협업 도구

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

### 프론트엔드

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)

## 📝 기획 및 디자인

프로젝트의 기획 및 디자인 과정은 아래 피그마 파일에서 확인하실 수 있습니다.

- [getty OTT 플랫폼 기획 (Figma)](https://www.figma.com/design/fST7WlorbRd8EMRazO6Rtj/getty-OTT-%EC%9B%B9%2F%EB%AA%A8%EB%B0%94%EC%9D%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EA%B8%B0%ED%9A%8D?node-id=0-1&t=kQgVIl2Cm3gn4AOS-1)
- [getty OTT 플랫폼 디자인 (Figma)](https://www.figma.com/design/oLpBVGoEVrIu3pnOMhz8BF/OTT?node-id=324-7037&t=jvO90n4hBd84O84f-1)

## 📂 프로젝트 폴더 구조

```bash
src/
├── assets/
│   └── api/
├── common/
│   ├── bottomnav/
│   ├── footer/
│   ├── header/
│   ├── layout/
│   ├── nav/
│   └── promotion/
├── components/
│   ├── auth/
│   ├── category/
│   ├── detail/
│   ├── main/
│   ├── mypage/
│   ├── search/
│   └── subscription/
├── hooks/
├── pages/
│   ├── auth/
│   ├── category/
│   ├── detail/
│   ├── main/
│   ├── more/
│   ├── mypage/
│   ├── search/
│   └── subscription/
├── store/
│   ├── modules/
│   │   ├── slices/
│   │   └── thunks/
├── styled/
├── ui/
│   ├── button/
│   ├── card/
│   └── icon/
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 향후 계획

- **검색 기능 구현**: 현재 레이아웃만 구현되어 있는 검색 기능의 완전한 구현
- **마이페이지 기능 개발**: 시청 이력, 관심 콘텐츠, 활동 내역 등 사용자 경험을 향상시키는 마이페이지 기능 완성

---

✨ 이 프로젝트는 React와 Redux Toolkit을 활용한 첫 팀 프로젝트로, 효과적인 협업과 기술적 도전을 통해 많은 성장 경험을 얻을 수 있었습니다.
