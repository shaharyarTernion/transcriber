"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "102 ",
    description: "Languages support for Transcription",
  },
  {
    title: "Email",
    description: "Support available",
  },
  {
    title: "75 ",
    description: "Languages support for Translation",
  },
  {
    title: "Premium",
    description: "includes deep content analysis",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/iphone.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography
            placeholder={""}
            variant="h2" color="current" className="mb-4">
            Mobile Convenience
          </Typography>
          <Typography
            variant="lead"
            placeholder={""}
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            Access and share your materials anywhere, anytime.
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
