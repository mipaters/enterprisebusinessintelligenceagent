export default function ExecutiveSelector({ executives, selectedId, onSelect }) {
  return (
    <div className="executive-selector">
      <label htmlFor="executive-select">Viewing as</label>
      <select
        id="executive-select"
        value={selectedId}
        onChange={(event) => onSelect(event.target.value)}
      >
        {executives.map((exec) => (
          <option key={exec.id} value={exec.id}>
            {exec.name} — {exec.title}
          </option>
        ))}
      </select>
    </div>
  );
}
