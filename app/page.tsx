import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ArrowUpRight } from "lucide-react";
import FeatureIntroduction from "@/components/FeatureIntroduction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* About section: secondary CTA destination */}
        <section id="about" className="scroll-mt-8 border-t border-white/10 bg-background px-6 py-24 md:py-32">
          <div className="mx-auto max-w-295">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              The idea behind Orphic
            </p>

            <h2 className="mt-5 text-foreground max-w-3xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              Less noise. More meaning.
            </h2>

            <p className="text-muted mt-6 text-base leading-8 max-w-2xl font-display md:text-lg">
              Orphic is a social space being built around deeper
              conversations, genuine connections, and ideas
              worth exploring.
            </p>

          </div>
        </section>

        <FeatureIntroduction/>
        

        {/* Join section: primary CTA destination */}
        <section id="join" className="scroll-mt-8 border-t border-white/10 px-6 py-24 bg-background md:py-32">

          <div className="mx-auto max-w-295">
            <p className="text-accent text-xs uppercase tracking-[0.25em]">
              Your world of ideas
            </p>

            <h2 className="mt-5 max-w-3xl font-display text-foreground text-4xl leading-tight sm:text-5xl md:text-6xl">
              Find your people.
              <br />
              Follow your curiosity.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-muted">
              Discover fresh perspectives, share the things that
              matter to you, and connect with people who make
              every conversation worth having.
            </p>

            <a href="#about" className="mt-8 inline-flex items-center gap-2 text-[#c4b2ff] transition-colors hover:text-white">
              Explore the experience
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

          </div>
        </section>

      </main>
    </>
  );
}
