const severityLabel = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

export default function DriverAnalysis({ anomalies, metricsById, onAskAbout }) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Anomalies &amp; Business Drivers</h2>
        <p className="muted">Automatically identified changes worth executive awareness</p>
      </div>
      <ul className="anomaly-list">
        {anomalies.map((anomaly) => {
          const metric = metricsById[anomaly.metricId];
          return (
            <li key={anomaly.id} className={`anomaly-item severity-${anomaly.severity}`}>
              <div className="anomaly-item-header">
                <span className={`severity-pill severity-${anomaly.severity}`}>
                  {severityLabel[anomaly.severity]}
                </span>
                <h3>{anomaly.headline}</h3>
              </div>
              <p>{anomaly.driverSummary}</p>
              <div className="anomaly-footer">
                <button
                  type="button"
                  className="link-button"
                  onClick={() => onAskAbout(metric ?? { name: anomaly.headline })}
                >
                  Investigate further →
                </button>
                <span className="kpi-source" title={anomaly.source}>
                  Source: {anomaly.source}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
