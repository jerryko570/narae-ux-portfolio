# narae-ux-portfolio

> 프론트엔드로 디자이너하는 이나래의 포트폴리오

## 소개

UX 디자인과 프론트엔드 개발을 함께하는 이나래의 포트폴리오 사이트입니다.  
문제를 구조로 이해하고, 설계에서 구현까지 연결하는 작업을 담았습니다.

## 기술 스택

| 분류      | 기술             |
| --------- | ---------------- |
| Framework | Next.js 15 (SSG) |
| Language  | TypeScript       |
| Styling   | Tailwind CSS v4  |
| Animation | Framer Motion    |
| Deploy    | Vercel           |

## 프로젝트 구조

```
ux-portfolio/
├── .github/
│   ├── workflows/
│   │   └── gemini-code-review.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.md
│   │   ├── feature.md
│   │   └── refactor.md
│   └── pull_request_template.md
├── src/
│   └── app/
│       ├── styles/
│       │   └── theme.css
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
└── public/
```

## 디자인 시스템

### 컬러

- **Point** `#FF5E48` — 메인 포인트 컬러
- **Gray** `gray-50` ~ `gray-950` — 텍스트 및 배경
- **Orange** `orange-50` / `orange-100` / `orange-500`

### 폰트

- **Pretendard** — 본문 및 UI 전반

## 커밋 컨벤션

| 타입       | 설명            |
| ---------- | --------------- |
| ⚙️Chore    | 설정, 환경 변경 |
| ✨Feature  | 새 기능 추가    |
| ♻️Refactor | 코드 구조 개선  |
| 🐛Fix      | 버그 수정       |
| 📝Docs     | 문서 작업       |

## 시작하기

```bash
npm install
npm run dev
```

## 링크

- 🌐 [배포 사이트](https://narae-ux-portfolio.vercel.app)
- 📁 [GitHub](https://github.com/jerryko570/narae-ux-portfolio)
- ✉️ email.narae@gmail.com
