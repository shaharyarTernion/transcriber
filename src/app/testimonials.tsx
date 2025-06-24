"use client";

import { StarIcon, UserIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import TestimonialCard from "../components/testimonial-card";

const TESTIMONIALS = [
  {
    feedback:
      "Your app is a comprehensive language solution, offering flawless transcription in multiple languages, deep content insights, and a powerful translation feature. Its use of a top machine learning model ensures high-quality results. Truly a game-changer for global communication!",
    client: "Pardeep Kumar",
    title: "Content Creator",
    img: "",
    rating: 5,
  },
  {
    feedback:
      "Transcript Video not only transcribes flawlessly but also enhances my communication skills. Speaker identification and organization features are game-changers for productivity.",
    client: "Sarah Johnson",
    title: "Podcast Host",
    img: "",
    rating: 5,
  },
  {
    feedback:
      "A language lover's dream! It nails multi-lingual support and goes beyond with AI-driven summarization. It's an essential tool for language enthusiasts like me.",
    client: "Marcus Chen",
    title: "Language Researcher",
    img: "",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations - Hidden on mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-info-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Responsive */}
        <div className="mb-12 sm:mb-16 lg:mb-20 flex w-full flex-col items-center animate-fade-in">
          {/* Icon Container - Mobile Responsive */}
          <div className="relative mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-primary rounded-xl sm:rounded-2xl transform rotate-6 shadow-colored-primary"></div>
            <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-primary text-white shadow-colored-primary">
              <UserIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            {/* Floating stars - Hidden on mobile */}
            <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-warning-400 rounded-full flex items-center justify-center hidden sm:flex">
              <StarIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
            </div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-success-400 rounded-full hidden sm:block"></div>
          </div>

          <div className="text-center max-w-4xl w-full px-4 sm:px-0">
            <div className="mb-3 sm:mb-4">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 text-primary-600 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Testimonials
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
              What <span className="text-gradient-primary">Users Say</span>
            </Typography>

            <Typography
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              variant="lead"
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2 sm:px-0"
            >
              Discover what our valued clients have to say about their experiences with our AI-powered transcription services. We take pride in delivering exceptional results and fostering lasting partnerships.
            </Typography>

            {/* Stats row - Mobile Responsive */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-warning-400" />
                  ))}
                </div>
                <span className="font-semibold text-sm sm:text-base">4.9/5</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="font-semibold text-sm sm:text-base">50,000+ Happy Users</div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="font-semibold text-sm sm:text-base">99% Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 animate-slide-up">
          {TESTIMONIALS.map((props, key) => (
            <div
              key={key}
              className="animate-scale-in"
              style={{ animationDelay: `${key * 0.2}s` }}
            >
              <TestimonialCard {...props} />
            </div>
          ))}
        </div>

        {/* Bottom CTA - Mobile Responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-fade-in">
          <div className="card-material max-w-2xl mx-auto bg-gradient-to-r from-primary-50 to-info-50 border border-primary-100 p-6 sm:p-8">
            <Typography
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              variant="h4"
              className="mb-3 sm:mb-4 font-bold text-dark-500 text-lg sm:text-xl lg:text-2xl"
            >
              Ready to Join Thousands of Satisfied Users?
            </Typography>
            <Typography
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base px-2 sm:px-0"
            >
              Experience the power of AI-driven transcription and transform your content today.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="btn-gradient-primary text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                Get Started
              </button>
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 text-primary-600 font-semibold hover:bg-primary-50 rounded-lg transition-all duration-300 text-sm sm:text-base">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
