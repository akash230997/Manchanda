// All site text lives here. Edit this file to update content; add pages in App.jsx.
export const SITE_URL = 'https://www.example.com' // TODO: final domain
export const site = {
  name: 'Manchanda & Manchanda',
  tagline: 'Chartered Accountants',
  founded: 1981,
  address: 'C-286, Defence Colony, New Delhi-110024',
  phone: '+91-11-41553060-66',
  fax: '91-11-41553068',
  email: 'info@mnmcapartners.com', // TODO: confirm client's primary email
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
    id: 'heritage',
    kicker: `Chartered Accountants · New Delhi · Since ${site.founded}`,
    title: 'Technical knowledge with a focus on personal relationships.',
    text: 'Serving clients for over three decades across audit, taxation, accounting and advisory.',
    cta: { to: '/contact', label: 'Get in touch' },
    ghost: { to: '/services', label: 'Our services' },
    image: '/carousel/heritage.jpg',
    alt: 'Historic New Delhi office architecture at dusk',
  },
  {
    id: 'audit',
    kicker: 'Audit and Assurance',
    title: 'Reliable financial reporting when the landscape keeps shifting.',
    text: 'Internal, management and statutory audits that help boards, lenders and stakeholders act with confidence.',
    cta: { to: '/services#audit', label: 'Explore audit' },
    ghost: { to: '/contact', label: 'Speak with us' },
    image: '/carousel/audit.jpg',
    alt: 'Executive boardroom prepared for a financial review',
  },
  {
    id: 'taxation',
    kicker: 'Taxation',
    title: 'Practical tax advice across corporate, personal and indirect tax.',
    text: 'A multi-jurisdictional approach that keeps clients aligned with regulation while they grow.',
    cta: { to: '/services#taxation', label: 'Explore tax' },
    ghost: { to: '/contact', label: 'Request advice' },
    image: '/carousel/tax.jpg',
    alt: 'Quiet luxury desk with ledgers and a fountain pen',
  },
  {
    id: 'advisory',
    kicker: 'Accounting and Advisory',
    title: 'Compliance, outsourcing and transactional support, tailored to the business.',
    text: 'From payroll and IFRS to India entry, valuations and restructuring — with the care of a trusted partner.',
    cta: { to: '/services#accounting', label: 'Explore advisory' },
    ghost: { to: '/team', label: 'Meet the team' },
    image: '/carousel/advisory.jpg',
    alt: 'Executive lounge overlooking a city skyline at twilight',
  },
]
export const about = [
  'Manchanda & Manchanda is a firm of Chartered Accountants with office in central Delhi established in 1981.',
  'The strength of the firm is its team of professionals (Chartered Accountants, Company Secretaries, MBAs, Lawyers, Valuers) having diverse and rich experience of working with Big4 audit firms and leading outsourcing companies, in the field of Accounting, Audit and taxation.',
  'The firm is providing services in diverse spheres of accounting, risk advisory, Internal audit, taxation, financial and business transactional support to clients at various geographical locations.',
  'With its rich experience of 30+ years and dedicated team of professionals, the firm aims to provide its clients the technical knowledge and service quality they would expect from a large multinational consulting firm, but with a focus on personal relationships and affordability.',
]
export const endeavor = [
  'Understand client needs',
  'Focus on appropriate solutions',
  'Fully support deliverables and timelines',
  'Create enduring value for client',
]
export const services = [
  {
    id: 'audit',
    title: 'Audit and Assurance',
    intro: [
      'When faced with a swiftly changing economic and regulatory landscape, the need for timely, high-quality audits is critical. We understand how important audited financial statements are to businesses, shareholders/owners, lenders, investors and other stakeholders. It’s easy to understand why management and boards need assurance on the reliability of the financial information they report to stakeholders.',
      'We work with clients to improve their overall financial reporting processes and to help them better understand their business.',
    ],
    items: [{ t: 'Internal and Management Audit' }, { t: 'Statutory Audit' }],
  },
  {
    id: 'taxation',
    title: 'Taxation',
    intro: [
      'We have developed a total tax management capability which encompasses the entire spectrum of direct, indirect and personal taxes. Our approach to tax planning is multi-jurisdictional. Our professionals are drawn from a wide variety of backgrounds. Service line specialization and advanced training equip them to work with our clients and be their advisors in a wide spectrum of their business processes.',
    ],
    items: [
      { t: 'Corporate Tax' },
      { t: 'Personal Tax' },
      { t: 'International Tax' },
      { t: 'Indirect Tax' },
    ],
    points: [
      'Our tax team helps dynamic companies navigate complexity and grow with insightful, practical tax advice.',
      'Our experienced tax professionals can assist in resolving various challenges such as keeping abreast with tax regulations.',
      'Our tax team develops a thorough understanding of the emerging issues and their impact on the clients’ businesses.',
    ],
    outro:
      'They will provide you with an insight into how to best work with the taxman to meet your business needs.',
  },
  {
    id: 'accounting',
    title: 'Accounting and Advisory',
    intro: [
      'Our accounting advisory professionals work with our firms’ clients to help them achieve compliance and ensuring that accounting operations match the objectives of the business. Your business faces myriad complex accounting issues related to acquisitions, consolidations, debt / equity offerings and more. These are major challenges and may disrupt your day-to-day operations. We help companies maximize value during these moments of exceptional change. We tailor solutions to your needs.',
      'We also consider it our job to continually inform our clients about accounting, financial and regulatory developments that may affect their business.',
    ],
    items: [
      { t: 'Accounting and Payroll Processing', d: ['Accounting', 'Payroll Processing'] },
      {
        t: 'Accounting Support Services',
        d: [
          'Set up Accounting Systems',
          'Implementation of Accounting Software',
          'Formulation of Accounting Systems',
          'Preparation of Financial & Accounting Manuals',
          'IFRS Implementation',
        ],
      },
      {
        t: 'Audit Support Services',
        d: [
          'Help client ‘get ready’ for the audit',
          'Reduce audit time and save cost for client',
          'Prepare audit schedules and necessary documentation',
          'Answer Audit queries',
          'SPoC for Auditors',
        ],
      },
      {
        t: 'F & A Outsourcing',
        d: [
          'General accounting & closing',
          'P2P accounting',
          'O2C accounting',
          'Management accounting',
        ],
      },
      {
        t: 'Statutory Reporting',
        d: [
          'Preparation of Financial statements as per relevant country specific GAAP, IFRS',
          'Reconciliation of management accounts with Statutory accounts',
          'Develop process documentation',
          'Preparation of SOP',
        ],
      },
      {
        t: 'Advisory',
        d: [
          'Strategy (e.g. Company vs. Partnership) & Corporate Formation, Setting up office in India (Branch/Liaison/Project)',
          'Foreign Investment advisory (as per extant FDI regulations)',
          'FIPB approvals',
          'Valuation of shares',
          'Valuation of business',
          'Turnkey advisory for M&As & restructuring transactions, including advisory on business/ undertaking valuations, High Court approvals and legal documentation',
        ],
      },
      { t: 'RTR and General Administration Support Services' },
    ],
  },
]
export const team = [
  {
    title: 'Leadership',
    points: [
      'Chartered Accountants with combined post qualification experience of 40+ years.',
      'Combined Big4 experience of 20+ years.',
      'Various areas of specialization.',
      'Experience of serving clients in various countries and in multiple industries.',
    ],
  },
  {
    title: 'Professionally Qualified Staff & growing..',
    points: [
      'Chartered Accountants, Semi-qualified professionals and Aspiring CAs.',
      'Team of Company Secretaries, Lawyers, MBAs, Valuers.',
      'Excellent educational background.',
      'Experience of serving clients in various Business domains, and working with Large Outsourcing companies.',
    ],
  },
]
export const links = [
  ['Reserve Bank of India', 'https://www.rbi.org.in'],
  ['Income Tax', 'https://www.incometax.gov.in'],
  ['The Institute of Chartered Accountants of India', 'https://www.icai.org'],
  ['Ministry of Corporate Affairs', 'https://www.mca.gov.in'],
]
