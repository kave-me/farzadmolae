import { iSection } from "@components/Section/types.section";
import { HeroSection } from "@components/Section/Hero";

export default function Home() {
  const sections: iSection[] = [
    {
      title: "section1",
      id: "section1",
    },
    {
      title: "section2",
      id: "section2",
    },
    {
      title: "section3",
      id: "section3",
    },
    {
      title: "section4",
      id: "section4",
    },
  ];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-background dark:bg-background-dark'>
      <HeroSection />
      {/*<AboutMeSection />*/}
      {/*<GallerySection />*/}
      {/*<ContactSection />*/}
    </main>
  );
}
