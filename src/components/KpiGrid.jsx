import KpiCard from './KpiCard';

export default function KpiGrid({ metrics, onAskAbout }) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Priority Enterprise Metrics</h2>
        <p className="muted">Role-filtered view of standardized enterprise metrics</p>
      </div>
      <div className="kpi-grid">
        {metrics.map((metric) => (
          <KpiCard key={metric.id} metric={metric} onAskAbout={onAskAbout} />
        ))}
      </div>
    </section>
  );
}
