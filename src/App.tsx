import { Phone, MessageCircle, CheckCircle, Sparkles, ChevronDown } from 'lucide-react'
import { useState } from 'react'

// 설정 파일 (실제 연락처 정보)
const CONTACT = {
  phone: '', // 실제 전화번호 입력 필요
  kakao: '', // 실제 카카오톡 오픈채팅 링크 입력 필요
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <PricingSection />
      <DirectServiceSection />
      <ProcessSection />
      <CasesSection />
      <AreasSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <MobileFixedBar />
    </div>
  )
}

// SECTION 01 - HERO
function HeroSection() {
  const handleCTA = (type: 'quote' | 'phone') => {
    if (type === 'phone' && CONTACT.phone) {
      window.location.href = `tel:${CONTACT.phone}`
    } else if (type === 'quote' && CONTACT.kakao) {
      window.open(CONTACT.kakao, '_blank')
    }
    
    // GA4 이벤트 추적
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        contact_type: type,
        section: 'hero'
      })
    }
  }

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-secondary to-white px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text leading-tight mb-6">
          화장실 청소,<br />
          이제 직접 하지 마세요.
        </h1>
        
        <p className="text-lg md:text-xl text-text/80 mb-4">
          부산 화장실·욕실 집중 청소 전문
        </p>
        
        <p className="text-base md:text-lg text-text/70 mb-6 max-w-2xl mx-auto">
          원룸부터 아파트까지,<br />
          대표가 직접 방문해 욕실 한 곳에 집중합니다.
        </p>
        
        <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold text-xl md:text-2xl">39,000원부터</span>
        </div>
        
        <p className="text-sm text-text/60 mb-8">
          원룸·소형 욕실 기준 / 욕실 상태에 따라 견적 상이
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <button 
            onClick={() => handleCTA('quote')}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            우리 집 욕실 청소 견적받기
          </button>
          <button 
            onClick={() => handleCTA('phone')}
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            전화로 상담하기
          </button>
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

// 모바일 고정 상담바
function MobileFixedBar() {
  const handleMobileCTA = (type: 'phone' | 'kakao') => {
    if (type === 'phone' && CONTACT.phone) {
      window.location.href = `tel:${CONTACT.phone}`
    } else if (type === 'kakao' && CONTACT.kakao) {
      window.open(CONTACT.kakao, '_blank')
    }
    
    // GA4 이벤트 추적
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        contact_type: type,
        section: 'mobile_bar'
      })
    }
  }

  // 연락처가 설정되지 않았으면 표시하지 않음
  if (!CONTACT.phone && !CONTACT.kakao) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50 pb-safe">
      <div className="grid grid-cols-2 gap-0">
        {CONTACT.phone && (
          <button 
            onClick={() => handleMobileCTA('phone')}
            className="flex items-center justify-center gap-2 py-4 bg-white hover:bg-gray-50 text-primary font-semibold transition-colors"
          >
            <Phone className="w-5 h-5" />
            전화 상담
          </button>
        )}
        {CONTACT.kakao && (
          <button 
            onClick={() => handleMobileCTA('kakao')}
            className="flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary/90 text-white font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            카카오톡 무료 견적
          </button>
        )}
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
