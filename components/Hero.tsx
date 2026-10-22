import Image from "next/image";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { displayFont } from "@/app/fonts";
import LinkButton from "./ui/LinkButton";

const Hero = () => {
  return (
    <section id="explore" className="relative isolate overflow-hidden bg-background">

      {/* Planet artwork */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-full md:w-[66%]">
          <Image
            src="/orphic-planet-artwork.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover object-center"
          />
        </div>

        {/* Fade the artwork into the dark background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0c0c0f_0%,rgba(12,12,15,0.96)_24%,rgba(12,12,15,0.76)_39%,rgba(12,12,15,0.12)_73%,transparent_100%)] max-md:bg-[linear-gradient(90deg,rgba(12,12,15,0.96),rgba(12,12,15,0.72))]" />

        {/* Darken the top and bottom edges */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0c0c0f_0%,transparent_22%,transparent_86%,#0c0c0f_100%)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-328 items-center px-6 py-16 md:px-0 md:py-10">

        <div className="w-full max-w-147.5">
          <h1 className={`${displayFont.className} text-[clamp(4rem,7.4vw,7rem)] leading-[0.95] tracking-[-0.055em] text-foreground`}>

            <span className="block">People.</span>
            <span className="block">Ideas.</span>
            <span className="block">Moments.</span>

            <span className="block bg-linear-to-r from-[#c9b9ff] via-[#a68aff] to-[#8462d8] bg-clip-text text-transparent pb-4">
              Together.
            </span>
          </h1>

          <p className="mt-4 max-w-117.5 text-[17px] leading-9 text-muted sm:text-lg">
            A social space for deeper conversations,
            real connections, and a more thoughtful internet.
          </p>

          {/* Actions */}
          <div className="mt-4 flex flex-wrap items-center gap-5">

            <div className="mt-8 flex flex-wrap items-center gap-5">

              {/* Primary CTA: points to the Join section */}
              <LinkButton href="#join" variant="primary" className="px-5 py-3.5">
                Join Orphic
                <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </LinkButton>

              {/* Secondary CTA: points to the About section */}
              <LinkButton href="#about" variant="secondary" className="text-sm">
                <span className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[#9a7cff]">
                  <ArrowDownRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </span>
                Discover Orphic
              </LinkButton>
            </div>

          </div>

          {/* Editorial feature labels */}
          <div className="mt-10 grid max-w-155 grid-cols-1 gap-4 text-[#c6c0d6] sm:grid-cols-3 sm:gap-0">

            <div className="font-normal text-lg">
              Deeper
              <br />
              Conversations
            </div>

            <div className="font-normal text-lg sm:border-l sm:border-white/20 sm:px-5">
              Real
              <br />
              Connections
            </div>

            <div className="font-normal text-lg sm:border-l sm:border-white/20 sm:px-5">
              A More Thoughtful
              <br />
              Internet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;