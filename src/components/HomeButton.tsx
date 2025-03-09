import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeButton: React.FC = () => {

return (
    <div className="flex gap-2 fixed top-10 left-10">
                <Link href="/">
                    <Image
                    id="house"
                    src="/house.svg"
                    alt="Home"
                    width={20}
                    height={20}
                    />
                </Link>
                <p>[H]</p>
            </div>
    );
};

export default HomeButton;