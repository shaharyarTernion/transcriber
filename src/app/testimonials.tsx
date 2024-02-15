"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";


const TESTIMONIALS = [
  {
    feedback:
      `Videos Transcription not only transcribes flawlessly but also enhances my communication skills. Speaker identification and organization features are game-changers for productivity.`,
    client: "Pardeep Kumar",
    title: "",
    img: "",
  },
  // {
  //   feedback:
  //     "Transcipt Video not only transcribes flawlessly but also enhances my communication skills. Speaker identification and organization features are game-changers for productivity.",
  //   client: "Mary Joshiash",
  //   title: "",
  //   img: "",
  // },
  // {
  //   feedback:
  //     "A language lover's dream! It nails multi-lingual support and goes beyond with AI-driven summarization. It's an essential tool for language enthusiasts like me.",
  //   client: "Marcell Glock",
  //   title: "",
  //   img: "  ",
  // },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography
            placeholder={""}
            variant="h2" color="current" className="mb-2">
            What Users Say
          </Typography>
          <Typography
            placeholder={""}
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Discover what our valued clients have to say about their experiences
            with our services. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
