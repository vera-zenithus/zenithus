import React from 'react'
import { Heart, Users, Globe, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'

const Manifesto: React.FC = () => {
  const declarations = [
    {
      icon: Heart,
      text: "감정은 권리이며,",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      text: "지속가능한 공공가치는 감정으로부터 시작되어야 하며,",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      text: "기술은 감정과 인간을 잇는 다리가 되어야 한다고.",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const beliefs = [
    {
      icon: CheckCircle,
      text: "감정의 회복 없는 성장에는 의미가 없으며,",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Users,
      text: "모두가 주체가 되는 정점이야말로 진짜 미래라고.",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="manifesto" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-medium mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            ZenithUs Founding Manifesto
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="block">제니스어스 연구소</span>
            <span className="block gradient-text bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              창립 선언문
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-blue-100 font-light leading-relaxed max-w-4xl mx-auto">
            우리는 감정의 정점에서, 모두와 함께 새로운 세상을 디자인합니다.
          </p>
        </div>

        {/* Definition */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-6 text-blue-100">ZenithUs란?</h3>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              제니스어스(ZenithUs)는 <span className="text-blue-300 font-semibold">감정의 정점(Zenith)</span>과
              <span className="text-purple-300 font-semibold"> 공동체적 '우리(Us)'</span>를 합쳐,<br />
              개인과 사회가 함께 정점에 이르는 여정을 상징합니다.
            </p>
          </div>
        </div>

        {/* Main Philosophy */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-2xl font-bold mb-6 text-blue-200">우리의 미션</h4>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>우리는 감정의 권리를 회복시키고,</p>
              <p>공공성과 지속가능성을 중심으로 한 새로운 사회적 가치와 시스템을 설계합니다.</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-2xl font-bold mb-6 text-purple-200">감정의 힘</h4>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>감정은 사적인 것이지만, 고립되어 있지 않습니다.</p>
              <p>감정은 우리의 경제를 움직이고, 정책을 이끌며, 기술과 예술, 철학과 미래를 형성합니다.</p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/10">
          <h4 className="text-3xl font-bold text-center mb-12 text-blue-100">우리의 접근</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "감정 기반 기술", icon: "💡" },
              { title: "공공가치 실현", icon: "🌍" },
              { title: "ESG 실천", icon: "🌱" },
              { title: "사회정서적 인터페이스", icon: "🤝" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h5 className="text-lg font-semibold text-white">{item.title}</h5>
              </div>
            ))}
          </div>
          <p className="text-center text-xl text-gray-200 mt-8">
            보다 공감 가능한 미래를 만듭니다.
          </p>
        </div>

        {/* Declarations */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-center mb-12 text-blue-100">우리는 선언합니다</h4>
          <div className="space-y-6">
            {declarations.map((declaration, index) => (
              <div key={index} className="flex items-start space-x-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className={`w-12 h-12 bg-gradient-to-r ${declaration.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <declaration.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">👉</span>
                  <p className="text-xl text-gray-200">{declaration.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beliefs */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-center mb-12 text-purple-100">그리고 우리는 믿습니다</h4>
          <div className="space-y-6">
            {beliefs.map((belief, index) => (
              <div key={index} className="flex items-start space-x-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className={`w-12 h-12 bg-gradient-to-r ${belief.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <belief.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">👉</span>
                  <p className="text-xl text-gray-200">{belief.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
          <h4 className="text-3xl font-bold mb-8 text-white">이제 우리는, 감정과 함께, 모두와 함께,</h4>
          <p className="text-2xl mb-8 text-blue-100">정점에서 새로운 세계를 디자인하는 길을 선택합니다.</p>

          <div className="text-center mb-8">
            <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text mb-4">
              ZenithUs
            </p>
            <p className="text-2xl text-gray-300 italic">At the Zenith, Together.</p>
          </div>

          <div className="border-t border-white/20 pt-8 mt-8">
            <p className="text-lg text-gray-300">
              2025년, 감정의 권리를 복원하는 첫 걸음을 딛으며.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manifesto 