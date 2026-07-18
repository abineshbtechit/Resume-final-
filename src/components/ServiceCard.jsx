export default function ServiceCard({ icon, title, description }) {
  const Icon = icon;
  return (
    <article className="service-card">
      <div className="service-card__icon" aria-hidden="true">
        <Icon size={20} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}