const source = (domain, report) => `Rogers Demo Data Hub > ${domain} > ${report}`;

const metrics = [
  {
    id: 'wireless-subscriber-growth',
    name: 'Wireless Subscriber Growth',
    domain: 'Wireless',
    value: '+42.8K',
    unit: 'postpaid net adds (QTD)',
    trend: 'up',
    changePct: 6.4,
    status: 'healthy',
    sparkline: [25, 28, 31, 30, 35, 38, 41, 42.8],
    source: source('Wireless', 'Subscriber Growth'),
  },
  {
    id: 'wireless-arpu',
    name: 'Wireless ARPU',
    domain: 'Wireless',
    value: '$58.40',
    unit: 'monthly per subscriber',
    trend: 'up',
    changePct: 1.8,
    status: 'healthy',
    sparkline: [56.8, 57, 57.2, 57.4, 57.6, 57.9, 58.1, 58.4],
    source: source('Wireless', 'Revenue & ARPU'),
  },
  {
    id: 'mobile-attach-rate',
    name: 'Mobile Attach Rate',
    domain: 'Households',
    value: '34.6%',
    unit: 'eligible internet households',
    trend: 'up',
    changePct: 2.1,
    status: 'watch',
    sparkline: [31.2, 31.6, 32.1, 32.4, 33, 33.5, 34, 34.6],
    source: source('Households', 'Product Attach'),
  },
  {
    id: 'wireless-churn',
    name: 'Wireless Churn Rate',
    domain: 'Wireless',
    value: '0.94%',
    unit: 'monthly postpaid churn',
    trend: 'down',
    changePct: -0.08,
    status: 'healthy',
    sparkline: [1.08, 1.06, 1.04, 1.03, 1.01, 0.99, 0.96, 0.94],
    source: source('Wireless', 'Retention & Churn'),
  },
  {
    id: 'broadband-net-adds',
    name: 'Broadband Net Adds',
    domain: 'Internet',
    value: '+18.2K',
    unit: 'internet subscribers (QTD)',
    trend: 'up',
    changePct: 3.7,
    status: 'healthy',
    sparkline: [10, 11, 12, 13, 14, 15, 17, 18.2],
    source: source('Internet', 'Subscriber Growth'),
  },
  {
    id: 'customer-lifetime-value',
    name: 'Customer Lifetime Value',
    domain: 'Customer',
    value: '$2,460',
    unit: 'illustrative modeled value',
    trend: 'up',
    changePct: 2.6,
    status: 'healthy',
    sparkline: [2310, 2325, 2350, 2370, 2390, 2410, 2430, 2460],
    source: source('Customer', 'Value Model'),
  },
  {
    id: 'revenue-growth',
    name: 'Revenue Growth',
    domain: 'Finance',
    value: '+4.2%',
    unit: 'year over year (illustrative)',
    trend: 'up',
    changePct: 4.2,
    status: 'healthy',
    sparkline: [1.2, 1.8, 2.3, 2.7, 3.1, 3.5, 3.8, 4.2],
    source: source('Finance', 'Revenue Summary'),
  },
  {
    id: 'ai-impact-score',
    name: 'AI Impact Score',
    domain: 'AI Transformation',
    value: '72 / 100',
    unit: 'illustrative adoption index',
    trend: 'up',
    changePct: 5.3,
    status: 'watch',
    sparkline: [55, 58, 60, 62, 65, 67, 69, 72],
    source: source('AI Transformation', 'Adoption Scorecard'),
  },
  {
    id: 'contact-center-automation',
    name: 'Contact Center Automation',
    domain: 'Customer Experience',
    value: '28.5%',
    unit: 'eligible interactions automated',
    trend: 'up',
    changePct: 3.4,
    status: 'watch',
    sparkline: [19, 20, 21, 22, 23.5, 25, 26.8, 28.5],
    source: source('Customer Experience', 'Care Automation'),
  },
  {
    id: 'household-penetration',
    name: 'Household Penetration',
    domain: 'Households',
    value: '41.2%',
    unit: 'multi-product households',
    trend: 'flat',
    changePct: 0.4,
    status: 'watch',
    sparkline: [40.2, 40.4, 40.6, 40.7, 40.8, 41, 41.1, 41.2],
    source: source('Households', 'Product Penetration'),
  },
  {
    id: 'network-performance',
    name: 'Network Performance',
    domain: 'Network',
    value: '99.96%',
    unit: 'availability (30-day)',
    trend: 'flat',
    changePct: -0.01,
    status: 'healthy',
    sparkline: [99.94, 99.95, 99.96, 99.96, 99.97, 99.96, 99.96, 99.96],
    source: source('Network', 'Reliability Monitor'),
  },
  {
    id: 'business-services-growth',
    name: 'Business Services Growth',
    domain: 'Business Services',
    value: '+6.1%',
    unit: 'SMB revenue growth (YoY)',
    trend: 'up',
    changePct: 6.1,
    status: 'healthy',
    sparkline: [2, 2.6, 3.1, 3.8, 4.2, 4.9, 5.4, 6.1],
    source: source('Business Services', 'SMB Revenue'),
  },
];

const executives = [
  {
    id: 'rogers-ceo',
    name: 'Mahes Wickramasinghe',
    title: 'President, Group Operations',
    focusMetrics: ['wireless-subscriber-growth', 'broadband-net-adds', 'revenue-growth', 'household-penetration', 'business-services-growth'],
  },
  {
    id: 'rogers-cfo',
    name: 'Glenn Brandt',
    title: 'Chief Financial Officer',
    focusMetrics: ['revenue-growth', 'wireless-arpu', 'customer-lifetime-value', 'business-services-growth', 'wireless-churn'],
  },
  {
    id: 'rogers-wireless',
    name: 'Anne Martin-Vachon',
    title: 'President of Wireless',
    focusMetrics: ['wireless-subscriber-growth', 'wireless-arpu', 'mobile-attach-rate', 'wireless-churn', 'household-penetration'],
  },
  {
    id: 'rogers-enterprise',
    name: 'Tom Kennedy',
    title: 'President, Rogers Business',
    focusMetrics: ['business-services-growth', 'revenue-growth', 'network-performance', 'customer-lifetime-value'],
  },
  {
    id: 'rogers-technology',
    name: 'Mark Kennedy',
    title: 'Chief Technology Officer',
    focusMetrics: ['network-performance', 'broadband-net-adds', 'wireless-subscriber-growth'],
  },
  {
    id: 'rogers-cio',
    name: 'Ian Kennedy',
    title: 'Chief Information Officer',
    focusMetrics: ['network-performance', 'ai-impact-score', 'contact-center-automation', 'broadband-net-adds'],
  },
  {
    id: 'rogers-digital',
    name: 'Darren Matsunaga',
    title: 'SVP for Digital',
    focusMetrics: ['wireless-churn', 'customer-lifetime-value', 'contact-center-automation', 'mobile-attach-rate', 'household-penetration'],
  },
];

const anomalies = [
  {
    id: 'rogers-household-gap',
    metricId: 'household-penetration',
    severity: 'medium',
    headline: 'Multi-product household penetration has flattened',
    driverSummary: 'Illustrative segment analysis shows a larger single-product cohort among internet households. Compare eligible wireless-only and internet-only households before selecting a next-best-product motion; the segment relationship is a lead for investigation, not proof of causation.',
    relatedMetrics: ['mobile-attach-rate'],
    source: source('Households', 'Product Penetration & Eligibility'),
  },
  {
    id: 'rogers-wireless-retention',
    metricId: 'wireless-churn',
    severity: 'medium',
    headline: 'A high-value wireless cohort shows elevated modeled churn risk',
    driverSummary: 'An illustrative risk model flags a small cohort with declining engagement and recent care contacts. Validate model coverage and eligibility, then compare retention actions against expected lifetime value before outreach.',
    relatedMetrics: ['customer-lifetime-value', 'wireless-arpu'],
    source: source('Wireless', 'Retention Risk Signals'),
  },
  {
    id: 'rogers-care-automation',
    metricId: 'contact-center-automation',
    severity: 'low',
    headline: 'Care automation is growing, with room to expand eligible intents',
    driverSummary: 'Automation coverage is improving in the demo scenario. Review containment, repeat contacts, customer feedback, and escalation quality together so higher automation does not come at the cost of customer experience.',
    relatedMetrics: ['ai-impact-score'],
    source: source('Customer Experience', 'Care Automation Quality'),
  },
  {
    id: 'rogers-smb-opportunity',
    metricId: 'business-services-growth',
    severity: 'low',
    headline: 'SMB cross-sell signals indicate a business-services growth opportunity',
    driverSummary: 'Illustrative account signals identify customers with connectivity needs that may align to additional business services. Validate account fit and serviceability before estimating pipeline or revenue impact.',
    relatedMetrics: ['network-performance'],
    source: source('Business Services', 'SMB Opportunity Signals'),
  },
];

const dailyBrief = {
  date: 'Today',
  generatedAt: '6:00 AM ET',
  headline: 'Wireless and business-services growth are positive; household penetration and targeted retention are the clearest opportunities.',
  narrative: [
    'Good morning. The illustrative operator view shows wireless subscriber growth of +42.8K quarter-to-date and wireless ARPU of $58.40. Broadband net adds are +18.2K, while business services growth is +6.1%. These are synthetic demo values designed to demonstrate how the experience can bring wireless, internet, and B2B signals together.',
    'The most actionable opportunity is multi-product household penetration at 41.2%, which has flattened. A focused review of internet-only and wireless-only households can size potential next-best-product segments. Separately, a modeled high-value wireless cohort merits a validated retention review before any customer action.',
    'Network performance remains stable at 99.96%. Contact-center automation is 28.5% of eligible interactions in this scenario; evaluate customer outcomes and repeat contacts alongside efficiency as coverage expands.',
  ],
  recommendedFocus: 'Validate the eligible household opportunity and prioritize a small, measurable mobile attach or retention test with customer and financial guardrails.',
};

const executiveBriefs = {
  'rogers-ceo': {
    ...dailyBrief,
    headline: 'Growth signals are positive across wireless, internet, and business services; household relationship depth is the cross-portfolio opportunity.',
    recommendedFocus: 'Sponsor a measurable household-growth test with wireless, internet, and customer teams, and review leading indicators alongside customer outcomes.',
  },
  'rogers-cfo': {
    ...dailyBrief,
    headline: 'Illustrative revenue growth is broad-based; assess retention and attach options using contribution, payback, and lifetime-value guardrails.',
    narrative: [
      'Good morning. In this synthetic scenario, revenue growth is +4.2% year over year, wireless ARPU is $58.40, and business services growth is +6.1%. The figures are for demo illustration only, not company-reported results.',
      'The modeled opportunity is to deepen household product relationships and retain high-value wireless customers. Evaluate incremental contribution, offer cost, expected persistence, and payback before prioritizing options.',
      'Customer lifetime value is shown as an illustrative $2,460 model output. Treat it as directional until assumptions, cohort coverage, and finance-approved definitions are confirmed.',
    ],
    recommendedFocus: 'Request a scenario comparison for household attach and wireless retention that makes assumptions, contribution, payback, and downside sensitivity explicit.',
  },
  'rogers-wireless': {
    ...dailyBrief,
    headline: 'Wireless net additions and ARPU are trending positively; use targeted attach and churn analysis to protect profitable growth.',
    recommendedFocus: 'Validate the flagged wireless cohort, then compare targeted retention and eligible internet-household attach motions against control groups.',
  },
  'rogers-enterprise': {
    ...dailyBrief,
    headline: 'SMB business-services growth is an opportunity to scale through serviceable-account identification and evidence-backed cross-sell.',
    recommendedFocus: 'Prioritize a serviceability-checked SMB opportunity list and track qualified pipeline, conversion, and realized revenue.',
  },
  'rogers-technology': {
    ...dailyBrief,
    headline: 'Network performance is stable; focus technology and AI investment on measurable care outcomes and responsible deployment.',
    recommendedFocus: 'Review automation quality, repeat contact rate, escalation safety, and network trends before expanding AI use cases.',
  },
  'rogers-cio': {
    ...dailyBrief,
    headline: 'Information platforms and AI adoption should scale with governed data, reliable operations, and measurable customer outcomes.',
    narrative: [
      'Good morning. The illustrative technology view shows network performance at 99.96% and an AI impact score of 72 / 100. These synthetic indicators are intended to demonstrate a CIO-oriented view, not report actual company performance.',
      'Contact-center automation is 28.5% of eligible interactions. Before expanding, validate data quality, access controls, integration reliability, and the customer outcomes associated with automated interactions.',
      'Coordinate platform and data investments with wireless, internet, care, and business-services priorities. Keep model outputs traceable to governed sources and make operational ownership clear.',
    ],
    recommendedFocus: 'Review the data and integration readiness for the next AI use case, including access, quality, reliability, auditability, and outcome measurement.',
  },
  'rogers-digital': {
    ...dailyBrief,
    headline: 'Digital engagement and care automation can improve customer journeys when paired with relevant offers and experience guardrails.',
    narrative: [
      'Good morning. The illustrative digital and customer view shows contact-center automation at 28.5% of eligible interactions, mobile attach at 34.6%, and household penetration at 41.2%. These synthetic demo measures help frame opportunities across digital service and product journeys.',
      'Review automation quality alongside containment, repeat contacts, escalation, accessibility, and customer feedback. For household offers, validate eligibility and relevance before presenting a next-best-product recommendation.',
      'The modeled wireless churn cohort can inform a digital retention journey only after the risk signal, consent, and customer treatment are validated. Track opt-outs and customer outcomes as well as conversion.',
    ],
    recommendedFocus: 'Prioritize one digital journey improvement and test it with eligibility, accessibility, customer-experience, and measurement guardrails.',
  },
};

const feedPrompts = [
  'Where is the household growth opportunity?',
  'Which wireless customers may need retention attention?',
  'How can we improve mobile attach?',
  'What is changing in business services growth?',
  'What should I focus on today?',
];

const qaBank = [
  {
    keywords: ['household', 'penetration', 'attach', 'internet only', 'wireless only'],
    answer: 'In this synthetic demo, multi-product household penetration is 41.2% and has flattened. Review internet-only and wireless-only cohorts, confirm product eligibility and serviceability, then test a relevant next-best-product offer with a control group. This is an opportunity hypothesis, not a causal finding.',
    sources: [source('Households', 'Product Penetration & Eligibility')],
  },
  {
    keywords: ['churn', 'retention', 'risk'],
    answer: 'The illustrative risk model flags a high-value wireless cohort using engagement and care-contact signals. Validate model quality, eligibility, and customer permissions, then compare retention actions against a holdout group and measure retained contribution rather than gross saves alone.',
    sources: [source('Wireless', 'Retention Risk Signals')],
  },
  {
    keywords: ['mobile', 'bundle', 'conversion'],
    answer: 'The synthetic mobile attach rate is 34.6% of eligible internet households. A focused test could compare eligible households, offer acceptance, incremental line adds, revenue, and customer experience against a control group. Do not treat the projected conversion as guaranteed.',
    sources: [source('Households', 'Product Attach')],
  },
  {
    keywords: ['retail', 'store'],
    answer: 'The operator data library includes retail operations as a target domain. This demo has no live store feed, so store opportunity sizing is illustrative only; a production analysis would compare store traffic, conversion, staffing, inventory, and local customer demand.',
    sources: [source('Retail Operations', 'Illustrative Store Opportunity')],
  },
  {
    keywords: ['business services', 'smb', 'enterprise'],
    answer: 'Illustrative SMB revenue growth is +6.1% year over year. A cross-sell workflow should first verify account fit and serviceability, then estimate qualified pipeline and incremental revenue using finance-approved assumptions.',
    sources: [source('Business Services', 'SMB Revenue & Opportunity Signals')],
  },
  {
    keywords: ['network', 'performance'],
    answer: 'Network performance is 99.96% availability in the synthetic demo. Review reliability by market, impact, and incident type, and connect network trends to customer and care measures without inferring causation from correlation.',
    sources: [source('Network', 'Reliability Monitor')],
  },
  {
    keywords: ['ai', 'automation', 'contact center'],
    answer: 'The illustrative automation rate is 28.5% of eligible interactions. Track containment together with repeat contacts, customer feedback, escalation quality, accessibility, and agent impact before expanding.',
    sources: [source('Customer Experience', 'Care Automation Quality')],
  },
  {
    keywords: ['focus', 'today', 'recommend'],
    answer: 'The suggested focus is to validate the household opportunity and choose a small, measurable mobile attach or retention test with clear eligibility, customer-experience, and financial guardrails. All values in this demo are synthetic.',
    sources: [source('Households', 'Product Penetration & Eligibility'), source('Wireless', 'Retention Risk Signals')],
  },
];

const dataSources = [
  'CRM and customer relationship data',
  'Wireless platforms and subscriber data',
  'Broadband / internet platforms',
  'Customer care and contact-center systems',
  'Retail store performance data',
  'Network performance and incident data',
  'Billing and revenue systems',
  'Business services platforms and SMB account data',
];

const architectureLayers = [
  {
    id: 'data',
    name: 'Operator Data & Semantic Sources',
    summary: 'Governed Rogers-aligned sources and certified measures provide the evidence foundation.',
    components: dataSources,
  },
  {
    id: 'agents',
    name: 'Agent Orchestration & AI Platform',
    summary: 'Specialist agents coordinate operator-aware analysis, recommendations, and scenarios.',
    components: [
      'Azure AI Foundry (Agent Service) for orchestration',
      'Azure OpenAI models for reasoning and narrative generation',
      'Grounding and retrieval against governed operator metrics',
      'Evaluation for groundedness, quality, and safety',
    ],
  },
  {
    id: 'governance',
    name: 'Governance, Identity & Security',
    summary: 'Access control and responsible AI controls apply across the operator context.',
    components: [
      'Microsoft Entra ID for identity and role-based access',
      'Microsoft Purview for data governance and lineage',
      'Content safety and responsible-AI controls',
      'Audit logging of agent activity, evidence, and approvals',
    ],
  },
  {
    id: 'experience',
    name: 'Experience & Delivery Channels',
    summary: 'Executives and business teams access operator-specific intelligence in familiar channels.',
    components: [
      'Microsoft 365 Copilot / Microsoft Teams',
      'Embedded Power BI visuals for supporting detail',
      'Executive Copilot web experience and conversational analysis',
      'Scheduled executive brief delivery',
    ],
  },
  {
    id: 'operations',
    name: 'Observability & Operations',
    summary: 'The experience remains measurable, supportable, and continuously improvable.',
    components: [
      'Azure Monitor / Application Insights',
      'Evaluation dashboards for accuracy, groundedness, and usage',
      'User feedback loop feeding agent tuning',
      'Production-readiness and support runbooks',
    ],
  },
];

const walkthroughSteps = [
  {
    id: 'household-growth',
    title: 'Household Growth Opportunity',
    description: 'Identify eligible internet-only and wireless-only households, find multi-product gaps, and review next-best-product suggestions with eligibility and consent checks.',
    page: 'brief',
  },
  {
    id: 'wireless-churn',
    title: 'Wireless Churn Reduction',
    description: 'Review modeled high-risk subscribers, validate risk signals, compare retention motions, and estimate saved contribution with a controlled test.',
    page: 'brief',
  },
  {
    id: 'mobile-attach',
    title: 'Mobile Attach Optimization',
    description: 'For an eligible internet customer, compare a relevant mobile offer and show an explicitly illustrative attach-conversion scenario.',
    page: 'brief',
  },
  {
    id: 'retail-intelligence',
    title: 'Retail Store Intelligence',
    description: 'Explore how store traffic, conversion, staffing, inventory, and local demand could reveal execution gaps. The demo uses illustrative content, not live store feeds.',
    page: 'outcomes',
  },
  {
    id: 'business-services',
    title: 'Business Services Growth',
    description: 'Identify serviceable SMB cross-sell opportunities and estimate pipeline impact using explicit assumptions.',
    page: 'outcomes',
  },
  {
    id: 'executive-briefing',
    title: 'Executive AI Briefing',
    description: 'See agents synthesize operator metrics into a concise executive view of risks, opportunities, growth plans, and illustrative revenue scenarios.',
    page: 'brief',
  },
  {
    id: 'agents',
    title: 'Operator-Aware Agent Team',
    description: 'Review how every specialist agent receives the selected Rogers context and applies the relevant priorities and safeguards.',
    page: 'agents',
  },
  {
    id: 'architecture',
    title: 'Rogers Solution Architecture',
    description: 'Explore the operator-specific source systems and Microsoft platform layers.',
    page: 'architecture',
  },
];

const outcomes = [
  {
    title: 'Increased Wireless Revenue',
    description: 'Use relevant attach and retention opportunities to support incremental wireless revenue; validate lift against a control.',
  },
  {
    title: 'Reduced Churn',
    description: 'Prioritize eligible at-risk cohorts and measure retained contribution, customer outcomes, and offer cost.',
  },
  {
    title: 'Increased Household Penetration',
    description: 'Identify multi-product gaps across eligible internet and wireless households.',
  },
  {
    title: 'Higher Attach Rates',
    description: 'Test next-best-product recommendations and track incremental conversion and customer value.',
  },
  {
    title: 'Improved Customer Lifetime Value',
    description: 'Coordinate relevant products and service interventions around finance-approved value measures.',
  },
  {
    title: 'Improved Retail Productivity',
    description: 'Surface store-level opportunity gaps to help leaders focus coaching and execution.',
  },
  {
    title: 'Increased Business Services Revenue',
    description: 'Identify serviceable SMB opportunities and prioritize evidence-backed cross-sell actions.',
  },
];

const marketInsights = [
  {
    title: 'Household convergence',
    description: 'The synthetic demo highlights internet-only and wireless-only customers as cohorts to evaluate for relevant multi-product experiences.',
  },
  {
    title: 'Retention before intervention',
    description: 'Risk scores are useful for prioritization, but should be validated against observed outcomes and customer eligibility before a retention action.',
  },
  {
    title: 'Digital care with quality guardrails',
    description: 'Automation coverage should be assessed with repeat-contact, escalation, accessibility, and customer-feedback measures.',
  },
  {
    title: 'SMB connectivity needs',
    description: 'Serviceability and account fit are prerequisites to turning business-services signals into qualified opportunities.',
  },
];

const aiRecommendations = [
  'Pilot next-best-product recommendations for eligible internet-only households, with a control group and opt-out safeguards.',
  'Validate high-risk wireless cohorts and test retention treatments against retained contribution and customer experience.',
  'Expand care automation only where resolution quality and repeat-contact measures remain within agreed guardrails.',
  'Prioritize serviceable SMB cross-sell candidates and measure qualified pipeline through realized revenue.',
  'Use store-level conversion and staffing signals to focus coaching, after validating the underlying data coverage.',
];

const scenarioCards = [
  {
    title: 'Household Growth Opportunity',
    signal: 'Compare internet-only and wireless-only customer cohorts with other unsubscribed product eligibility.',
    action: 'Rank eligible households by relevance, serviceability, and consent; propose a next-best product for human review.',
    measure: 'Incremental attach and household penetration versus a control, with opt-outs and customer experience tracked.',
  },
  {
    title: 'Wireless Churn Reduction',
    signal: 'Combine validated churn-risk indicators with tenure, engagement, care interactions, and customer value.',
    action: 'Recommend an eligible retention motion and make the model confidence and offer guardrails visible.',
    measure: 'Incremental retained contribution versus a holdout, net of offer cost and customer outcomes.',
  },
  {
    title: 'Mobile Attach Optimization',
    signal: 'Identify internet customers with no wireless relationship and an eligible household offer.',
    action: 'Present a relevant mobile bundle option and a clearly labeled, assumption-driven conversion scenario.',
    measure: 'Incremental attach conversion, revenue, and satisfaction compared with a control group.',
  },
  {
    title: 'Retail Store Intelligence',
    signal: 'Compare store traffic, conversion, staffing, product mix, and local demand to identify execution gaps.',
    action: 'Recommend coaching, staffing, or merchandising follow-up for stores with validated opportunity patterns.',
    measure: 'Conversion and sales effectiveness, adjusted for traffic mix and local operating conditions.',
  },
  {
    title: 'Business Services Growth',
    signal: 'Find SMB accounts with a likely need for additional connectivity or business services and verify serviceability.',
    action: 'Prepare a prioritized cross-sell list with account evidence, product fit, and an estimated opportunity range.',
    measure: 'Qualified pipeline, conversion, and realized incremental revenue using finance-approved assumptions.',
  },
  {
    title: 'Executive AI Briefing',
    signal: 'Bring together wireless, internet, customer, network, retail, and business-services performance signals.',
    action: 'Summarize material risks and opportunities, distinguish evidence from hypotheses, and propose human-reviewed next steps.',
    measure: 'Decision follow-through, outcome movement, evidence coverage, and executive usefulness feedback.',
  },
];

export const rogersOperator = {
  id: 'rogers',
  name: 'Rogers Communications',
  description: 'Wireless, internet, cable, media, business services, customer experience, and retail operations',
  sampleDataNotice: 'Synthetic illustrative demo values; not reported Rogers results and not connected to live systems.',
  defaultExecutiveId: 'rogers-ceo',
  executives,
  metrics,
  anomalies,
  dailyBrief,
  executiveBriefs,
  feedPrompts,
  qaBank,
  defaultAnswer: {
    answer: 'This is a synthetic Rogers operator demo. A production experience would ground responses in authorized, governed operator data and cite evidence; no live Rogers systems are connected here.',
    sources: [source('Platform', 'Live data connection not enabled')],
  },
  strategicPriorities: [
    'Improve household penetration and product relationships',
    'Increase wireless share of wallet and relevant attach',
    'Reduce customer churn with validated, targeted retention',
    'Expand AI-powered customer engagement with experience guardrails',
    'Drive retail productivity and sales effectiveness',
    'Grow business services revenue and reduce operating friction',
  ],
  agentDirectives: [
    'Prioritize eligible household growth and wireless attach opportunities.',
    'Validate churn-risk signals and measure retained contribution, not gross saves alone.',
    'Connect customer, network, retail, care, and business-services evidence without assuming causation.',
    'Respect eligibility, consent, customer-experience, and finance-approved guardrails.',
  ],
  walkthroughSteps,
  architectureLayers,
  dataSources,
  outcomes,
  marketInsights,
  aiRecommendations,
  scenarioCards,
};
