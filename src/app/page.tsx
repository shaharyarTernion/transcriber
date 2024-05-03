// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
// import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faq";

export const metadata = {
  title: "Videos Transcription",
  description: "Effortless Transcription, Intelligent Insights, Elevate Your Content. Enhance your videos and audios game through AI and NLP",
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
      <Faqs />
      <Footer />
    </>
  );
}
