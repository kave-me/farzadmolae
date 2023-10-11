import { ownerData } from "@data/owner.data";
import heroImage from "@public/images/landing-hero.png";
import Link from "next/link";
import { FaMouse } from "react-icons/fa";

function HeroCta() {
  return (
    <div
      className={
        "rounded-3xl flex gap-2 min-w-min px-4 py-2 text-lg bg-gold  items-center justify-center "
      }
    >
      <Link className={"text-xs"} href={"#about-me"}>
        About Me
      </Link>
      <FaMouse className={"w-5 h-5 text-white"} />
    </div>
  );
}

export const HeroSection = () => (
  <section
    id={"hero"}
    className={`flex flex-col min-h-max justify-center items-center w-full h-[50vh] p-4
`}
  >
    <article className='flex flex-col items-center justify-center'>
      <header
        className={`flex flex-col items-center justify-center w-2/3 h-1/2 z-10 pt-20 `}
      >
        <img
          src={heroImage.src}
          alt={`${ownerData.name} - ${ownerData.lastName} picture in gym`}
          className={"rounded-full"}
        />
      </header>
      <h1
        className={`description uppercase text-5xl font-bold text-center text-gold pt-6`}
      >
        I&apos;m {ownerData.name}
      </h1>
      <h2 className='occupation text-4xl font-bold uppercase -mr-12'>
        {ownerData.occupation}
      </h2>
      <HeroCta />
    </article>
  </section>
);
