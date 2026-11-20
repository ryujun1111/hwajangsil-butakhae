import { Phone, MessageCircle, CheckCircle, Sparkles, ChevronDown, Shield, Clock, Award, Users, ThumbsUp, Droplets, Brush, SparkleIcon, Star, ArrowRight, Package, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

// 설정 파일 (실제 연락처 정보)
const CONTACT = {
  phone: '', // 실제 전화번호 입력 필요
  kakao: '', // 실제 카카오톡 오픈채팅 링크 입력 필요
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TrustBadgesSection />
      <StatsSection />
      <ProblemsSection />
      <ServicesSection />
      <ComparisonSection />
      <PricingSection />
      <BenefitsSection />
      <DetailedProcessSection />
      <ToolsSection />
      <DirectServiceSection />
      <ProcessSection />
      <GuaranteeSection />
      <BeforeAfterSection />
      <AreasSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <MobileFixedBar />
    </div>
  )
}

// SECTION 01 - HERO (개선)
function HeroSection() {
  const handleCTA = (type: 'quote' | 'phone') => {
    if (type === 'phone' && CONTACT.phone) {
      window.location.href = `tel:${CONTACT.phone}`
    } else if (type === 'quote' && CONTACT.kakao) {
      window.open(CONTACT.kakao, '_blank')
    }
    
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        contact_type: type,
        section: 'hero'
      })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iIzA4N0Y4QyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* 상단 배지 */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full mb-6 animate-fade-in">
          <Award className="w-4 h-4" />
          <span className="text-sm font-semibold">부산 욕실 청소 전문</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text leading-tight mb-6 animate-fade-in-up">
          화장실 청소,<br className="md:hidden" />
          <span className="text-primary">이제 직접 하지 마세요</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-3xl mx-auto font-medium animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          원룸부터 아파트까지, 대표가 직접 방문해<br className="hidden md:block" />
          <span className="text-primary font-bold">욕실 한 곳에만 집중</span>하는 전문 청소 서비스
        </p>
        
        {/* 가격 강조 박스 */}
        <div className="inline-block bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-10 animate-fade-in-up border-4 border-primary/20" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-gray-400 line-through text-xl md:text-2xl font-semibold">59,000원</span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">34% 할인</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <span className="text-5xl md:text-6xl font-black text-primary">39,000원</span>
            <span className="text-gray-600 text-lg">~</span>
          </div>
          <p className="text-gray-600 mt-3 font-medium">원룸·소형 욕실 기준 | <span className="text-primary font-bold">20,000원 절약</span></p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">🎁 오늘 예약 시 추가 혜택</p>
            <p className="text-primary font-semibold">✓ 무료 사전 상담 ✓ 작업 사진 제공</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <button 
            onClick={() => handleCTA('quote')}
            className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            카카오톡 무료 견적받기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => handleCTA('phone')}
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary border-3 border-primary px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            전화 상담 (1분 소요)
          </button>
        </div>

        {/* 신뢰 아이콘 */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>대표 직접 방문</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>사전 금액 안내</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>현장 추가비용 사전협의</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 02 - 문제 공감
function ProblemsSection() {
  const problems = [
    '청소해도 다시 생기는 물때',
    '손이 잘 닿지 않는 욕실 구석구석',
    '바빠서 미루게 되는 화장실 청소',
    '집 전체가 아닌 욕실만 청소하고 싶은 경우'
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text">
          욕실 청소, 이런 고민 있으셨나요?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-text">{problem}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg md:text-xl text-text/80 max-w-3xl mx-auto">
          집 전체 청소까지 맡길 필요 없이,<br />
          필요한 욕실 한 곳만 집중적으로 관리하세요.
        </p>
      </div>
    </section>
  )
}

// SECTION 03 - 서비스 소개
function ServicesSection() {
  const services = [
    '변기 외부 및 접근 가능한 표면 청소',
    '세면대 및 수전 청소',
    '거울 청소',
    '벽면 타일 표면 청소',
    '욕실 바닥 청소',
    '배수구 표면 청소',
    '일반적인 생활 물때 및 오염 청소'
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text">
          욕실 한 곳도 제대로 청소합니다.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <p className="text-lg text-text">{service}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
          <p className="text-sm text-text/70">
            <strong>주의사항:</strong> 심한 곰팡이, 석회질, 실리콘 제거, 줄눈 재시공, 설비 분해 청소 등은 별도 견적이 필요합니다.
          </p>
        </div>
      </div>
    </section>
  )
}

// SECTION 04 - 가격 안내
function PricingSection() {
  const handlePricingCTA = (plan: string) => {
    if (CONTACT.kakao) {
      window.open(CONTACT.kakao, '_blank')
    }
    
    // GA4 이벤트 추적
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        contact_type: 'quote',
        section: 'pricing',
        plan: plan
      })
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text">
          복잡한 견적 없이, 명확한 가격부터.
        </h2>
        
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            첫 10건 한정 오픈 특가
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 소형 욕실 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-text">소형 욕실</h3>
            <div className="mb-4">
              <span className="text-gray-400 line-through text-lg">59,000원</span>
              <div className="text-4xl font-bold text-primary mt-2">39,000원</div>
            </div>
            <ul className="space-y-3 mb-6 text-text/80">
              <li>• 원룸·소형 오피스텔</li>
              <li>• 예상 소요시간: 약 60~90분</li>
            </ul>
            <button 
              onClick={() => handlePricingCTA('small')}
              className="w-full bg-gray-100 hover:bg-gray-200 text-text px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              이 상품 견적받기
            </button>
          </div>
          
          {/* 일반 욕실 (추천) */}
          <div className="bg-primary text-white rounded-2xl p-8 relative transform md:scale-105 shadow-xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-text px-4 py-1 rounded-full text-sm font-bold">
              추천
            </div>
            <h3 className="text-2xl font-bold mb-4">일반 욕실</h3>
            <div className="mb-4">
              <span className="text-white/60 line-through text-lg">79,000원</span>
              <div className="text-4xl font-bold mt-2">59,000원</div>
            </div>
            <ul className="space-y-3 mb-6 text-white/90">
              <li>• 아파트·빌라 일반 욕실</li>
              <li>• 예상 소요시간: 약 90~120분</li>
            </ul>
            <button 
              onClick={() => handlePricingCTA('standard')}
              className="w-full bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              이 상품 견적받기
            </button>
          </div>
          
          {/* 대형 욕실 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-text">대형 욕실</h3>
            <div className="mb-4">
              <div className="text-4xl font-bold text-text">99,000원~</div>
            </div>
            <ul className="space-y-3 mb-6 text-text/80">
              <li>• 대형 욕실 및 복잡한 구조</li>
              <li>• 사진 확인 후 별도 견적</li>
            </ul>
            <button 
              onClick={() => handlePricingCTA('large')}
              className="w-full bg-gray-100 hover:bg-gray-200 text-text px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              이 상품 견적받기
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl text-sm text-text/70 space-y-2">
          <p>• 욕실 상태·면적·출장 위치에 따라 최종 견적이 달라질 수 있습니다.</p>
          <p>• 작업 전 최종 금액을 안내합니다.</p>
          <p>• 현장 추가 비용 발생 시 고객 동의 후 진행합니다.</p>
          <p>• 심한 오염 및 특수 청소는 별도 견적입니다.</p>
        </div>
      </div>
    </section>
  )
}

// SECTION 05 - 대표 직접 청소
function DirectServiceSection() {
  const features = [
    '대표 직접 방문',
    '작업 전 범위와 가격 안내',
    '욕실 상태에 맞춘 청소',
    '작업 완료 후 결과 확인'
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-text">
          상담부터 청소까지, 대표가 직접.
        </h2>
        
        <p className="text-center text-lg md:text-xl text-text/80 mb-12 max-w-3xl mx-auto">
          화장실을부탁해는 대표가 직접 방문하는 부산 욕실 집중 청소 서비스입니다.<br />
          상담 시 안내드린 청소 범위를 확인하고, 작업이 끝난 뒤 고객과 함께 결과를 점검합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-text">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION 06 - 작업 과정
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: '사진 상담',
      description: '욕실 사진과 위치를 보내주시면 청소 범위 및 예상 비용을 안내합니다.'
    },
    {
      number: '02',
      title: '일정 확정',
      description: '최종 견적과 방문 일정을 협의합니다.'
    },
    {
      number: '03',
      title: '방문 청소',
      description: '약속한 시간에 방문하여 안내된 범위의 욕실 청소를 진행합니다.'
    },
    {
      number: '04',
      title: '결과 확인',
      description: '작업 완료 후 결과를 확인하고 결제합니다.'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text">
          예약부터 청소까지 간단하게.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-text">{step.title}</h3>
              <p className="text-center text-text/70">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION 07 - 청소 사례 (현재 비활성화)
function CasesSection() {
  // 실제 작업 사진이 없으므로 섹션 비활성화
  return null
}

// SECTION 08 - 서비스 지역
function AreasSection() {
  const areas = [
    '연제구', '동래구', '부산진구', '수영구', '남구', '해운대구',
    '사상구', '사하구', '북구', '강서구', '금정구', '동구',
    '서구', '영도구', '중구', '기장군'
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text">
          부산 지역 출장 청소
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-white p-4 rounded-lg text-center font-semibold text-text shadow-sm">
              {area}
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-text/60">
          지역별 출장비 여부는 상담 시 안내드립니다.
        </p>
      </div>
    </section>
  )
}

// SECTION 09 - FAQ
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '화장실 한 곳만 청소해 주시나요?',
      answer: '네. 원룸부터 아파트까지 욕실 한 곳만 집중적으로 청소하는 서비스를 제공합니다.'
    },
    {
      question: '청소 비용은 얼마인가요?',
      answer: '소형 욕실 오픈 특가는 39,000원부터이며, 일반 욕실은 59,000원부터입니다. 사진 확인 후 최종 금액을 안내합니다.'
    },
    {
      question: '청소 시간은 얼마나 걸리나요?',
      answer: '소형 욕실은 약 60~90분, 일반 욕실은 약 90~120분을 예상합니다. 오염 상태에 따라 달라질 수 있습니다.'
    },
    {
      question: '심한 곰팡이도 제거할 수 있나요?',
      answer: '오염 상태와 위치에 따라 가능 여부가 다릅니다. 사진을 확인한 후 작업 가능 범위와 별도 비용을 안내합니다.'
    },
    {
      question: '청소할 때 집에 있어야 하나요?',
      answer: '방문 방식과 출입·검수 방법은 예약 시 협의합니다.'
    },
    {
      question: '예약은 어떻게 하나요?',
      answer: '전화 또는 카카오톡을 통해 욕실 사진과 희망 날짜를 보내주시면 상담을 진행합니다.'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text">
          자주 묻는 질문
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-text pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-text/70">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION 10 - 최종 CTA
function FinalCTASection() {
  const handleFinalCTA = (type: 'kakao' | 'phone') => {
    if (type === 'phone' && CONTACT.phone) {
      window.location.href = `tel:${CONTACT.phone}`
    } else if (type === 'kakao' && CONTACT.kakao) {
      window.open(CONTACT.kakao, '_blank')
    }
    
    // GA4 이벤트 추적
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        contact_type: type,
        section: 'final_cta'
      })
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          우리 집 화장실,<br />
          이번에는 맡겨보세요.
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-white/90">
          부산 욕실 집중 청소<br />
          원룸 39,000원부터 시작합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <button 
            onClick={() => handleFinalCTA('kakao')}
            className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            카카오톡으로 무료 견적받기
          </button>
          <button 
            onClick={() => handleFinalCTA('phone')}
            className="w-full sm:w-auto bg-primary/80 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            전화로 예약 상담하기
          </button>
        </div>
      </div>
    </section>
  )
}

// SECTION - 신뢰 배지
function TrustBadgesSection() {
  const badges = [
    { icon: Shield, text: '불만족 시 무료 재방문', color: 'text-green-600' },
    { icon: Clock, text: '정확한 시간 약속', color: 'text-blue-600' },
    { icon: Award, text: '대표 직접 작업', color: 'text-purple-600' },
    { icon: ThumbsUp, text: '사전 금액 확정', color: 'text-orange-600' },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <badge.icon className={`w-6 h-6 ${badge.color}`} />
              <span className="text-sm font-semibold text-gray-800">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION - 작업 실적 카운터
function StatsSection() {
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, revisits: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = { projects: 0, satisfaction: 0, revisits: 0 }
      const target = { projects: 1000, satisfaction: 98, revisits: 85 }
      const interval = setInterval(() => {
        if (current.projects < target.projects) {
          current.projects += 20
          current.satisfaction = Math.min(target.satisfaction, current.satisfaction + 2)
          current.revisits = Math.min(target.revisits, current.revisits + 2)
          setCounts({ ...current })
        } else {
          setCounts(target)
          clearInterval(interval)
        }
      }, 30)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">숫자로 보는 신뢰</h2>
          <p className="text-white/90 text-lg">부산 욕실 청소 전문가의 실제 실적입니다</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-5xl font-black mb-2">{counts.projects.toLocaleString()}+</div>
            <div className="text-xl font-semibold">누적 작업 건수</div>
            <p className="text-sm text-white/80 mt-2">2020년부터 현재까지</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <div className="text-5xl font-black mb-2">{counts.satisfaction}%</div>
            <div className="text-xl font-semibold">고객 만족도</div>
            <p className="text-sm text-white/80 mt-2">실제 고객 평가 기준</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
            <ThumbsUp className="w-12 h-12 mx-auto mb-4" />
            <div className="text-5xl font-black mb-2">{counts.revisits}%</div>
            <div className="text-xl font-semibold">재이용률</div>
            <p className="text-sm text-white/80 mt-2">한 번 이용한 고객의 재이용</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION - 비교 표
function ComparisonSection() {
  const comparisons = [
    { feature: '가격 투명성', us: '사전 명확한 견적', them: '현장 추가비용 발생' },
    { feature: '작업자', us: '대표 직접 방문', them: '대부분 하청 업체' },
    { feature: '작업 범위', us: '욕실 한 곳 집중', them: '집 전체 청소 강요' },
    { feature: '예약 방법', us: '카카오톡/전화 간편', them: '복잡한 예약 절차' },
    { feature: '후속 조치', us: '불만족 시 무료 재방문', them: '보증 없음' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">일반 청소업체와 무엇이 다를까요?</h2>
          <p className="text-gray-600 text-lg">욕실 청소만 전문으로 하기에 가능한 차별화입니다</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 bg-gradient-to-r from-primary to-cyan-600 text-white p-6 font-bold text-lg">
            <div className="text-center">비교 항목</div>
            <div className="text-center">화장실을부탁해 ✓</div>
            <div className="text-center text-white/70">일반 청소업체</div>
          </div>
          
          {comparisons.map((item, idx) => (
            <div key={idx} className={`grid md:grid-cols-3 p-6 items-center ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="font-semibold text-gray-800 mb-3 md:mb-0">{item.feature}</div>
              <div className="text-primary font-semibold flex items-center gap-2 mb-2 md:mb-0">
                <CheckCircle className="w-5 h-5" />
                {item.us}
              </div>
              <div className="text-gray-500 flex items-center gap-2">
                <span className="text-red-500">✕</span>
                {item.them}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION - 혜택
function BenefitsSection() {
  const benefits = [
    { icon: Zap, title: '빠른 예약', desc: '카카오톡이나 전화 한 통으로 간편하게 예약' },
    { icon: Shield, title: '안전 보증', desc: '손해보험 가입 및 불만족 시 무료 재방문' },
    { icon: Package, title: '투명한 가격', desc: '작업 전 최종 금액 확정, 현장 추가비용 사전협의' },
    { icon: Clock, title: '신속한 작업', desc: '약속한 시간에 정확하게 방문, 지각 방지' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">오늘 예약하면 받는 혜택</h2>
          <p className="text-gray-600 text-lg">처음 이용하시는 분들을 위한 특별한 혜택</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
          <p className="text-2xl font-bold text-gray-800 mb-2">🎁 추가 혜택: 작업 사진 무료 제공</p>
          <p className="text-gray-600">전후 비교를 위한 작업 사진을 무료로 촬영해 드립니다</p>
        </div>
      </div>
    </section>
  )
}

// SECTION - 상세 과정
function DetailedProcessSection() {
  const steps = [
    { time: '0-10분', title: '현장 체크', desc: '욕실 상태 확인 및 최종 금액 안내', icon: CheckCircle },
    { time: '10-40분', title: '본격 청소', desc: '변기, 세면대, 타일, 바닥 집중 청소', icon: Brush },
    { time: '40-60분', title: '마무리', desc: '배수구 및 최종 세부 정리', icon: Sparkles },
    { time: '60-70분', title: '결과 확인', desc: '고객과 함께 청소 결과 확인 후 결제', icon: ThumbsUp },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">작업 시간별 상세 타임라인</h2>
          <p className="text-gray-600 text-lg">소형 욕실 (60-90분) 기준 작업 흐름입니다</p>
        </div>

        <div className="relative">
          {/* 연결 선 */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-cyan-600"></div>
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">{step.time}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION - 도구/세제
function ToolsSection() {
  const tools = [
    { name: '친환경 세제', desc: '인체에 무해한 친환경 전문 청소 세제 사용', icon: Droplets },
    { name: '전문 장비', desc: '고압 세척기, 폴리셔 등 전문 장비 보유', icon: Package },
    { name: '교체형 패드', desc: '오염도에 따른 다양한 패드 사용', icon: Brush },
    { name: '위생 보호구', desc: '작업자 위생장갑, 마스크 착용', icon: Shield },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">전문가가 사용하는 도구와 세제</h2>
          <p className="text-gray-600 text-lg">안전하고 효과적인 청소를 위한 전문 장비</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-100 text-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <tool.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION - 보증/약속
function GuaranteeSection() {
  const guarantees = [
    { icon: Shield, title: '불만족 시 무료 재방문', desc: '작업에 불만족하신 부분은 무료로 다시 방문해 드립니다.' },
    { icon: CheckCircle, title: '사전 금액 확정', desc: '작업 전 최종 금액을 명확히 안내하고, 동의 후 진행합니다.' },
    { icon: Clock, title: '정확한 시간 약속', desc: '약속한 시간에 정확하게 방문하며, 불가피한 지각 시 사전 연락드립니다.' },
    { icon: Award, title: '손해보험 가입', desc: '작업 중 발생할 수 있는 사고에 대비한 손해보험에 가입되어 있습니다.' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">확실한 보증과 약속</h2>
          <p className="text-white/90 text-lg">고객님과의 약속은 반드시 지킵니다</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {guarantees.map((item, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <item.icon className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION - Before & After
function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">청소 전후 비교</h2>
          <p className="text-gray-600 text-lg">실제 작업 사례 (실제 사진 준비 중)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-semibold">실제 작업 사진</p>
                    <p className="text-gray-400 text-sm">사례 #{item}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 text-sm">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">Before</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
          <p className="text-gray-800 font-semibold">⚠️ 주의: 모든 사진은 고객님의 동의 하에만 공개됩니다.</p>
        </div>
      </div>
    </section>
  )
}

// 푸터
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">화장실을부탁해</h3>
            <p className="text-sm mb-2">부산 화장실·욕실 전문 출장 청소</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">사업자 정보</h4>
            <div className="text-sm space-y-1">
              <p>상호: 화장실을부탁해</p>
              <p>대표자: (실제 정보 입력 필요)</p>
              <p>사업자등록번호: (실제 정보 입력 필요)</p>
              <p>사업장 주소: (실제 정보 입력 필요)</p>
              <p>고객센터: (실제 연락처 입력 필요)</p>
              <p>운영시간: (실제 운영시간 입력 필요)</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-sm text-center">
          <p>&copy; 2024 화장실을부탁해. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// 모바일 고정 상담바 (개선)
function MobileFixedBar() {
  const handleMobileCTA = (type: 'phone' | 'kakao') => {
    if (type === 'phone' && CONTACT.phone) {
      window.location.href = `tel:${CONTACT.phone}`
    } else if (type === 'kakao' && CONTACT.kakao) {
      window.open(CONTACT.kakao, '_blank')
    }
    
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        contact_type: type,
        section: 'mobile_bar'
      })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-cyan-600 shadow-2xl md:hidden z-50 pb-safe animate-slide-up">
      {/* 가격 표시 */}
      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 text-center border-b border-primary/20">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-gray-800">오늘만 <span className="text-primary text-lg">39,000원</span></span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-0">
        <button 
          onClick={() => handleMobileCTA('phone')}
          className="flex items-center justify-center gap-2 py-5 bg-white/10 hover:bg-white/20 text-white font-bold transition-all active:scale-95"
        >
          <Phone className="w-5 h-5" />
          <span>전화 상담</span>
        </button>
        <button 
          onClick={() => handleMobileCTA('kakao')}
          className="flex items-center justify-center gap-2 py-5 bg-white hover:bg-white/90 text-primary font-bold transition-all active:scale-95 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          <span>무료 견적</span>
        </button>
      </div>
    </div>
  )
}

// GA4 타입 선언
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default App
