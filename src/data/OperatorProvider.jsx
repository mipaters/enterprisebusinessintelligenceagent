import { useMemo, useState } from 'react';
import { OperatorContext } from './OperatorContext';
import { comcastOperator } from './operators/comcast';
import { rogersOperator } from './operators/rogers';
import { charterOperator } from './operators/charter';

const operators = {
  rogers: rogersOperator,
  comcast: comcastOperator,
  charter: charterOperator,
};

export default function OperatorProvider({ children }) {
  const [operatorId, setOperatorId] = useState('rogers');
  const [theme, setTheme] = useState('dark');
  const operator = operators[operatorId];
  const value = useMemo(
    () => ({
      operatorId,
      setOperatorId,
      operator,
      operators: Object.values(operators),
      currentOperator: operator,
      operatorMetadata: {
        id: operator.id,
        name: operator.name,
        description: operator.description,
        sampleDataNotice: operator.sampleDataNotice,
      },
      executiveProfiles: operator.executives,
      businessKPIs: operator.metrics,
      demoData: {
        anomalies: operator.anomalies,
        dailyBrief: operator.dailyBrief,
        executiveBriefs: operator.executiveBriefs,
        feedPrompts: operator.feedPrompts,
        qaBank: operator.qaBank,
        defaultAnswer: operator.defaultAnswer,
      },
      aiRecommendations: operator.aiRecommendations,
      strategicPriorities: operator.strategicPriorities,
      executiveWalkthroughs: operator.walkthroughSteps,
      marketInsights: operator.marketInsights,
      businessOutcomes: operator.outcomes,
      dataSources: operator.dataSources,
      scenarioCards: operator.scenarioCards,
      theme,
      setTheme,
    }),
    [operatorId, operator, theme]
  );

  return <OperatorContext.Provider value={value}>{children}</OperatorContext.Provider>;
}
