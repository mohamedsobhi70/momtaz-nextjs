import Faqs from "./components/common/Faqs/Faqs";
import Features from "./components/Features/Features";
import HomeHeroSec from "./components/HomeHeroSec/HomeHeroSec";
import OurNumbers from "./components/OurNumbers/OurNumbers";
import Subjects from "./components/Subjects/Subjects";

export default function Home() {
  return (
    <>
      <HomeHeroSec />
      <OurNumbers />
      <Features />
      <Subjects />
      <Faqs />
    </>
  );
}
