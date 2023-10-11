import { Section } from "@components/Section/section";

function AboutMeSection() {
  return (
    <Section title={"About me"} id={"about"}>
      <h1
        className={
          "bg-blue-950 h-[50vh] text-center text-5xl text-white w-full flex items-center justify-center "
        }
      >
        About me
      </h1>
    </Section>
  );
}
