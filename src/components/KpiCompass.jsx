import { useMemo, useState } from 'react';

const dimensionKeys = ['region', 'market', 'channel'];
const periodOptions = ['Daily', 'Weekly', 'Monthly'];

function getSeries(metric, dimension, period) {
  const values = metric.sparkline ?? [];
  if (!values.length) return [];

  const lastValue = values.at(-1) || 1;
  const sampled = period === 'Daily' ? values.slice(-5) : period === 'Weekly' ? values.slice(-7) : values;
  const baseIndex = sampled.map((value) => Math.round((value / lastValue) * 100));
  const dimensionOffsets = dimension === 'region' ? [-8, -3, 2, 7] :
    dimension === 'market' ? [-10, -4, 1, 5, 9] : [-6, 0, 4];

  return dimension.options.map((label, index) => {
    const trendIndex = baseIndex[(index * 2 + Math.max(sampled.length - 2, 0)) % baseIndex.length] ?? 100;
    return {
      label,
      value: Math.max(1, trendIndex + (dimensionOffsets[index % dimensionOffsets.length] ?? 0)),
    };
  });
}

export default function KpiCompass({ metric, operator, onClose, onAskAbout }) {
  const [activeDimension, setActiveDimension] = useState('region');
  const [period, setPeriod] = useState('Weekly');
  const dimension = operator.compassDimensions[activeDimension];
  const series = useMemo(
    () => getSeries(metric, dimension, period),
    [metric, dimension, period]
  );
  const maxValue = Math.max(...series.map((point) => point.value), 1);

  const askAboutMetric = () => {
    onAskAbout(metric);
    onClose();
  };

  return (
    <div className="compass-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="compass-dialog" role="dialog" aria-modal="true" aria-labelledby="compass-title">
        <header className="compass-header">
          <div>
            <p className="eyebrow">KPI Compass · {operator.name}</p>
            <h2 id="compass-title">{metric.name}</h2>
            <p className="muted">{metric.value} · {metric.unit}</p>
          </div>
          <button type="button" className="walkthrough-close compass-close" onClick={onClose} aria-label="Close KPI Compass">
            ✕
          </button>
        </header>

        <div className="compass-controls">
          <div className="compass-dimensions" role="tablist" aria-label="Break down metric by">
            {dimensionKeys.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeDimension === key}
                className={activeDimension === key ? 'compass-tab compass-tab-active' : 'compass-tab'}
                onClick={() => setActiveDimension(key)}
              >
                {operator.compassDimensions[key].label}
              </button>
            ))}
          </div>
          <label className="compass-period">
            Period
            <select value={period} onChange={(event) => setPeriod(event.target.value)}>
              {periodOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        </div>

        <div className="compass-chart" aria-label={`${metric.name} relative trend by ${dimension.label}`}>
          {series.map((point) => (
            <div className="compass-bar-row" key={point.label}>
              <span className="compass-bar-label">{point.label}</span>
              <div className="compass-bar-track">
                <div className="compass-bar" style={{ width: `${(point.value / maxValue) * 100}%` }} />
              </div>
              <span className="compass-bar-value">{point.value}</span>
            </div>
          ))}
        </div>

        <div className="compass-trust">
          <strong>Trusted data asset</strong>
          <span>{metric.source}</span>
          <small>{operator.sampleDataNotice} Compass values are illustrative relative indices, not source-system segment values.</small>
        </div>

        <footer className="compass-footer">
          <button type="button" className="walkthrough-goto" onClick={askAboutMetric}>
            Ask BI Buddy about this KPI
          </button>
          <button type="button" className="compass-secondary" onClick={onClose}>Close</button>
        </footer>
      </section>
    </div>
  );
}
