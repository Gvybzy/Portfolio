export default function SectionTitle({ eyebrow, title, description }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p className="muted max-copy">{description}</p>}</div>
}
