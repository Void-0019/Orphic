import Link from "next/link";
import { displayFont } from "@/app/fonts";
import { MessageCircle, ArrowUpRight, Orbit, Route } from "lucide-react";

const FeatureIntroduction = () => {
  return (
    <section id="features" className="relative overflow-hidden border-t border-white/10 bg-[#0c0c0f] px-6 py-24 sm:py-28 md:py-36">

      <div className="mx-auto max-w-295">

      {/* Section introduction */}
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9a7cff]">
            01 / The Orphic experience
          </p>

          <h2 className={`${displayFont.className} mt-6 max-w-2xl text-5xl leading-[0.98] tracking-tight text-[#f3f3f1] sm:text-6xl md:text-7xl`}>
            Different ways
            <br />
            to <span className="text-[#a88bff]">connect.</span>
          </h2>
        </div>

        <p className="max-w-md pb-1 text-base leading-8 text-[#a2a2ab] md:col-span-5 md:justify-self-end">
          Not everything worth sharing fits into a feed.
          Explore thoughts, follow ideas, and discover the
          unexpected connections between people.
        </p>

      </div>


      {/* Editorial feature layout */}
      <div className="mt-16 grid gap-x-10 gap-y-14 md:mt-24 md:grid-cols-12 md:gap-y-0">

        {/* FRAGMENTS */}
        <article className="group relative border-t border-white/15 pt-6 transition-colors duration-300 hover:border-[#9a7cff] md:col-span-5 md:pb-8">
          <div className="flex justify-between items-center">
            <span className="text-xs trackin-[0.2em] text-[#777580]"> 01 — SHARE </span>

            <MessageCircle
              size={22}
              strokeWidth={1.4}
              aria-hidden="true"
              className="text-[#a2a2ab] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#bba5ff]"
            />
          </div>

          <div className="mt-10">
            <h3 className={`${displayFont.className} text-4xl text-[#f3f3f1] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#c4b2ff] sm:text-5xl`}>
              Fragments.
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#a2a2ab] sm:text-base">
              Some thoughts deserve a moment of their own.
              Share a passing idea, a small discovery, or
              a perspective that stays with someone.
            </p>
          </div>


          {/* Decorative quotation mark */}
          <div aria-hidden="true" className={`${displayFont.className} pointer-events-none absolute -bottom-12 right-2 text-[9rem] leading-none border-white/2.5 transition-colors duration-300 group-hover:text-[#9a7cff]/10`}>
            “
          </div>

        </article>


        {/* TRAILS */}
        <article className="group border-t border-white/15 pt-6 transition-colors duration-300 hover:border-[#9a7cff] md:col-span-3 md:mt-12 md:pb-8">
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-[0.2em] text-[#777580]">02 — EXPLORE</span>

            <Route
              size={22}
              strokeWidth={1.4}
              aria-hidden="true"
              className="text-[#a2a2ab] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#bba5ff]"
            />
          </div>

          <div className="mt-10">
            <h3 className={`${displayFont.className} text-4xl text-[#f3f3f1] transition-colors duration-300 group-hover:text-[#c4b2ff] sm:text-5xl`}>
              Trails.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#a2a2ab] sm:text-base">
              One idea leads to another. Follow threads
              of thought through related posts,
              conversations, and perspectives.
            </p>
          </div>

          {/* A line that grows on hover */}
          <div className="mt-8 h-px w-full bg-white/10">
            <div className="h-px w-1/4 origin-left bg-[#9a7cff] transition-all duration-500 group-hover:w-full" />
          </div>

        </article>



        {/* CONSTELLATIONS */}
        <article className="group border-t border-white/15 pt-6 transition-colors duration-300 hover:border-[#9a7cff] md:col-span-4 md:mt-24 md:pb-8">
          <div className="flex items-center justify-between">
            <span className="text-xs trackin-[0.2em] text-[#777580]">03 — DISCOVER</span>

            <Orbit
              size={23}
              strokeWidth={1.4}
              aria-hidden="true"
              className="text-[#a2a2ab] transition-all
                  duration-500 group-hover:rotate-45
                  group-hover:text-[#bba5ff]"
            />
          </div>

          <div className="mt-10">
            <h3 className={`${displayFont.className} text-4xl text-[#f3f3f1] transition-colors duration-300 group-hover:text-[#c4b2ff] sm:text-5xl`}>
              Constellations.
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#a2a2ab] sm:text-base">
              Find the people and perspectives that
              connect to your curiosity. Different
              interests, unexpected common ground.
            </p>
          </div>

          {/* Connected points */}
          <div aria-hidden="true" className="relative mt-8 flex h-10 items-center justify-center gap-7">
            <span className="absolute left-[15%] right-[15%] top-1/2 h-px bg-linear-to-r from-transparent via-[#9a7cff]/40 to-transparent"/>
            <span className="relative size-2 rounded-full bg-[#7660ae] ring-4 ring-[#9a7cff]/10 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#c4b2ff]"/>
            <span className="relative size-3 rounded-full bg-[#9a7cff] ring-4 ring-[#9a7cff]/10 transition-transform duration-300 group-hover:scale-125"/>
            <span className="relative size-2 rounded-full bg-[#7660ae] ring-4 ring-[#9a7cff]/10 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#c4b2ff]"/>
          </div>

        </article>
      </div>

          {/* Closing link */}
          <div className="mt-16 border-t border-white/10 pt-6 md:mt-20">
          <Link href="#join" className="group inline-flex items-center gap-3 text-sm text-[#c4b2ff] transition-colors hover:text-white">
          Find your place in the conversation

          <ArrowUpRight
              size={17}
              aria-hidden="true"
              className="transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1"
            />
            
          </Link>

          </div>
      </div>

    </section>
  )
}

export default FeatureIntroduction;
