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
    title: "Transcription at Your Fingertips",
    children:
      "Effortlessly transcribe any audio or video file with our advanced transcription technology.  Say goodbye to time- consuming manual transcriptions and embrace efficiency",
  },
  {
    icon: HeartIcon,
    title: "User-Friendly Interface",
    children:
      "Enjoy a seamless experience with our intuitive and user-friendly platform. No technical expertise required – just upload, transcribe, and translate!",
  },
  {
    icon: LockClosedIcon,
    title: "Dynamic Translation Options",
    children:
      "Translate your text into 75 languages, opening up new possibilities for global communication and collaboration.",
  },
  {
    icon: LightBulbIcon,
    title: "Accurate and Reliable",
    children:
      "Our state-of-the-art algorithms ensure accurate transcriptions and translations. Trust in precision and reliability for all your content needs.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          placeholder={""}
          color="blue-gray" className="mb-2 font-bold uppercase">
          Your Learning App
        </Typography>
        <Typography 
          placeholder={""}
        variant="h1" color="blue-gray" className="mb-4">
          Diverse Learning Resources
        </Typography>
        <Typography
          variant="lead"
          placeholder={""}
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Access your learning materials on the go. Whether you&apos;re
          commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
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
