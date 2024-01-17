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
      `Receive detailed insights on speech clarity, pace, and tone.
Identify filler words, pauses, and speech patterns for improvement.`,
  },
  {
    icon: LockClosedIcon,
    title: "Customizable Reports",
    children:
      `Access comprehensive analysis reports on various attributes.
Track your speech improvement over time and measure audience engagement.`,
  },
  {
    icon: LightBulbIcon,
    title: "Content Enhancement",
    children:
      `Seamlessly add annotations, key points, or corrections to your transcripts.
Elevate your speech content with intelligent suggestions for clarity and impact.
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
