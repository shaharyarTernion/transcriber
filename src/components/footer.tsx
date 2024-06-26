"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-3 bg-[#2C86EB] px-8 pt-9">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              as="a"
              href="/"
              // target="_blank"
              placeholder={""}
              variant="h5"
              color="white"
              className="mb-4"
            >
              Videos Transcription
            </Typography>
            <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              placeholder={""}
              color="white"
              className="mb-5 font-normal"
            >
              Unlock the Power of Seamless Transformation with Our Cutting-Edge
              Platform.
            </Typography>

            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              <li>
                <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                  as="a"
                  placeholder={""}
                  href="/privacypolicy"
                  color="black"
                  className={`py-1 font-medium transition-colors mb-5`}
                >
                  Privacy Policy available here.
                </Typography>
              </li>
            </ul>

            {/* <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul> */}
          </div>
          <div className="mt-0 w-full md:mt-0 md:w-auto flex flex-col justify-center">
            <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              placeholder={""}
              variant="h6"
              color="white"
              className="mb-3"
            >
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 mb-5">
              <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                href="https://app.videostranscription.com"
                placeholder={null}
                as="a"
              >
                <Button onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                  placeholder={""}
                  color="white"
                  className="flex items-center justify-center"
                >
                  {/* <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                /> */}
                  Videos Transcription
                </Button>
              </Typography>

              {/* <Button
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button> */}
            </div>
          </div>
        </div>
        {/* <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
            .
          </Typography>

          {/* <div className="flex gap-2">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div> 
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
