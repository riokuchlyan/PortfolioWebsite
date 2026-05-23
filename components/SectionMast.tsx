import Link from 'next/link';

type Action = {
  label: string;
  href: string;
};

export default function SectionMast({
  n,
  title,
  action,
}: {
  n: string;
  title: string;
  action?: Action;
}) {
  const isInternal = action?.href.startsWith('/') && !action.href.startsWith('//');

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
      </div>
      {action && (
        <div className="section-mast-action">
          {isInternal ? (
            <Link href={action.href} className="action-link mono caps tiny">
              {action.label} <span>↗</span>
            </Link>
          ) : (
            <a
              href={action.href}
              className="action-link mono caps tiny"
              target="_blank"
              rel="noreferrer"
            >
              {action.label} <span>↗</span>
            </a>
          )}
        </div>
      )}
    </header>
  );
}
