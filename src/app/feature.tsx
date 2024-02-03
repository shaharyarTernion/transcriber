"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Accurate Transcription",
    children:
      "Lightning-fast and precise transcription of audio and video files. Multiple file format support, including MP3, WAV, MP4, and more.",
  },
  {
    icon: HeartIcon,
    title: "Intelligent Analysis",
    children:
      `The language detection feature identifies the language of given text, ensuring accurate processing and localization. Simultaneously, sentiment analysis gauges the emotional tone within the content, providing valuable insights into the expressed sentiments, whether positive, negative, neutral, or a mix`,
  },
  {
    icon: LockClosedIcon,
    title: "Export Transcript",
    children:
      `Enables users to seamlessly convert audio or text transcripts into PDF format, offering a convenient and shareable document for offline reference or distribution`,
  },
  {
    icon: LightBulbIcon,
    title: "Content Translation",
    children:
      `Empower your content with global reach by leveraging the translation feature, allowing users to seamlessly translate transcripts or text into up to 75 languages. Enhance communication and accessibility on a global scale, breaking language barriers and ensuring that your content resonates with a diverse audience worldwide.
`,
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          placeholder={""}
          color="blue-gray" className="mb-2 font-bold uppercase">
          Your Elevating App
        </Typography>
        <Typography
          placeholder={""}
          variant="h1" color="blue-gray" className="mb-4">
          Diverse Rich Features
        </Typography>
        <Typography
          variant="lead"
          placeholder={""}
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Unlock the true potential of your voice. Join VerbalInsightHub today and turn your audio and video content into compelling, impactful transcripts.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
