import type { ReactNode } from 'react';

export default function MetaRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={`meta-row ${accent ? 'is-accent' : ''}`}>
      <span className="mono caps tiny dim meta-label">{label}</span>
      <span className="meta-value">{value}</span>
    </div>
  );
}
