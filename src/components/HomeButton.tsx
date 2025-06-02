import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeButton: React.FC = () => {

return (
    <div className="fixed top-8 left-8 z-50 flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
        <Link 
            href="/"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-background border border-border hover:border-accent transition-all duration-200 hover:scale-110 hover:shadow-md active:scale-95"
            aria-label="Go home"
        >
            <Image
                id="house"
                src="/house.svg"
                alt="Home"
                width={16}
                height={16}
                className="opacity-70 hover:opacity-100 transition-opacity"
            />
        </Link>
        <span className="text-sm font-mono text-muted">[H]</span>
    </div>
    );
};

export default HomeButton;