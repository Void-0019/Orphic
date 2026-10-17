import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
    { label: "Explore", href: "#explore" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
];

const Navbar = () => {
    return (
        <header className="border-b border-white/10">
            {/* Woodmark */}
            <nav
                aria-label="Main navigation"
                className="mx-auto flex items-center justify-between max-w-295 px-6 py-5">
                <Link href="/"
                    aria-label="Orphic home"
                    className="text-2xl font-semibold text-[#f3f3f1] tracking-tight"
                >
                    orphic <span className="text-[#9a7cff]">.</span>
                </Link>

            {/* Navigation Links */}
            <div className="hidden items-center gap-8 md:flex">
                {navLinks.map((link)=>(
                    <Link key={link.label} href={link.href} className="text-sm text-[#a2a2ab] transition-colors hover:text-[#f3f3f1]">
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Primary Action */}
            <Link href="/signup" className="group inline-flex items-center gap-2 rounded-lg bg-[#9a7cff] px-4 py-2.5 text-sm font-medium text-[#0c0c0f] transition-colors hover:bg-[#b09cff]">
            Get Started
            <ArrowUpRight
            size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
            </Link>

        </nav>
        </header>
    )
}

export default Navbar;
