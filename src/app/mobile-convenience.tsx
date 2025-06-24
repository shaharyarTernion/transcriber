"use client";

import InfoCard from "@/components/info-card";
import {
  CpuChipIcon,
  GlobeAltIcon,
  HeartIcon,
  LanguageIcon
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const OPTIONS = [
  {
    title: "102",
    description: "Languages support for Transcription",
    icon: LanguageIcon,
    color: "info" as const,
  },
  {
    title: "100+",
    description: "Language support for summarization",
    icon: CpuChipIcon,
    color: "success" as const,
  },
  {
    title: "75",
    description: "Languages support for Translation",
    icon: GlobeAltIcon,
    color: "warning" as const,
  },
  {
    title: "Includes",
    description: "sentiment analysis and language detection",
    icon: HeartIcon,
    color: "primary" as const,
  },
];

export function MobileConvenience() {
  return (
    <section className="section-padding bg-gradient-to-br from-info-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decorations - Hidden on mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-0 left-0 w-96 h-96 bg-info-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-success-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Image Section - Mobile Responsive */}
          <div className="order-2 lg:order-1 animate-scale-in">
            <div className="relative max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
              {/* Floating background elements - Hidden on mobile */}
              <div className="absolute inset-0 bg-gradient-to-tr from-info-500/10 to-primary-500/10 rounded-2xl sm:rounded-3xl blur-xl transform rotate-6 hidden sm:block"></div>
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-success rounded-full shadow-colored-success hidden sm:block"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-warning rounded-full shadow-colored-warning hidden sm:block"></div>

              <Image
                width={420}
                height={809}
                src="/image/33.jpg"
                className="relative w-full sm:w-3/4 mx-auto lg:w-full rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transform transition-all duration-500 hover:scale-105"
                alt="AI Mobile Application Interface"
              />

              {/* Floating stats cards - Mobile Responsive */}
              <div className="absolute top-4 sm:top-8 -left-2 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-material animate-bounce">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-success-500 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-semibold text-dark-500">AI Powered</span>
                </div>
              </div>

              <div className="absolute bottom-16 sm:bottom-20 -right-3 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-material animate-pulse">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-info-500 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-semibold text-dark-500">Real-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Mobile Responsive */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="max-w-xl">
              {/* Section Badge - Mobile Responsive */}
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-info-50 text-info-600 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Advanced Technology
                </span>
              </div>

              <Typography
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                placeholder={""}
                variant="h1"
                className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-500 leading-tight"
              >
                <span className="text-gradient-info">AI Services</span> <br />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Powered by Machine Learning</span>
              </Typography>

              <Typography
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                variant="lead"
                placeholder={""}
                className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                Experience the power of cutting-edge artificial intelligence with our state-of-the-art machine learning models, delivering unparalleled accuracy and performance across multiple languages and services.
              </Typography>

              {/* Enhanced Stats Grid - Mobile Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 animate-slide-up">
                {OPTIONS.map((option, index) => (
                  <div
                    key={option.title}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <InfoCard {...option} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileConvenience;
