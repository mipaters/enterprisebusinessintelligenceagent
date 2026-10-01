export default function DailyBrief({ brief, executiveName, operatorName }) {
  return (
    <section className="card daily-brief">
      <div className="daily-brief-header">
        <div>
          <h2>{operatorName} Daily Executive Brief</h2>
          <p className="muted">
            {brief.date} · Generated {brief.generatedAt} · Prepared for {executiveName}
          </p>
        </div>
        <span className="badge badge-brief">AI-generated · Traceable</span>
      </div>
      <p className="brief-headline">{brief.headline}</p>
      {brief.narrative.map((paragraph, index) => (
        <p key={index} className="brief-paragraph">
          {paragraph}
        </p>
      ))}
      <div className="brief-focus">
        <strong>Recommended focus:</strong> {brief.recommendedFocus}
      </div>
    </section>
  );
}
