type Action = {
  label: string;
  href: string;
  download?: boolean;
};

export default function SectionMast({
  n,
  title,
  caption,
  action,
}: {
  n: string;
  title: string;
  caption?: string;
  action?: Action;
}) {
  return (
    <header className="section-mast">
      <div className="section-mast-numeral" aria-hidden="true">
        {n}
      </div>
      <div className="section-mast-body">
        <div className="section-mast-eyebrow mono caps tiny dim">
          § {n} / {title}
        </div>
        <h2 className="section-mast-title">{title}</h2>
        {caption && <p className="section-mast-caption">{caption}</p>}
      </div>
      {action && (
        <div className="section-mast-action">
          <a
            href={action.href}
            className="action-link mono caps tiny"
            target="_blank"
            rel="noreferrer"
          >
            {action.label} <span>↗</span>
          </a>
        </div>
      )}
    </header>
  );
}
