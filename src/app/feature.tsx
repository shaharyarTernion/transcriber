"use client";

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
    color: "info",
  },
  {
    icon: HeartIcon,
    title: "Intelligent Analysis",
    children:
      "Language detection identifies text language for accurate processing. Sentiment analysis measures emotional tone, providing insights into positive, negative, or neutral sentiments. Summarization analysis yield you needed summary of your content.",
    color: "primary",
  },
  {
    icon: LockClosedIcon,
    title: "Export Transcript",
    children:
      "Enables users to seamlessly convert audio or text transcripts into PDF format, offering a convenient and shareable document for offline reference or distribution.",
    color: "success",
  },
  {
    icon: LightBulbIcon,
    title: "Content Translation",
    children:
      "Empower your content with global reach by leveraging the translation feature, allowing users to seamlessly translate transcripts or text into up to 75 languages. Enhance communication and accessibility on a global scale, breaking language barriers and ensuring that your content resonates with a diverse audience worldwide.",
    color: "warning",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-20 text-center animate-fade-in">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold uppercase tracking-wider">
              Your Elevating App
            </span>
          </div>

          <Typography
            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            variant="h1"
            className="mb-6 text-4xl lg:text-5xl font-bold text-dark-500 leading-tight">
            Diverse <span className="text-gradient-primary">Rich Features</span>
          </Typography>

          <Typography
            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            variant="lead"
            placeholder={""}
            className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed"
          >
            Unlock the true potential of your voice. Join Videos Transcription today and turn your audio and video content into compelling, impactful transcripts with AI-powered intelligence.
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 animate-slide-up">
          {FEATURES.map((props, idx) => (
            <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <FeatureCard {...props} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-fade-in">
          <div className="card-material">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-info-500 mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success-500 mb-2">75+</div>
                <div className="text-gray-600 font-medium">Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">10M+</div>
                <div className="text-gray-600 font-medium">Minutes Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning-500 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
