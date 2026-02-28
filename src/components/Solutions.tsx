import React from 'react'
import { Brain, Cpu, Database, BarChart3, Zap, Shield } from 'lucide-react'

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'ESG Intelligence',
      subtitle: 'AI 기반 ESG 분석 솔루션',
      description: '머신러닝과 빅데이터 분석을 통해 기업의 ESG 성과를 종합적으로 평가하고 개선 방안을 제시합니다.',
      color: 'from-green-500 to-emerald-600',
      features: [
        'ESG 데이터 자동 수집',
        '성과 예측 모델링',
        '리스크 조기 감지',
        '맞춤형 개선 권장',
        '실시간 모니터링',
        '규제 준수 지원'
      ]
    },
    {
      icon: Cpu,
      title: 'Emotion Analytics',
      subtitle: '감정 인식 및 분석 플랫폼',
      description: 'AI 기반 감정 분석 기술을 통해 사용자 경험을 최적화하고 감정 기반 의사결정을 지원합니다.',
      color: 'from-red-500 to-pink-600',
      features: [
        '멀티모달 감정 인식',
        '실시간 감정 상태 분석',
        '개인화된 감정 프로파일',
        '감정 패턴 예측',
        '감정 기반 추천',
        '웰빙 지수 측정'
      ]
    },
    {
      icon: Database,
      title: 'Convergence Platform',
      subtitle: '융합 연구 데이터 플랫폼',
      description: '다양한 학문 분야의 데이터를 통합하고 AI로 분석하여 새로운 융합 연구 인사이트를 발굴합니다.',
      color: 'from-blue-500 to-cyan-600',
      features: [
        '다학제 데이터 통합',
        '지식 그래프 구축',
        '패턴 자동 발견',
        '융합 기회 식별',
        '협업 네트워크 분석',
        '연구 트렌드 예측'
      ]
    },
    {
      icon: BarChart3,
      title: 'Future Forecasting',
      subtitle: '미래 예측 AI 모델',
      description: '고도화된 예측 알고리즘을 통해 사회, 경제, 기술 트렌드를 분석하고 미래 시나리오를 제시합니다.',
      color: 'from-purple-500 to-violet-600',
      features: [
        '트렌드 패턴 분석',
        '시나리오 모델링',
        '리스크 시뮬레이션',
        '기회 발굴 지원',
        '의사결정 최적화',
        '전략 수립 지원'
      ]
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-secondary-100 rounded-full text-secondary-700 font-medium mb-8">
            <Zap className="w-5 h-5 mr-2" />
            AI Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6 font-serif">
            AI 기반 <span className="text-secondary-600">통합 솔루션</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            첨단 인공지능 기술을 활용하여 감정기술과 ESG 영역에서 
            혁신적이고 실용적인 솔루션을 제공합니다.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group bg-white rounded-3xl p-8 shadow-elegant hover:shadow-gold transition-all duration-500 border border-neutral-200"
            >
              {/* Solution Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-800 font-serif">{solution.title}</h3>
                    <p className="text-lg text-neutral-500 italic">{solution.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-600 mb-6 leading-relaxed">{solution.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary-700 mb-3 uppercase tracking-wide">핵심 기능</h4>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-primary-800 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 font-serif">AI 기술 스택</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              최신 AI 기술과 연구 방법론을 결합하여 안정적이고 확장 가능한 솔루션을 구축합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: 'Machine Learning', desc: '고급 ML 알고리즘' },
              { icon: Database, title: 'Big Data', desc: '대용량 데이터 처리' },
              { icon: Cpu, title: 'Deep Learning', desc: '심층 신경망 모델' },
              { icon: Shield, title: 'AI Ethics', desc: '윤리적 AI 개발' }
            ].map((tech, index) => (
              <div key={tech.title} className="text-center group">
                <div className="w-16 h-16 bg-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-500/30 transition-colors">
                  <tech.icon className="w-8 h-8 text-secondary-300" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{tech.title}</h4>
                <p className="text-green-200 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-12 text-primary-900">
            <h3 className="text-3xl font-bold mb-4 font-serif">AI 솔루션 도입 문의</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              귀하의 조직에 최적화된 AI 기반 솔루션을 제안해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                솔루션 데모 요청
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-primary-900 font-semibold px-8 py-4 rounded-lg border-2 border-primary-700 transition-colors">
                기술 자료 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions 