export default function TimelineCard({ item }) {
  return (
    <article className="timeline-card">
      <div className="timeline-card__marker" aria-hidden="true" />
      <div className="timeline-card__content">
        <p className="timeline-card__period">{item.period}</p>
        <h3>{item.title}</h3>
        <p className="timeline-card__company">{item.company}</p>
        <p>{item.description}</p>
      </div>
    </article>
  );
}