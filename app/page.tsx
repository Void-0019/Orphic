import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* About section: secondary CTA destination */}
        <section id="about" className="scroll-mt-8 border-t border-white/10 bg-[#0c0c0f] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-295">
            <p className="text-xs uppercase tracking-[0.25em] text-[#9a7cff]">
              The idea behind Orphic
            </p>

            <h2 className="mt-5 text-[#f3f3f1] max-w-3xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              Less noise. More meaning.
            </h2>

            <p className="text-[#a2a2ab] mt-6 text-base leading-8 max-w-2xl font-display md:text-lg">
              Orphic is a social space being built around deeper
              conversations, genuine connections, and ideas
              worth exploring.
            </p>

          </div>
        </section>

        {/* Features section: navbar destination */}
        <section id="features" className="scroll-mt-8 border-t border-white/10 bg-[#111116] px-6 py-24 md:py-32">

          <div className="mx-auto max-w-295">
            <p className="text-xs uppercase text-[#9a7cff] tracking-[0.25em]">
              What matters here
            </p>

            <div className="mt-8 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="font-display text-[#f3f3f1] text-2xl">
                  Deeper conversations
                </h3>
                <p className="mt-3 leading-7 text-[#a2a2ab]">
                  Space for ideas that deserve more than a quick reaction.
                </p>
              </div>

              <div>
                <h3 className="text-[#f3f3f1] font-display text-2xl">
                  Real connections
                </h3>
                <p className="mt-3 leading-7 text-[#a2a2ab]">
                  Discover people through the things you think about
                  and care about.
                </p>
              </div>

              <div>
                <h3 className="text-[#f3f3f1] font-display text-2xl">
                  A thoughtful internet
                </h3>
                <p className="mt-3 leading-7 text-[#a2a2ab]">
                  An experience designed to make meaningful
                  participation matter.

                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Join section: primary CTA destination */}
        <section id="join" className="scroll-mt-8 border-t border-white/10 px-6 py-24 bg-[#0c0c0f] md:py-32">

          <div className="mx-auto max-w-295">
            <p className="text-[#9a7cff] text-xs uppercase tracking-[0.25em]">
              Your world of ideas
            </p>

            <h2 className="mt-5 max-w-3xl font-display text-[#f3f3f1] text-4xl leading-tight sm:text-5xl md:text-6xl">
              Find your people.
              <br />
              Follow your curiosity.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[#a2a2ab]">
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
