export default function SectionTitle({ eyebrow, title, className = '' }) {
  return (
    <div className={`section-title ${className}`.trim()}>
      <span className="section-title__line" aria-hidden="true" />
      <div>
        {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
    </div>
  );
}