import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-mark" aria-hidden="true">
        404
      </div>
      <p className="dim">This page doesn&rsquo;t exist.</p>
      <Link href="/" className="btn">
        Back home
      </Link>
    </div>
  );
}
