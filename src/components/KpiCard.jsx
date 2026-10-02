import Sparkline from './Sparkline';

const statusLabel = {
  healthy: 'On track',
  watch: 'Watch',
  attention: 'Needs attention',
};

export default function KpiCard({ metric, onAskAbout, onDrillDown }) {
  const trendSymbol = metric.trend === 'up' ? '▲' : metric.trend === 'down' ? '▼' : '▬';
  const trendClass = `trend-${metric.trend}`;

  return (
    <div
      className={`kpi-card status-${metric.status}`}
      onDoubleClick={() => onDrillDown(metric)}
      title="Double-click to open KPI Compass"
    >
      <div className="kpi-card-top">
        <span className="kpi-domain">{metric.domain}</span>
        <span className={`status-pill status-pill-${metric.status}`}>{statusLabel[metric.status]}</span>
      </div>
      <h3 className="kpi-name">{metric.name}</h3>
      <div className="kpi-value-row">
        <span className="kpi-value">{metric.value}</span>
        <span className={`kpi-change ${trendClass}`}>
          {trendSymbol} {Math.abs(metric.changePct)}%
        </span>
      </div>
      <p className="kpi-unit">{metric.unit}</p>
      <Sparkline data={metric.sparkline} trend={metric.trend} />
      <button type="button" className="link-button" onClick={() => onAskAbout(metric)}>
        Ask about this metric →
      </button>
      <button type="button" className="link-button" onClick={() => onDrillDown(metric)}>
        Open KPI Compass →
      </button>
      <p className="kpi-source" title={metric.source}>
        Source: {metric.source}
      </p>
    </div>
  );
}
