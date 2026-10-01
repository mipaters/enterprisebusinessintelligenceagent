import { useOperator } from '../data/OperatorContext';

export default function BusinessOutcomes() {
  const { operator } = useOperator();

  return (
    <div className="outcomes-page">
      <section className="card">
        <p className="eyebrow">{operator.name} · Business outcomes</p>
        <h2>Measure the Outcomes That Matter</h2>
        <p className="overview-lede">
          These are illustrative value areas, not promised results. Each outcome should be tied to
          governed measures, explicit assumptions, and human-reviewed experiments.
        </p>
        <p className="data-notice">{operator.sampleDataNotice}</p>
      </section>
      <section className="card">
        <div className="outcome-grid">
          {operator.outcomes.map((outcome) => (
            <article className="outcome-card" key={outcome.title}>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="card">
        <p className="eyebrow">Market insights</p>
        <div className="outcome-grid">
          {operator.marketInsights.map((insight) => (
            <article className="outcome-card" key={insight.title}>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="card">
        <p className="eyebrow">AI recommendations for review</p>
        <ul className="recommendation-list">
          {operator.aiRecommendations.map((recommendation) => (
            <li key={recommendation}>{recommendation}</li>
          ))}
        </ul>
      </section>
      <section className="card">
        <p className="eyebrow">Operator scenarios</p>
        <div className="outcome-grid">
          {operator.scenarioCards.map((scenario) => (
            <article className="outcome-card scenario-card" key={scenario.title}>
              <h3>{scenario.title}</h3>
              <p><strong>Signal:</strong> {scenario.signal}</p>
              <p><strong>Agent action:</strong> {scenario.action}</p>
              <p><strong>Measure:</strong> {scenario.measure}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
