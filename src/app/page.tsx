// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

export const metadata = {
  title: "Verbal Insight Hub",
  description: "Enhance your videos and audios game through AI ",
};

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <VideoIntro /> */}
      <Feature />
      <MobileConvenience />
      <Testimonials />
      {/* <Faqs /> */}
      <Footer />
    </>
  );
}
