import { Section } from "@components/Section/section";
import Link from "next/link";
import { ownerData } from "@data/owner.data";
import Image from "next/image";
import HeroImage from "@public/images/hero.jpg";

// noinspection JSUnusedGlobalSymbols
export const AboutSection = () => (
  <Section title={"Home"} id={"home"}>
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-blue-800 text-white border-b-2 '>
      <h2 className={`text-4xl font-bold text-center hidden `}>{"Home"}</h2>
      <h2 className={`text-4xl font-bold text-center uppercase `}>
        I&apos;m {ownerData.name}
        <br />
        <span>{ownerData.occupation}</span>
      </h2>
      <div className='wrapper'>
        <Image
          src={HeroImage}
          alt={`${ownerData.name} ${ownerData.lastName} ${ownerData.occupation}'s image`}
        />
      </div>

      <Link
        href={"#about"}
        className={`text-2xl font-bold text-center cursor-pointer hover:text-blue-300`}
      >
        About me
      </Link>
    </div>
  </Section>
);
