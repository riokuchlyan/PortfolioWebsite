import Link from 'next/link';
import site from '@/data/site.json';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-mark" aria-hidden="true">
        {site.notFound.code}
      </div>
      <p className="dim">{site.notFound.message}</p>
      <Link href="/" className="btn">
        {site.notFound.linkLabel}
      </Link>
    </div>
  );
}
