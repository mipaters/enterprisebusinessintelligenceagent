import KpiCard from './KpiCard';

export default function KpiGrid({ metrics, onAskAbout, onDrillDown, operatorName }) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Priority {operatorName} Metrics</h2>
        <p className="muted">Role-filtered view · Double-click a KPI or open KPI Compass to explore the trend</p>
      </div>
      <div className="kpi-grid">
        {metrics.map((metric) => (
          <KpiCard
            key={metric.id}
            metric={metric}
            onAskAbout={onAskAbout}
            onDrillDown={onDrillDown}
          />
        ))}
      </div>
    </section>
  );
}
