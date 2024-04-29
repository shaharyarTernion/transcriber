"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "102",
    description: "Languages support for Transcription",
  },
  {
    title: "100+",
    description: "Language support for summarization",
  },
  {
    title: "75",
    description: "Languages support for Translation",
  },
  {
    title: "Includes",
    description: "sentiment analysis and language detection",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-0 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={420}
          height={809}
          src="/image/33.jpg"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            variant="h2" color="current" className="mb-4">
            AI services
          </Typography>
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            variant="lead"
            placeholder={""}
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            Uses currently one of the top machine learning models
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;
