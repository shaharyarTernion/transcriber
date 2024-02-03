"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              placeholder={""}
              variant="h1" color="white" className="mb-4">
              Your Perfect <br /> Video and Audio Transcription App
            </Typography>
            <Typography
              placeholder={""}
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Unlock the Power with AI for Free.
            </Typography>
            <Typography
              placeholder={""}
              className="mb-4" color="white" variant="h6">
              Effortless Transcription, Intelligent Insights, Elevate Your Content
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">

              <Typography
                as="a"
                href="https://app.transciptvideo.com"
                // target="_blank"
                placeholder={""}
                variant="h5"
                color="white"
                className="mb-4"
              >              <Button
                size="lg"
                placeholder={""}
                color="white"
                className="flex justify-center items-center gap-3"
              >
                  Lets start
                </Button>

              </Typography>

              {/* <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Google Play
              </Button> */}
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography
            placeholder={""}
            variant="h3" color="blue-gray" className="mb-3">
            Welcome to TV, where your words come to life!
          </Typography>
          <Typography
            placeholder={""}
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Transform your audio and video files into accurate transcripts effortlessly. Not just that, our intelligent analysis goes beyond transcription, offering insights to enhance the quality of your speech content. Elevate your communication, captivate your audience, and make your voice truly heard.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
