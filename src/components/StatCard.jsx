import "../index.css";
export function StatCard({ title, value, description, icon: Icon }) {
  return (
    <div className="stats-card">
      <div className="stat-icon">
        {" "}
        <Icon size={22} />
      </div>
      <h3 className="stats-title">{title}</h3>
      <strong>{value}</strong>
      <p>{description}</p>
    </div>
  );
}
