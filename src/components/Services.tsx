import React from 'react'
import { Smartphone, Leaf, Heart, Film, TrendingUp, Calendar, Zap, Star } from 'lucide-react'

const Projects: React.FC = () => {
  const projects = [
    {
      icon: Smartphone,
      title: 'VERAZEN',
      subtitle: '감정+ESG 투자 앱',
      description: '타로, 사주, ESG 필터를 통해 감정과 가치를 고려한 새로운 투자 경험을 제공하는 혁신적인 플랫폼입니다.',
      color: 'from-red-500 to-pink-600',
      status: '베타 테스트',
      launch: '2025년 Q2',
      features: [
        '타로/사주 기반 투자 가이드',
        'ESG 스코어링 시스템',
        '감정 기반 포트폴리오',
        '커뮤니티 투자 인사이트',
        '개인 맞춤형 추천',
        '실시간 ESG 뉴스'
      ],
      metrics: { users: '1,000+', partners: '5개 증권사', rating: '4.8/5' }
    },
    {
      icon: Leaf,
      title: 'Greenstep',
      subtitle: 'ESG 실천 행동 기록 앱',
      description: '일상 속 ESG 실천을 기록하고 탄소발자국을 시각화하여 지속가능한 라이프스타일을 지원합니다.',
      color: 'from-green-500 to-emerald-600',
      status: '출시 준비',
      launch: '2025년 Q1',
      features: [
        '탄소발자국 실시간 추적',
        'ESG 챌린지 시스템',
        '그린포인트 리워드',
        '지역 ESG 정보',
        '커뮤니티 랭킹',
        'AI 기반 개선 제안'
      ],
      metrics: { downloads: '5,000+', partners: '12개 지자체', impact: '500톤 CO2 감축' }
    },
    {
      icon: Heart,
      title: 'ZENCIA',
      subtitle: '감정 몰입형 힐링 콘텐츠',
      description: 'VR, 음성, 루틴을 결합한 감정 몰입형 힐링 콘텐츠로 젠사탕과 연동되어 완전한 치유 경험을 제공합니다.',
      color: 'from-blue-500 to-cyan-600',
      status: '프로토타입',
      launch: '2025년 Q3',
      features: [
        'VR 명상 환경',
        '개인화된 음성 가이드',
        '감정 상태 분석',
        '젠사탕 연동 시스템',
        '힐링 루틴 추천',
        '감정 데이터 리포트'
      ],
      metrics: { sessions: '10,000+', satisfaction: '94%', partners: '3개 병원' }
    },
    {
      icon: Film,
      title: 'ZEN Universe',
      subtitle: 'ZEN 캐릭터 세계관',
      description: 'ZEN 캐릭터를 중심으로 한 애니메이션, 동화, 굿즈 등 미디어 융합 프로젝트로 감정교육 콘텐츠를 제작합니다.',
      color: 'from-purple-500 to-violet-600',
      status: '기획 개발',
      launch: '2025년 Q4',
      features: [
        'ZEN 캐릭터 애니메이션',
        '감정교육 동화 시리즈',
        '인터랙티브 스토리',
        'ZEN 굿즈 라인',
        '교육용 게임',
        '글로벌 콘텐츠 전개'
      ],
      metrics: { content: '50+ 에피소드', languages: '5개 언어', reach: '100만+ 조회' }
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-secondary-100 rounded-full text-secondary-700 font-medium mb-8">
            <Zap className="w-5 h-5 mr-2" />
            Our Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6 font-serif">
            혁신 프로젝트 <span className="text-secondary-600">포트폴리오</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            감정기술과 ESG가 융합된 실제 서비스와 플랫폼을 통해 
            사용자들에게 새로운 가치와 경험을 제공합니다.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-3xl p-8 shadow-elegant hover:shadow-gold transition-all duration-500 border border-neutral-200"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-800 font-serif">{project.title}</h3>
                    <p className="text-lg text-neutral-500 italic">{project.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full mb-2">
                    {project.status}
                  </div>
                  <div className="text-sm text-neutral-500">{project.launch}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-600 mb-6 leading-relaxed">{project.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary-700 mb-3 uppercase tracking-wide">주요 기능</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary-600 mb-1">{value}</div>
                      <div className="text-xs text-neutral-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Timeline */}
        <div className="bg-primary-800 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 font-serif">2025 프로젝트 로드맵</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              혁신적인 4개 프로젝트가 순차적으로 출시되어 감정기술과 ESG의 새로운 생태계를 구축합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { quarter: 'Q1', project: 'Greenstep', status: '출시' },
              { quarter: 'Q2', project: 'VERAZEN', status: '런칭' },
              { quarter: 'Q3', project: 'ZENCIA', status: '베타' },
              { quarter: 'Q4', project: 'ZEN Universe', status: '공개' }
            ].map((milestone, index) => (
              <div key={milestone.quarter} className="text-center group">
                <div className="w-16 h-16 bg-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-500/30 transition-colors">
                  <span className="text-secondary-300 font-bold text-lg">{milestone.quarter}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{milestone.project}</h4>
                <p className="text-green-200 text-sm">{milestone.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-12 text-primary-900">
            <h3 className="text-3xl font-bold mb-4 font-serif">프로젝트 파트너십</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              ZENITHUS 프로젝트에 투자하거나 협력할 기업과 기관을 찾고 있습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                투자 제안서 다운로드
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-primary-900 font-semibold px-8 py-4 rounded-lg border-2 border-primary-700 transition-colors">
                파트너십 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 