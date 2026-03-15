const translations = {
    ko: {
        // Header
        nav: {
            about: 'About',
            products: 'Products',
            research: 'Research',
            team: 'Team',
            contact: 'Contact',
            getInTouch: 'Get in Touch',
        },
        // Hero
        hero: {
            badge: 'Emotion Tech × ESG Research Lab',
            title1: 'Together,',
            title2: 'at the Zenith.',
            description: 'ZenithUs Labs는 우리(Us)와 지구(Earth) 모두의 정점을 향해, 감정기술과 ESG의 혁신적 융합으로 지속가능한 미래를 설계합니다.',
            cta1: 'Learn More',
            cta2: 'Contact Us',
        },
        // About
        about: {
            label: 'About Us',
            title1: '감정의 정점에서,',
            title2: '우리와 지구를 함께.',
            description: '제니스어스(ZenithUs)는 중의적 이름입니다. Zenith + Us(우리), 그리고 Zenith + Earth(어스/지구). 우리는 사람과 지구 모두의 정점을 향한 여정을 상징하며, 감정기술과 ESG 융합 연구를 통해 지속가능한 미래를 설계하는 글로벌 싱크탱크입니다.',
            values: [
                { emoji: '💚', title: '감정의 권리', description: '감정은 사적인 것이지만, 고립되지 않습니다. 우리는 감정의 권리를 회복하고 보호합니다.' },
                { emoji: '🌍', title: '공공가치 실현', description: '지속가능한 공공가치는 감정으로부터 시작되어야 한다고 믿습니다.' },
                { emoji: '🔗', title: '감정-기술 연결', description: '기술은 감정과 인간을 잇는 다리가 되어야 합니다.' },
            ],
            visionLabel: 'Vision',
            visionTitle: 'Together at the Zenith',
            visionDesc: '우리(Us)와 지구(Earth), 함께 정점을 향해. 감정기술과 ESG 융합으로 사람과 지구 모두가 지속가능하고 공감 가능한 미래를 만들어갑니다.',
            missionLabel: 'Mission',
            missionTitle: '감정기술 × ESG 융합 연구',
            missionDesc: '인공지능으로 감정기술과 ESG의 혁신적 융합을 통해 지속가능하고 공감 가능한 미래를 설계합니다. 감정의 권리를 회복시키고, 새로운 사회적 가치 시스템을 만들어갑니다.',
        },
        // Products
        products: {
            label: 'Our Focus',
            title: '우리가 만드는 미래',
            items: [
                { title: '지속가능한 세상' },
                { title: '건강한 삶의 설계' },
                { title: '더 스마트한 일상' },
            ],
            teaser: 'Stay tuned.',
        },
        // Research
        research: {
            label: 'Research Areas',
            title: '연구 영역',
            description: '감정기술과 ESG를 축으로, 인간과 사회의 지속가능한 발전을 위한 핵심 연구를 수행합니다.',
            areas: [
                { number: '01', title: 'Emotion Intelligence', subtitle: '감정 인식 및 분석', description: '멀티모달 AI를 활용한 감정 인식 기술과 사회정서적 인터페이스를 연구합니다.', tags: ['Sentiment Analysis', 'Affective Computing', 'Emotion UX'] },
                { number: '02', title: 'Carbon Neutrality', subtitle: '탄소중립 연구', description: '일상 속 탄소 감축 데이터를 수집·분석하고, 개인과 조직의 탄소중립 실천을 지원합니다.', tags: ['Carbon Tracking', 'Net Zero', 'Green Data'] },
                { number: '03', title: 'ESG Analytics', subtitle: 'ESG 데이터 분석', description: 'AI 기반 ESG 평가 모델을 개발하고 기업·공공부문의 지속가능경영 전략을 연구합니다.', tags: ['ESG Scoring', 'Sustainability Report', 'Impact Measurement'] },
                { number: '04', title: 'Convergence Research', subtitle: '융합 연구', description: '감정기술과 ESG의 교차점에서 새로운 융합 연구 영역을 개척합니다.', tags: ['Interdisciplinary', 'Future Design', 'Public Value'] },
            ],
        },
        // Team
        team: {
            label: 'Our Team',
            title: '함께 만드는 팀',
            equation: 'ZenithUs = Zenith + Us + Earth',
        },
        // Contact
        contact: {
            label: 'Contact',
            title: '함께 시작해요.',
            description: 'ZenithUs Labs와 연구 협력, 프로젝트 제안, 또는 궁금한 점이 있으시면 언제든지 연락해 주세요.',
            nameLabel: 'Name',
            namePlaceholder: '이름',
            emailLabel: 'Email',
            emailPlaceholder: '이메일',
            subjectLabel: 'Subject',
            subjectPlaceholder: '제목',
            messageLabel: 'Message',
            messagePlaceholder: '내용을 입력해주세요',
            send: 'Send Message',
        },
        // Footer
        footer: {
            tagline1: '우리(Us)와 지구(Earth)의 정점을 향해,',
            tagline2: '함께 새로운 세상을 열어갑니다.',
            company: 'Company',
            resources: 'Resources',
            legal: 'Legal',
            blog: 'Blog',
            publications: 'Publications',
            faq: 'FAQ',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            copyright: 'ZenithUs Labs. All rights reserved.',
            slogan: 'Together at the Zenith',
        },
        // Support Page
        support: {
            title: '고객 지원',
            subtitle: '도움이 필요하신가요? 저희가 도와드리겠습니다.',
            faqTitle: '자주 묻는 질문 (FAQ)',
            contactTitle: '직접 문의하기',
            selectApp: '앱 선택',
            selectAppPlaceholder: '문의하실 앱을 선택해주세요',
            apps: {
                zentalk: '젠톡 (ZenTalk)',
                greenstep: '그린스텝 (GreenStep)',
                capturezenith: '캡쳐제니스 (CaptureZenith)',
                other: '기타 문의',
            },
            faqs: [
                {
                    app: 'zentalk',
                    question: '젠톡 알람 설정은 어떻게 하나요?',
                    answer: '앱 설정 내 알림 메뉴에서 개별 대화방 또는 전체 알림을 끄고 켤 수 있습니다.',
                },
                {
                    app: 'greenstep',
                    question: '걸음수가 측정되지 않아요.',
                    answer: '건강 앱(Apple Health / Google Fit)과의 연동 권한이 허용되어 있는지 확인해 주세요.',
                },
                {
                    app: 'capturezenith',
                    question: '사진이 저장되지 않아요.',
                    answer: '앱의 카메라 및 앨범 접근 권한이 허용되어 있는지 확인해 주세요.',
                },
            ],
        },
        // Privacy Page
        privacy: {
            title: '개인정보 처리방침',
            lastUpdated: '최종 수정일: 2026년 3월 15일',
            zentalk: {
                title: '젠톡(ZenTalk) 개인정보 처리방침',
                content: `ZenithUs Labs(이하 '회사')는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 및 관련 법령을 준수합니다.

제1조 (수집하는 개인정보 항목)
• 필수: 이메일 주소, 닉네임
• 선택: 프로필 사진
• 자동 수집: 앱 사용 로그, 기기 정보(OS, 버전), IP 주소
• AI 대화 데이터: 사용자가 입력한 대화 내용 (분석 후 즉시 삭제)

제2조 (개인정보의 수집 및 이용 목적)
• 서비스 제공 및 계정 관리
• AI 감정 분석 기능 제공
• 서비스 품질 개선 및 오류 수정
• 고객 문의 대응

제3조 (개인정보의 보유 및 이용 기간)
• 회원 탈퇴 시 즉시 파기 (단, 관계 법령에 따른 보관 의무가 있는 경우 해당 기간 보유)
• AI 대화 데이터: 분석 완료 후 즉시 삭제
• 소비자 불만 처리 기록: 3년 (전자상거래법)

제4조 (개인정보의 제3자 제공)
• 회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
• 단, OpenAI API를 통해 대화 분석이 이루어지며, 이 경우 OpenAI의 개인정보 처리방침이 적용됩니다.

제5조 (이용자의 권리 및 행사 방법)
이용자는 언제든지 개인정보 조회, 수정, 삭제, 처리 정지를 요청할 수 있습니다.
• 이메일: zenithuslabs@gmail.com
• 요청 후 10일 이내 처리됩니다.

제6조 (개인정보 보호책임자)
• 성명: ZenithUs Labs 개인정보 보호팀
• 이메일: zenithuslabs@gmail.com

본 방침은 2026년 3월 15일부터 적용됩니다.`,
            },
            greenstep: {
                title: '그린스텝(GreenStep) 개인정보 처리방침',
                content: `ZenithUs Labs(이하 '회사')는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 및 관련 법령을 준수합니다.

제1조 (수집하는 개인정보 항목)
• 필수: 이메일 주소, 닉네임
• 건강 데이터: 걸음 수, 이동 거리 (Apple Health / Google Fit 연동, 사용자 동의 시)
• 위치 정보: 탄소 저감 활동 기록용 (사용자 동의 시)
• 자동 수집: 앱 사용 로그, 기기 정보

제2조 (개인정보의 수집 및 이용 목적)
• 탄소 저감 활동 측정 및 분석
• 개인 탄소 발자국 통계 제공
• 친환경 챌린지 및 리워드 운영
• 서비스 품질 개선

제3조 (개인정보의 보유 및 이용 기간)
• 회원 탈퇴 시 즉시 파기
• 건강 및 위치 데이터: 서비스 이용 기간 동안만 보유

제4조 (개인정보의 제3자 제공)
• 회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
• Apple HealthKit / Google Fit 데이터는 해당 플랫폼의 정책에 따라 처리됩니다.

제5조 (이용자의 권리 및 행사 방법)
이용자는 언제든지 개인정보 조회, 수정, 삭제, 처리 정지를 요청할 수 있습니다.
• 이메일: zenithuslabs@gmail.com

제6조 (개인정보 보호책임자)
• 이메일: zenithuslabs@gmail.com

본 방침은 2026년 3월 15일부터 적용됩니다.`,
            },
            capturezenith: {
                title: '캡쳐제니스(CaptureZenith) 개인정보 처리방침',
                content: `ZenithUs Labs(이하 '회사')는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 및 관련 법령을 준수합니다.

제1조 (수집하는 개인정보 항목)
• 필수: 이메일 주소, 닉네임
• 이미지 데이터: 사용자가 촬영 또는 선택한 이미지 (AI 분석 후 즉시 파기)
• 메타데이터: 촬영 날짜, 위치 태그 (사용자 동의 시)
• 자동 수집: 앱 사용 로그, 기기 정보

제2조 (개인정보의 수집 및 이용 목적)
• AI 이미지 분석 및 감정 태깅 서비스 제공
• 디지털 아카이브 기능 제공
• 서비스 품질 개선

제3조 (개인정보의 보유 및 이용 기간)
• 회원 탈퇴 시 즉시 파기
• AI 분석에 사용된 이미지: 분석 완료 후 즉시 파기 (저장되지 않음)

제4조 (개인정보의 제3자 제공)
• 회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.

제5조 (이용자의 권리 및 행사 방법)
이용자는 언제든지 개인정보 조회, 수정, 삭제, 처리 정지를 요청할 수 있습니다.
• 이메일: zenithuslabs@gmail.com

제6조 (개인정보 보호책임자)
• 이메일: zenithuslabs@gmail.com

본 방침은 2026년 3월 15일부터 적용됩니다.`,
            },
        },
        // App Landing Pages
        zentalk: {
            title: '젠톡 (ZenTalk)',
            description: '감정을 나누는 가장 따뜻한 방법, 젠톡을 만나보세요.',
            feature1: 'AI 감정 분석',
            feature2: '익명 보장 대화',
            feature3: '감정 리포트',
        },
        greenstep: {
            title: '그린스텝 (GreenStep)',
            description: '당신의 한 걸음이 지구를 살립니다. 탄소 저감 활동을 기록하세요.',
            feature1: '실시간 탄소 측정',
            feature2: '친환경 챌린지',
            feature3: '보상 리워드',
        },
        capturezenith: {
            title: '캡쳐제니스 (CaptureZenith)',
            description: '당신의 찰나를 제니스로 기록하세요.',
            feature1: 'AI 이미지 분석',
            feature2: '감정 태깅',
            feature3: '디지털 아카이브',
        },
    },
    en: {
        nav: {
            about: 'About',
            products: 'Products',
            research: 'Research',
            team: 'Team',
            contact: 'Contact',
            getInTouch: 'Get in Touch',
        },
        hero: {
            badge: 'Emotion Tech × ESG Research Lab',
            title1: 'Together,',
            title2: 'at the Zenith.',
            description: 'ZenithUs Labs designs a sustainable future through the innovative convergence of emotion technology and ESG — for Us and for the Earth.',
            cta1: 'Learn More',
            cta2: 'Contact Us',
        },
        about: {
            label: 'About Us',
            title1: 'At the Zenith,',
            title2: 'Us and Earth together.',
            description: 'ZenithUs is a name with dual meaning: Zenith + Us (together) and Zenith + Earth. We symbolize the journey toward the peak for both people and the planet — a global think tank designing a sustainable future through emotion technology and ESG convergence research.',
            values: [
                { emoji: '💚', title: 'Right to Emotions', description: 'Emotions are personal, but never isolated. We restore and protect the right to emotional well-being.' },
                { emoji: '🌍', title: 'Public Value', description: 'We believe sustainable public value must begin with emotions.' },
                { emoji: '🔗', title: 'Emotion-Tech Bridge', description: 'Technology should be the bridge connecting emotions and humanity.' },
            ],
            visionLabel: 'Vision',
            visionTitle: 'Together at the Zenith',
            visionDesc: 'For Us and for the Earth, reaching the zenith together. Creating a sustainable and empathetic future through the convergence of emotion technology and ESG.',
            missionLabel: 'Mission',
            missionTitle: 'Emotion Tech × ESG Research',
            missionDesc: 'Designing a sustainable and empathetic future through the innovative convergence of AI-powered emotion technology and ESG. Restoring the right to emotions and building new social value systems.',
        },
        products: {
            label: 'Our Focus',
            title: 'Building the Future',
            items: [
                { title: 'A Sustainable World' },
                { title: 'Designing Healthy Lives' },
                { title: 'Smarter Everyday' },
            ],
            teaser: 'Stay tuned.',
        },
        research: {
            label: 'Research Areas',
            title: 'Research',
            description: 'We conduct core research for the sustainable development of people and society, with emotion technology and ESG as our pillars.',
            areas: [
                { number: '01', title: 'Emotion Intelligence', subtitle: 'Emotion Recognition & Analysis', description: 'Researching emotion recognition technology and socio-emotional interfaces using multimodal AI.', tags: ['Sentiment Analysis', 'Affective Computing', 'Emotion UX'] },
                { number: '02', title: 'Carbon Neutrality', subtitle: 'Carbon Neutral Research', description: 'Collecting and analyzing daily carbon reduction data to support carbon neutrality practices for individuals and organizations.', tags: ['Carbon Tracking', 'Net Zero', 'Green Data'] },
                { number: '03', title: 'ESG Analytics', subtitle: 'ESG Data Analysis', description: 'Developing AI-based ESG evaluation models and researching sustainable management strategies for corporate and public sectors.', tags: ['ESG Scoring', 'Sustainability Report', 'Impact Measurement'] },
                { number: '04', title: 'Convergence Research', subtitle: 'Interdisciplinary Research', description: 'Pioneering new convergence research areas at the intersection of emotion technology and ESG.', tags: ['Interdisciplinary', 'Future Design', 'Public Value'] },
            ],
        },
        team: {
            label: 'Our Team',
            title: 'Built Together',
            equation: 'ZenithUs = Zenith + Us + Earth',
        },
        contact: {
            label: 'Contact',
            title: "Let's get started.",
            description: "Whether it's research collaboration, project proposals, or general inquiries — we'd love to hear from you.",
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            emailLabel: 'Email',
            emailPlaceholder: 'Your email',
            subjectLabel: 'Subject',
            subjectPlaceholder: 'Subject',
            messageLabel: 'Message',
            messagePlaceholder: 'Write your message here',
            send: 'Send Message',
        },
        footer: {
            tagline1: 'Toward the zenith for Us and Earth,',
            tagline2: 'opening a new world together.',
            company: 'Company',
            resources: 'Resources',
            legal: 'Legal',
            blog: 'Blog',
            publications: 'Publications',
            faq: 'FAQ',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            copyright: 'ZenithUs Labs. All rights reserved.',
            slogan: 'Together at the Zenith',
        },
        // Support Page
        support: {
            title: 'Support',
            subtitle: 'How can we help you today?',
            faqTitle: 'Frequently Asked Questions',
            contactTitle: 'Contact Us Directly',
            selectApp: 'Select App',
            selectAppPlaceholder: 'Please select the app you are inquiring about',
            apps: {
                zentalk: 'ZenTalk',
                greenstep: 'GreenStep',
                capturezenith: 'CaptureZenith',
                other: 'Other Inquiry',
            },
            faqs: [
                {
                    app: 'zentalk',
                    question: 'How do I set my ZenTalk notifications?',
                    answer: 'You can toggle notifications for individual chats or globally in the App Settings menu.',
                },
                {
                    app: 'greenstep',
                    question: 'My steps are not being counted.',
                    answer: 'Please ensure you have granted sync permissions to either Apple Health or Google Fit.',
                },
                {
                    app: 'capturezenith',
                    question: 'Photos are not being saved.',
                    answer: 'Please check if camera and photo gallery permissions are enabled for the app.',
                },
            ],
        },
        // Privacy Page
        privacy: {
            title: 'Privacy Policy',
            lastUpdated: 'Last Updated: March 15, 2026',
            zentalk: {
                title: 'ZenTalk Privacy Policy',
                content: `ZenithUs Labs ("we", "our") is committed to protecting your privacy. This policy explains how ZenTalk collects, uses, and safeguards your information.

Article 1 — Information We Collect
• Required: Email address, username
• Optional: Profile photo
• Automatically collected: App usage logs, device information (OS, version), IP address
• AI conversation data: Messages you input for emotion analysis (deleted immediately after analysis)

Article 2 — How We Use Your Information
• Providing and managing the ZenTalk service
• Delivering AI-powered emotion analysis features
• Improving service quality and fixing errors
• Responding to customer inquiries

Article 3 — Data Retention
• Upon account deletion, all personal data is immediately destroyed
• AI conversation data: Deleted immediately after analysis is complete
• Consumer complaint records: Retained for 3 years (as required by applicable law)

Article 4 — Third-Party Sharing
• We do not share your personal information with third parties without your consent.
• Note: Conversations are processed via the OpenAI API. OpenAI's privacy policy applies to this processing.

Article 5 — Your Rights
You may request access, correction, deletion, or restriction of your personal data at any time.
• Email: zenithuslabs@gmail.com
• Requests are processed within 10 business days.

Article 6 — Contact
• Privacy Officer: ZenithUs Labs Privacy Team
• Email: zenithuslabs@gmail.com

This policy is effective as of March 15, 2026.`,
            },
            greenstep: {
                title: 'GreenStep Privacy Policy',
                content: `ZenithUs Labs ("we", "our") is committed to protecting your privacy. This policy explains how GreenStep collects, uses, and safeguards your information.

Article 1 — Information We Collect
• Required: Email address, username
• Health data: Step count, distance traveled (via Apple Health / Google Fit, with user consent)
• Location data: For recording carbon reduction activities (with user consent)
• Automatically collected: App usage logs, device information

Article 2 — How We Use Your Information
• Measuring and analyzing carbon reduction activities
• Providing personal carbon footprint statistics
• Running eco-challenges and reward programs
• Improving service quality

Article 3 — Data Retention
• Upon account deletion, all personal data is immediately destroyed
• Health and location data: Retained only during the period of service use

Article 4 — Third-Party Sharing
• We do not share your personal information with third parties without your consent.
• Health data via Apple HealthKit / Google Fit is subject to those platforms' privacy policies.

Article 5 — Your Rights
You may request access, correction, deletion, or restriction of your data at any time.
• Email: zenithuslabs@gmail.com

Article 6 — Contact
• Email: zenithuslabs@gmail.com

This policy is effective as of March 15, 2026.`,
            },
            capturezenith: {
                title: 'CaptureZenith Privacy Policy',
                content: `ZenithUs Labs ("we", "our") is committed to protecting your privacy. This policy explains how CaptureZenith collects, uses, and safeguards your information.

Article 1 — Information We Collect
• Required: Email address, username
• Image data: Photos captured or selected by the user (used for AI analysis, then immediately deleted)
• Metadata: Date taken, location tags (with user consent)
• Automatically collected: App usage logs, device information

Article 2 — How We Use Your Information
• Providing AI image analysis and emotion tagging services
• Providing digital archive features
• Improving service quality

Article 3 — Data Retention
• Upon account deletion, all personal data is immediately destroyed
• Images used for AI analysis: Deleted immediately after processing (never stored permanently)

Article 4 — Third-Party Sharing
• We do not share your personal information with third parties without your consent.

Article 5 — Your Rights
You may request access, correction, deletion, or restriction of your data at any time.
• Email: zenithuslabs@gmail.com

Article 6 — Contact
• Email: zenithuslabs@gmail.com

This policy is effective as of March 15, 2026.`,
            },
        },
        // App Landing Pages
        zentalk: {
            title: 'ZenTalk',
            description: 'The warmest way to share your feelings. Meet ZenTalk.',
            feature1: 'AI Emotion Analysis',
            feature2: 'Anonymous Chat',
            feature3: 'Emotion Reports',
        },
        greenstep: {
            title: 'GreenStep',
            description: 'Your every step saves the planet. Record your carbon reduction activities.',
            feature1: 'Real-time Carbon Tracking',
            feature2: 'Eco-challenges',
            feature3: 'Reward System',
        },
        capturezenith: {
            title: 'CaptureZenith',
            description: 'Record your moments with Zenith.',
            feature1: 'AI Image Analysis',
            feature2: 'Emotion Tagging',
            feature3: 'Digital Archive',
        },
    },
}

export type Translations = typeof translations.ko
export default translations
