import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="home-mark notfound-mark" aria-hidden="true">
        404
      </div>
      <p className="notfound-text dim">This page doesn&apos;t exist.</p>
      <Link href="/" className="resume-button mono tiny notfound-link">
        Back home <span aria-hidden="true">←</span>
      </Link>
    </div>
  );
}
