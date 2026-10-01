import {
  executives,
  metrics,
  anomalies,
  dailyBrief,
  executiveBriefs,
  feedPrompts,
  qaBank,
  defaultAnswer,
} from '../mockData';
import { architectureLayers } from '../solutionContent';

export const comcastOperator = {
  id: 'comcast',
  name: 'Comcast',
  description: 'Connectivity, broadband, entertainment, and business services',
  sampleDataNotice: 'Illustrative Comcast demo scenario; all metrics and outcomes are synthetic.',
  defaultExecutiveId: executives[0].id,
  executives,
  metrics,
  anomalies,
  dailyBrief,
  executiveBriefs,
  feedPrompts,
  qaBank,
  defaultAnswer,
  strategicPriorities: [
    'Improve broadband growth and household relationships',
    'Strengthen customer retention across connectivity and entertainment',
    'Grow advertising and business services opportunities',
    'Improve network reliability and operating efficiency',
  ],
  agentDirectives: [
    'Prioritize broadband, video, mobile, and enterprise-service signals.',
    'Compare connectivity, entertainment, advertising, and customer trends.',
    'Frame actions around retention, household growth, revenue, and operations.',
  ],
  walkthroughSteps: [
    {
      id: 'overview',
      title: 'Operator Overview',
      description: 'Review the Comcast demo context and the decision-intelligence workflow.',
      page: 'overview',
    },
    {
      id: 'brief',
      title: 'Executive Brief',
      description: 'Review the role-specific connectivity and business-services narrative.',
      page: 'brief',
    },
    {
      id: 'broadband',
      title: 'Broadband & Retention',
      description: 'Investigate broadband net adds, video churn, and customer-retention signals.',
      page: 'brief',
    },
    {
      id: 'agents',
      title: 'Operator-Aware Agent Team',
      description: 'See how specialist agents focus on Comcast priorities and evidence.',
      page: 'agents',
    },
    {
      id: 'architecture',
      title: 'Solution Architecture',
      description: 'Review the data sources and platform layers for this operator scenario.',
      page: 'architecture',
    },
    {
      id: 'outcomes',
      title: 'Business Outcomes',
      description: 'Explore illustrative outcome areas for the Comcast scenario.',
      page: 'outcomes',
    },
    {
      id: 'deployment',
      title: 'From POC to Production',
      description: 'Review the 30-day non-billable POC followed by funded MVP and production phases.',
      page: 'deployment',
    },
  ],
  architectureLayers,
  dataSources: [
    'Broadband systems',
    'Entertainment platforms',
    'Advertising platforms',
    'Customer platforms',
    'Service operations',
  ],
  outcomes: [
    {
      title: 'Broadband Growth',
      description: 'Identify household and market opportunities to improve broadband acquisition and net adds.',
    },
    {
      title: 'Advertising Revenue Growth',
      description: 'Surface audience, inventory, and campaign opportunities for advertising teams.',
    },
    {
      title: 'Entertainment Revenue Growth',
      description: 'Connect product engagement, packaging, and retention signals to entertainment outcomes.',
    },
    {
      title: 'Customer Retention',
      description: 'Prioritize at-risk customer segments and review evidence-backed retention options.',
    },
    {
      title: 'Operational Efficiency',
      description: 'Highlight service, network, and care opportunities for more effective operations.',
    },
  ],
  marketInsights: [
    {
      title: 'Broadband and household relationships',
      description: 'The demo scenario pairs broadband growth and churn signals to help teams evaluate household retention and product opportunities.',
    },
    {
      title: 'Entertainment engagement',
      description: 'Product engagement and customer signals can be reviewed together to explore packaging and retention questions.',
    },
    {
      title: 'Advertising opportunity',
      description: 'Audience, inventory, and campaign measures can help teams identify where advertising performance merits deeper analysis.',
    },
    {
      title: 'Service operations',
      description: 'Network and care measures provide operational context for customer and revenue outcomes.',
    },
  ],
  aiRecommendations: [
    'Review broadband retention options in the markets showing the largest subscriber pressure.',
    'Evaluate household opportunities using eligible product combinations and customer-experience guardrails.',
    'Explore advertising growth opportunities with campaign and audience evidence.',
    'Coordinate entertainment engagement and customer retention analysis using consistent time windows and definitions.',
    'Track network and care operations alongside customer outcomes to prioritize service improvements.',
  ],
  scenarioCards: [
    {
      title: 'Broadband Growth',
      signal: 'Compare subscriber movement, market context, household penetration, and product eligibility.',
      action: 'Review high-opportunity areas and prioritize a customer-appropriate acquisition or retention motion.',
      measure: 'Net adds, conversion, retention, and customer experience against a suitable baseline.',
    },
    {
      title: 'Customer Retention',
      signal: 'Review broadband and entertainment engagement alongside service and customer-care signals.',
      action: 'Identify at-risk segments and compare targeted retention options with clear assumptions.',
      measure: 'Incremental retained relationships and contribution versus a control.',
    },
    {
      title: 'Advertising Opportunity',
      signal: 'Connect campaign performance, audience, and inventory signals to find opportunities for deeper analysis.',
      action: 'Present evidence-backed campaign or inventory actions for business review.',
      measure: 'Campaign performance and advertising revenue against the agreed comparison baseline.',
    },
    {
      title: 'Entertainment Engagement',
      signal: 'Review engagement and customer signals by product, segment, and time period.',
      action: 'Surface packaging or experience questions for human review.',
      measure: 'Engagement, retention, and revenue trends using governed definitions.',
    },
    {
      title: 'Service Operations',
      signal: 'Pair network and care indicators with customer-impact evidence.',
      action: 'Prioritize operational follow-up based on service impact and remediation status.',
      measure: 'Reliability, repeat contacts, and customer outcomes over time.',
    },
  ],
};
