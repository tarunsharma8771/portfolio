import {
  HomeExperienceHighlights,
  HomeFocusAreas,
  HomeHero,
  HomeResources,
} from "@/components/home/HomeSections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeExperienceHighlights />
      <HomeFocusAreas />
      <HomeResources />
    </>
  );
}
