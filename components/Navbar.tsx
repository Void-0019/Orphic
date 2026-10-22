import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import LinkButton from "./ui/LinkButton";

const navLinks = [
    { label: "Explore", href: "#explore" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
];

const focusStyles = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a7cff] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0c0c0f]";

const Navbar = () => {
    return (
        <header className="relative z-40 border-b border-white/10 bg-background">

            <div className="mx-auto flex w-full items-center justify-between gap-2 max-w-295 px-4 py-4 sm:px-6 sm:py-5">

                {/* Woodmark */}
                <Link href="/"
                    aria-label="Orphic home"
                    className={`shrink-0 rounded-sm text-xl font-semibold text-foreground tracking-tight sm:text-2xl ${focusStyles}`}
                >
                    orphic <span className="text-accent">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} className={`rounded-sm text-sm text-muted transition-colors hover:text-foreground ${focusStyles}`}>
                            {link.label}
                        </Link>
                    ))}
                </nav>


                {/* Mobile menu and primary action */}
                <div className="ml-auto flex shrink-0 items-center gap-1.5 md:ml-0 md:gap-0">

                    {/* Native responsive menu */}
                    <details className="relative md:hidden">
                        <summary className={`flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 text-foreground transition-colors hover:bg-white/5 [&::-webkit-details-marker]:hidden ${focusStyles}`}>
                            <Menu size={20} aria-hidden="true" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </summary>

                        <nav aria-label="Mobile navigation" className="absolute pl-5 right-0 top-full z-50 mt-3 w-64 max-w-[90vw] rounded-xl border border-white/10 bg-[#151519] p-2 shadow-2xl">
                            {navLinks.map((link) => (
                                <Link key={link.label} href={link.href}
                                    className={`flex min-h-11 items-center rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground ${focusStyles}`}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </details>

                    {/* Primary Action */}
                    <LinkButton href="#join" variant="primary" className={`shrink-0 whitespace-nowrap px-3 py-2.5 text-xs sm:gap-2 sm:px-4 sm:text-sm ${focusStyles}`}>
                        Get Started
                        <ArrowUpRight
                            size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                        />
                    </LinkButton>

                </div>
            </div>
        </header>
    )
}

export default Navbar;
