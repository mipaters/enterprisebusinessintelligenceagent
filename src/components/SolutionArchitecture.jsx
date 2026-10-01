import { useState } from 'react';
import { useOperator } from '../data/OperatorContext';

export default function SolutionArchitecture() {
  const { operator } = useOperator();
  const architectureLayers = operator.architectureLayers;
  const [selectedId, setSelectedId] = useState(architectureLayers[0].id);
  const selectedLayer = architectureLayers.find((layer) => layer.id === selectedId);

  return (
    <div className="architecture-page">
      <section className="card">
        <p className="eyebrow">{operator.name} · Proposed solution architecture</p>
        <h2>Interactive Operator Architecture</h2>
        <p className="overview-lede">
          Select a layer to see its role and the illustrative Microsoft components involved. The
          architecture is layered from the existing trusted data foundation up to the experiences
          executives use every day.
        </p>

        <div className="operator-source-list">
          <h3>{operator.name} data source landscape</h3>
          <div className="operator-chip-list">
            {operator.dataSources.map((item) => (
              <span key={item} className="operator-chip">{item}</span>
            ))}
          </div>
        </div>

        <div className="architecture-stack">
          {architectureLayers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              className={
                layer.id === selectedId ? 'architecture-layer architecture-layer-active' : 'architecture-layer'
              }
              onClick={() => setSelectedId(layer.id)}
            >
              <span className="architecture-layer-name">{layer.name}</span>
              <span className="architecture-layer-summary">{layer.summary}</span>
            </button>
          ))}
        </div>

        {selectedLayer && (
          <div className="architecture-detail">
            <h3>{selectedLayer.name}</h3>
            <p>{selectedLayer.summary}</p>
            <p className="architecture-detail-label">Illustrative Microsoft components:</p>
            <ul>
              {selectedLayer.components.map((component) => (
                <li key={component}>{component}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
