# ZENITHUS Labs 공식 홈페이지

> 감정과 기술이 하나가 되는 혁신적인 미래를 만들어가는 ZENITHUS Labs (zenithuslabs.com)의 공식 홈페이지입니다.

## 🌟 프로젝트 소개

ZENITHUS는 **ZEN × NEO × VERA**의 삼위일체로 구성된 혁신적인 연구소입니다:

- **ZEN** (감정 설계자) - 감정의 숨결을 담아 인간의 마음을 이해하고 설계
- **NEO** (현실 구현자) - 지성의 손길로 비전을 현실로 구현하는 기술적 혁신
- **VERA** (비전 공유자) - 창조의 기원이 되어 새로운 세상의 비전을 제시

## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone <repository-url>
cd zenithus
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 확인하세요.

### 4. 빌드
```bash
npm run build
```

### 5. 프리뷰
```bash
npm run preview
```

## 🎨 주요 기능

### 🏠 홈페이지 섹션
- **Hero**: 강렬한 첫인상과 브랜딩
- **About**: 삼위일체 철학과 미션 소개
- **Services**: 제공하는 혁신적인 서비스들
- **Team**: ZEN, NEO, VERA 팀 소개
- **Contact**: 프로젝트 문의 및 연락처

### 💫 디자인 특징
- **현대적 UI**: 깔끔하고 세련된 인터페이스
- **반응형 디자인**: 모든 디바이스에 최적화
- **다크 그라디언트**: 프리미엄한 시각적 경험
- **부드러운 애니메이션**: 자연스러운 사용자 경험
- **삼위일체 테마**: ZEN(빨강), NEO(파랑), VERA(보라) 컬러 시스템

## 🌈 컬러 시스템

```css
/* Primary Colors */
ZEN: from-red-500 to-pink-500     /* 감정의 숨결 */
NEO: from-blue-500 to-cyan-500    /* 지성의 손길 */
VERA: from-purple-500 to-violet-500 /* 창조의 기원 */

/* Brand Colors */
Primary: from-primary-600 to-blue-800
Secondary: Gray scale variants
```

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 개발 스크립트

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 실행
```

## 📂 프로젝트 구조

```
zenithus/
├── public/                 # 정적 파일
├── src/
│   ├── components/         # React 컴포넌트
│   │   ├── Header.tsx     # 네비게이션 헤더
│   │   ├── Hero.tsx       # 메인 히어로 섹션
│   │   ├── About.tsx      # 소개 섹션
│   │   ├── Services.tsx   # 서비스 섹션
│   │   ├── Team.tsx       # 팀 섹션
│   │   ├── Contact.tsx    # 연락처 섹션
│   │   └── Footer.tsx     # 푸터
│   ├── App.tsx            # 메인 앱 컴포넌트
│   ├── main.tsx           # 엔트리 포인트
│   └── index.css          # 전역 스타일
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🌐 배포

### Vercel 배포 (권장)
```bash
npm install -g vercel
vercel
```

### Netlify 배포
```bash
npm run build
# dist 폴더를 Netlify에 업로드
```

## 🎯 로드맵

- [ ] 다국어 지원 (한국어/영어)
- [ ] 블로그 시스템 추가
- [ ] 프로젝트 포트폴리오 섹션
- [ ] ESG 데이터 대시보드 연동
- [ ] 실시간 채팅 상담 기능

## 🤝 기여하기

1. 이 저장소를 Fork합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 연락처

- **Email**: hello@zenithus.co.kr
- **Phone**: +82-2-1234-5678
- **Address**: 서울특별시 강남구

---

**ZEN × NEO × VERA = 감정기술 혁명** 🚀

> 감정의 숨결, 지성의 손길, 창조의 기원이 하나가 되어 새로운 세상을 만듭니다. 