
import React from "react";
function Stats() {
  return (
    <section className="stats-band" aria-label="Platform statistics">
      <div className="shell stats-grid">
        {stats.map(([value, label]) => (
          <article className="stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}



