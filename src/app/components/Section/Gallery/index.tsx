import { Section } from "@components/Section/section";

function GallerySection() {
  return (
    <Section title={"Gallery"} id={"gallery"}>
      <h1
        className={
          "bg-blue-950 h-[50vh] text-center text-5xl text-white w-full flex items-center justify-center "
        }
      >
        Gallery
      </h1>
    </Section>
  );
}
