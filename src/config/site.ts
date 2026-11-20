// 사이트 운영 정보 — 연락처·가격·지역·사업자 정보·사진은 이 파일 하나만 고치면 페이지 전체에 반영된다.
// 값이 비어 있으면('') 해당 버튼은 비활성으로, 해당 항목은 화면에서 빠진다.
// 확인되지 않은 번호·주소·사업자번호를 임의로 넣지 말 것.

export type PlanId = 'small' | 'standard' | 'large'

export interface Plan {
  id: PlanId
  name: string
  target: string
  /** 고객 결제금액(부가세 포함) */
  price: number
  /** 정상가. 없으면 표시하지 않는다 */
  regularPrice?: number
  /** true면 '부터'를 붙인다 */
  from?: boolean
  /** 오픈 특가 적용 여부 */
  eventPrice?: boolean
  duration?: string
  note?: string
  recommended?: boolean
}

export interface CaseItem {
  /** public/ 기준 경로. 예: '/images/cases/2026-01-yeonje-before.webp' */
  beforeImage: string
  afterImage: string
  /** 예: '원룸 소형 욕실' */
  bathroomType: string
  /** 구 단위. 예: '연제구' */
  district: string
  /** 실제로 한 작업만 적는다 */
  scope: string[]
  /** 예: '2026년 1월' */
  date?: string
}

export const site = {
  brand: '화장실을부탁해',
  /** 배포 주소. 예: 'https://www.example.co.kr' (끝 슬래시 없이). 비어 있으면 canonical·sitemap을 만들지 않는다 */
  siteUrl: '',

  contact: {
    /** 예: '010-1234-5678' */
    phone: '',
    /** 카카오톡 채널 1:1 채팅 주소. 예: 'https://pf.kakao.com/_xxxxxx/chat' */
    kakaoUrl: '',
  },

  /** 푸터·개인정보처리방침에 쓰인다. 빈 값은 표시하지 않는다 */
  business: {
    owner: '',
    registrationNumber: '',
    address: '',
    hours: '',
    email: '',
  },

  pricing: {
    eventLabel: '첫 10건 한정 오픈 특가',
    /** 관리자가 직접 확인한 잔여 건수와 기준일을 둘 다 넣었을 때만 표시한다 */
    eventRemaining: null as number | null,
    eventRemainingAsOf: '',
    plans: [
      {
        id: 'small',
        name: '소형 욕실',
        target: '원룸·소형 오피스텔',
        price: 39000,
        regularPrice: 59000,
        eventPrice: true,
        duration: '약 60~90분',
      },
      {
        id: 'standard',
        name: '일반 욕실',
        target: '아파트·빌라 일반 욕실',
        price: 59000,
        regularPrice: 79000,
        eventPrice: true,
        duration: '약 90~120분',
        recommended: true,
      },
      {
        id: 'large',
        name: '대형 욕실',
        target: '대형 욕실 및 복잡한 구조',
        price: 99000,
        from: true,
        note: '사진 확인 후 별도 견적',
      },
    ] as Plan[],
  },

  /** 출장 가능 여부를 운영자가 확인한 구만 넣는다. 그 외 지역은 '상담 시 안내'로 표시된다 */
  serviceAreas: ['연제구', '동래구', '부산진구', '수영구', '남구', '해운대구'],

  /** 실제 작업 사례. 비어 있으면 '청소 사례' 섹션과 메뉴가 숨겨진다. 허위 사례 금지 */
  cases: [] as CaseItem[],

  /** public/ 기준 경로. 실제 촬영 사진(WebP 권장)만 넣는다 */
  images: {
    /** 메인 욕실 사진. 비어 있으면 타일 일러스트가 대신 보인다 */
    hero: '',
    /** 대표 사진 */
    owner: '',
  },

  seo: {
    title: '부산 화장실 청소·욕실 청소 전문 | 화장실을부탁해',
    /** 검색 결과 문구. 위 가격을 바꾸면 여기 숫자도 함께 바꾼다 */
    description:
      '부산 화장실 청소 전문 화장실을부탁해. 원룸·오피스텔·아파트 욕실 집중 청소. 소형 욕실 39,000원부터, 일반 욕실 59,000원부터. 사진 상담으로 간편하게 견적을 확인하세요.',
    /** public/ 기준 1200×630 PNG/JPG. 파일을 넣은 뒤 경로를 적는다. 예: '/og-image.png' */
    ogImage: '',
    /** Google Search Console HTML 태그의 content 값 */
    googleVerification: '',
    /** 네이버 서치어드바이저 HTML 태그의 content 값 */
    naverVerification: '',
  },

  analytics: {
    /** GA4 측정 ID. 예: 'G-XXXXXXXXXX' */
    ga4Id: '',
    /** 네이버 공통 스크립트 계정 ID(wcs_add["wa"] 값). 예: 's_xxxxxxxxxxxx' */
    naverWa: '',
    /**
     * 상담 버튼 클릭을 네이버 전환으로도 보낼 때의 전환 유형.
     * 광고 관리자에서 발급된 전환 스크립트의 type 값과 같게 넣는다. 비어 있으면 보내지 않는다.
     */
    naverConversionType: '',
  },
}

/** 화면에 쓰는 원화 표기. 39000 → '39,000원' */
export const won = (n: number) => `${n.toLocaleString('ko-KR')}원`

/** 최저가 요금제 (히어로·최종 CTA의 'OO원부터'에 쓰인다) */
export const startPlan = site.pricing.plans.reduce((a, b) => (b.price < a.price ? b : a))
