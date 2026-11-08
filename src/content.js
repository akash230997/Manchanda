// All site text lives here. Edit this file to update content; add pages in App.jsx.
export const SITE_URL = 'https://www.hsprofessional.ca' // TODO: confirm final domain
export const site = {
  name: 'HSPC',
  legalName: 'HS Professional Corporation',
  tagline: 'Chartered Professional Accountants',
  founder: 'Harmeet Singh',
  founderTitle: 'Founder · CA (India) · CPA (Canada)',
  approach: 'Cutting Through Complexity',
  address: '3496, Grand Oak Cross, London ON N6P07',
  headOffice: {
    label: 'Head office',
    lines: ['3496, Grand Oak Cross', 'London ON N6P07'],
    map: 'https://www.google.com/maps?q=3496+Grand+Oak+Cross,+London,+ON&output=embed',
  },
  branchOffice: {
    label: 'Branch office',
    lines: ['2425 Matheson Blvd E, 8th Floor #2', 'Mississauga, ON L4W 5K4'],
    map: 'https://www.google.com/maps?q=2425+Matheson+Blvd+E,+Mississauga,+ON+L4W+5K4&output=embed',
  },
  phone: '',
  email: 'harmeet@hsprofessional.ca',
  contactName: 'Harmeet Singh',
  regions: 'GTA, KWC region and London',
  logo: '/brand/logo.png',
  founderPhoto: '/team/harmeet.jpg',
}
export const nav = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/team', 'Our Team'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact'],
]
export const carousel = [
  {
    id: 'welcome',
    kicker: 'CPA · London & Mississauga',
    title: 'World-class service with a designed solution.',
    text: `At HSPC we are committed to cutting through complexity for clients across the ${site.regions}.`,
    cta: { to: '/contact', label: 'Free consultation' },
    ghost: { to: '/services', label: 'Our services' },
    image: '/carousel/welcome.jpg',
    alt: 'Modern Canadian corporate office skyline at twilight',
  },
  {
    id: 'bookkeeping',
    kicker: 'Bookkeeping and Cloud Accounting',
    title: 'Accounting operations that match the objectives of the business.',
    text: 'Regular bookkeeping, interim financials, projections and compilation engagement reports.',
    cta: { to: '/services#bookkeeping', label: 'Explore accounting' },
    ghost: { to: '/contact', label: 'Speak with us' },
    image: '/services/bookkeeping.jpg',
    alt: 'Modern workspace for cloud accounting and bookkeeping',
  },
  {
    id: 'taxation',
    kicker: 'Taxation',
    title: 'Corporate, payroll, personal and international tax — handled with care.',
    text: 'From T2 and HST filings to CRA audits, T1 planning and cross-border structuring.',
    cta: { to: '/services#taxation', label: 'Explore tax' },
    ghost: { to: '/contact', label: 'Request advice' },
    image: '/services/taxation.jpg',
    alt: 'Detailed tax planning desk for Canadian businesses',
  },
  {
    id: 'advisory',
    kicker: 'Advisory',
    title: 'Internal controls, fractional CFO support and valuation services.',
    text: 'Practical advisory that helps owners strengthen operations and make confident decisions.',
    cta: { to: '/services#advisory', label: 'Explore advisory' },
    ghost: { to: '/team', label: 'Meet the founder' },
    image: '/services/advisory.jpg',
    alt: 'Executive meeting space for advisory and CFO support',
  },
]
export const about = [
  'At HSPC we are committed to providing our clients with world class service involving a designed solution. With our “Cutting Through Complexity” approach, we provide services to numerous industries and associations across the GTA, KWC region and London.',
  'Founded by Harmeet Singh, a Chartered Accountant from India and CPA in Canada, the firm aims to provide its clients the technical knowledge and service quality they would expect from a large multinational consulting firm, but with a focus on personal relationships and affordability.',
]
export const founder = {
  name: 'Harmeet Singh',
  title: 'Founder · CA (India) · CPA (Canada)',
  photo: '/team/harmeet.jpg',
  alt: 'Portrait of Harmeet Singh, founder of HSPC',
  bio: [
    'Harmeet has a rich 18 years of combined experience in handling direct tax and regulatory issues pertaining to a range of industries and has successfully serviced a variety of international and domestic clients.',
    'He has been associated with KPMG India in the past and has advised many multinational companies in cross border acquisitions and investment structuring, double taxation avoidance agreements and other international tax matters.',
  ],
}
export const industries = [
  'Transportation and Logistics',
  'Auto Collision',
  'Dealerships',
  'IT Consultants',
  'Manpower Recruitment',
  'Food and Beverage',
  'Real Estate and Construction',
  'Car Rental',
  'Professionals',
]
export const industrySlides = [
  {
    id: 'logistics',
    kicker: 'Industry',
    title: 'Transportation and Logistics',
    text: 'Clear books and tax support for fleets, freight and supply-chain operators.',
    image: '/industries/logistics.jpg',
    alt: 'Logistics warehouse and freight trucks at dusk',
  },
  {
    id: 'dealership',
    kicker: 'Industry',
    title: 'Dealerships & Auto Collision',
    text: 'Practical accounting for dealerships, body shops and automotive service businesses.',
    image: '/industries/dealership.jpg',
    alt: 'Modern automobile dealership showroom',
  },
  {
    id: 'tech',
    kicker: 'Industry',
    title: 'IT Consultants',
    text: 'Structured bookkeeping and tax planning for consulting and professional services firms.',
    image: '/industries/tech.jpg',
    alt: 'Modern technology consulting workspace',
  },
  {
    id: 'food',
    kicker: 'Industry',
    title: 'Food and Beverage',
    text: 'Reliable interim financials and HST support for restaurants and hospitality operators.',
    image: '/industries/food.jpg',
    alt: 'Upscale restaurant dining interior',
  },
  {
    id: 'realestate',
    kicker: 'Industry',
    title: 'Real Estate and Construction',
    text: 'Project-aware accounting and advisory for builders, developers and property businesses.',
    image: '/industries/realestate.jpg',
    alt: 'Contemporary construction site at blue hour',
  },
]
export const serviceShowcase = [
  {
    id: 'bookkeeping-show',
    kicker: 'Practice area',
    title: 'Bookkeeping and Cloud Accounting',
    text: 'Regular bookkeeping, interim financials, projections and compilation engagement reports.',
    image: '/services/bookkeeping.jpg',
    alt: 'Cloud accounting desk with laptop and ledgers',
    link: { to: '/services#bookkeeping', label: 'View bookkeeping services' },
  },
  {
    id: 'taxation-show',
    kicker: 'Practice area',
    title: 'Taxation',
    text: 'Corporate, payroll, personal and international tax — including CRA compliance and filings.',
    image: '/services/taxation.jpg',
    alt: 'Professional tax planning workspace',
    link: { to: '/services#taxation', label: 'View tax services' },
  },
  {
    id: 'advisory-show',
    kicker: 'Practice area',
    title: 'Advisory',
    text: 'Internal controls, SOP design, fractional CFO support and valuation services.',
    image: '/services/advisory.jpg',
    alt: 'Executive advisory lounge with city views',
    link: { to: '/services#advisory', label: 'View advisory services' },
  },
]
export const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping and Cloud Accounting',
    image: '/services/bookkeeping.jpg',
    alt: 'Cloud accounting desk with laptop and ledgers',
    intro: [
      'We work with our clients to help them achieve compliance and ensuring that accounting operations match the objectives of the business.',
    ],
    items: [
      { t: 'Regular bookkeeping services' },
      { t: 'Preparing interim financials' },
      { t: 'Assistance with projections' },
      { t: 'Preparing Compilation Engagement report' },
    ],
  },
  {
    id: 'taxation',
    title: 'Taxation',
    image: '/services/taxation.jpg',
    alt: 'Professional tax planning workspace',
    intro: [
      'Our tax practice covers corporate, payroll, personal and international taxation — with practical guidance for Canadian businesses and cross-border matters.',
    ],
    items: [
      {
        t: 'Corporate Tax',
        d: [
          'Comprehensive management of direct tax matters',
          'CRA audits and compliances',
          'Filing of Annual Corporate Tax return T2',
          'Assistance in Litigation, appeals etc.',
          'Filing of HST returns',
        ],
      },
      {
        t: 'Payroll Tax',
        d: [
          'Monthly payroll compliance',
          'Preparation of T4 / T5 slips',
          'CRA trust audit assistance',
        ],
      },
      {
        t: 'Personal Tax',
        d: ['Tax planning for sole proprietors', 'Filing of personal tax return T1'],
      },
      {
        t: 'International Tax',
        d: [
          'International taxation with reference to double taxation treaties',
          'Tax efficient structuring for cross border transactions',
          'Expatriate employees taxation',
        ],
      },
    ],
  },
  {
    id: 'advisory',
    title: 'Advisory',
    image: '/services/advisory.jpg',
    alt: 'Executive advisory lounge with city views',
    intro: [
      'Beyond compliance, we support owners with controls, process design and senior financial leadership when they need it.',
    ],
    items: [
      { t: 'Internal audit and controls' },
      { t: 'SOP formulation' },
      { t: 'Fractional CFO services' },
      { t: 'Valuation services' },
    ],
  },
]
export const team = [
  {
    title: 'Leadership',
    points: [
      'Founded and led by Harmeet Singh, CA (India) and CPA (Canada).',
      '18 years of combined experience in direct tax and regulatory matters.',
      'Former association with KPMG India on cross-border and international tax work.',
      'Focus on personal relationships with multinational-calibre technical depth.',
    ],
  },
  {
    title: 'How we work',
    points: [
      '“Cutting Through Complexity” — designed solutions for each client.',
      'Service quality expected of a large consulting firm, with personal care.',
      'Industry experience across logistics, dealerships, real estate, F&B and more.',
      'Offices in London and Mississauga to support clients across the region.',
    ],
  },
]
export const links = [
  ['Canada Revenue Agency', 'https://www.canada.ca/en/revenue-agency.html'],
  ['CPA Ontario', 'https://www.cpaontario.ca'],
  ['Government of Canada – Business', 'https://www.canada.ca/en/services/business.html'],
  ['Ontario Business Registry', 'https://www.ontario.ca/page/ontario-business-registry'],
]
