import { useMemo, useState } from 'react';
import ExecutiveSelector from './components/ExecutiveSelector';
import DailyBrief from './components/DailyBrief';
import KpiGrid from './components/KpiGrid';
import DriverAnalysis from './components/DriverAnalysis';
import ChatPanel from './components/ChatPanel';
import { executives, metrics, anomalies, dailyBrief } from './data/mockData';
import './App.css';

function App() {
  const [selectedExecId, setSelectedExecId] = useState(executives[0].id);
  const [pendingQuestion, setPendingQuestion] = useState(null);

  const selectedExec = executives.find((exec) => exec.id === selectedExecId);

  const metricsById = useMemo(
    () => Object.fromEntries(metrics.map((metric) => [metric.id, metric])),
    []
  );

  const visibleMetrics = useMemo(
    () => selectedExec.focusMetrics.map((id) => metricsById[id]).filter(Boolean),
    [selectedExec, metricsById]
  );

  const visibleAnomalies = useMemo(
    () => anomalies.filter((anomaly) => selectedExec.focusMetrics.includes(anomaly.metricId)),
    [selectedExec]
  );

  const askAboutMetric = (metric) => {
    setPendingQuestion(`Tell me more about ${metric.name}`);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-title">
          <span className="app-logo">CI</span>
          <div>
            <h1>Comcast Executive Intelligence</h1>
            <p className="muted">Enterprise Decision Intelligence · Proof-of-concept demo (mock data)</p>
          </div>
        </div>
        <ExecutiveSelector
          executives={executives}
          selectedId={selectedExecId}
          onSelect={setSelectedExecId}
        />
      </header>

      <main className="app-main">
        <div className="app-main-left">
          <DailyBrief brief={dailyBrief} executiveName={selectedExec.name} />
          <KpiGrid metrics={visibleMetrics} onAskAbout={askAboutMetric} />
          <DriverAnalysis
            anomalies={visibleAnomalies}
            metricsById={metricsById}
            onAskAbout={askAboutMetric}
          />
        </div>
        <div className="app-main-right">
          <ChatPanel
            pendingQuestion={pendingQuestion}
            onConsumePendingQuestion={() => setPendingQuestion(null)}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>
          Demo mockup only — all metrics, names, and narratives are illustrative. Not connected to live
          Comcast systems.
        </p>
      </footer>
    </div>
  );
}

export default App;
