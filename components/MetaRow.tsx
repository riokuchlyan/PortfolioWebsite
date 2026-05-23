import type { ReactNode } from 'react';

export default function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="meta-row">
      <span className="mono caps tiny dim meta-label">{label}</span>
      <span className="meta-value">{value}</span>
    </div>
  );
}
