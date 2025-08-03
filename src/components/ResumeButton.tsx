import Link from "next/link";

const ResumeButton = () => (
  <div>
    <Link
      href="/rio_kuchlyan_resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-card/90 border border-border rounded-2xl px-4 py-3 shadow-lg backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:scale-105 group hover:bg-card h-14"
    >
      <span className="text-sm font-mono text-muted/80 font-medium tracking-wide group-hover:text-accent transition-colors">
        RESUME
      </span>
    </Link>
  </div>
);

export default ResumeButton;
