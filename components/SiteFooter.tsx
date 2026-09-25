import home from '@/data/home.json';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>
        Last updated{' '}
        <time dateTime={home.lastUpdated}>
          {new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
          }).format(new Date(home.lastUpdated))}
        </time>
      </span>
    </footer>
  );
}
