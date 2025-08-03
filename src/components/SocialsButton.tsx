'use client';
import Link from "next/link";
import Image from "next/image";

const SocialsButton = () => (
  <div className="bg-card/90 border border-border rounded-2xl px-4 py-3 shadow-lg backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:scale-105 group hover:bg-card h-14 flex items-center gap-3">
    <Link
      href="https://www.linkedin.com/in/riokuchlyan"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-8 h-8 rounded-lg bg-background/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 hover:bg-accent/10 group-hover:border-accent"
    >
      <Image
        src="/linkedin_logo.svg"
        alt="LinkedIn"
        width={16}
        height={16}
        className="filter dark:invert transition-all duration-300"
      />
    </Link>

    <Link
      href="https://github.com/riokuchlyan"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-8 h-8 rounded-lg bg-background/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 hover:bg-accent/10 group-hover:border-accent"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#ff6b35"
        className="transition-all duration-300"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </Link>

    <Link
      href="mailto:rio.kuchlyan@unc.edu"
      className="flex items-center justify-center w-8 h-8 rounded-lg bg-background/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 hover:bg-accent/10 group-hover:border-accent"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#ff6b35"
        className="transition-all duration-300"
      >
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
      </svg>
    </Link>
  </div>
);

export default SocialsButton;
