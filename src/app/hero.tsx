"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";


function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient with Material Dashboard colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-600 to-info-500"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-info-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-success-500/10 rounded-full blur-xl"></div>
      </div>

      <header className="relative min-h-screen flex items-center px-4 lg:px-8 pt-20 lg:pt-0">
        <div className="container-custom grid h-full w-full grid-cols-1 place-items-center lg:grid-cols-2 gap-12">
          <div className="col-span-1 text-center lg:text-left animate-fade-in">
            <Typography
              onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              placeholder={""}
              variant="h1"
              className="mb-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
              Your Perfect <br />
              <span className="text-gradient-primary bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                Video and Audio
              </span> <br />
              Transcription App
            </Typography>

            <Typography
              placeholder={""} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              variant="lead"
              className="mb-8 text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0"
            >
              Near Real-time Natural Language Processing of your content with AI-powered insights, translations, and intelligent analysis.
            </Typography>

            <Typography
              placeholder={""} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Effortless Transcription, Translation, Summarization and Intelligent Insights. Elevate Your Content with cutting-edge AI technology.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <Typography
                as="a" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                href="https://app.videostranscription.com"
                placeholder={""}
                className="inline-block"
              >
                <Button onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                  size="lg"
                  placeholder={""}
                  className="btn-gradient-primary text-lg px-8 py-4 font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Get Started Now →
                </Button>
              </Typography>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 animate-fade-in">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                  <span className="text-sm">98% Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-info-400 rounded-full"></div>
                  <span className="text-sm">75+ Languages</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                  <span className="text-sm">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative max-w-lg">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-info-500/30 rounded-3xl blur-2xl transform rotate-6 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-success-500/20 to-warning-500/20 rounded-3xl blur-xl transform -rotate-3 scale-105"></div>

              {/* Main image container with enhanced styling */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm">
                  <Image
                    width={450}
                    height={400}
                    src="/image/3.png"
                    alt="AI-Powered Transcription Interface - Transform your audio and video content"
                    className="relative rounded-2xl shadow-xl max-h-[380px] lg:max-h-[420px] object-cover transform transition-all duration-700 hover:scale-105 hover:rotate-1"
                  />

                  {/* Overlay gradient for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent rounded-2xl"></div>

                  {/* Enhanced floating elements with glassmorphism */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-success-400 rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-primary-600 font-bold text-sm">Real-time</div>
                        <div className="text-gray-600 text-xs">AI Processing</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30 animate-float delay-500">
                    <div className="text-center">
                      <div className="text-info-600 font-bold text-lg">75+</div>
                      <div className="text-gray-600 text-xs font-medium">Languages</div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30 animate-float delay-1000">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-success-600 font-bold text-sm">98% Accuracy</div>
                        <div className="text-gray-600 text-xs">Verified Results</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30 animate-float delay-700">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-warning rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-warning-600 font-bold text-xs">Premium AI</div>
                        <div className="text-gray-600 text-xs">Technology</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary-400 rounded-full opacity-70 animate-ping"></div>
                <div className="absolute -top-1 -right-3 w-4 h-4 bg-info-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-1 w-5 h-5 bg-success-400 rounded-full opacity-50 animate-bounce"></div>
                <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-warning-400 rounded-full opacity-80 animate-pulse delay-500"></div>
              </div>

              {/* Additional floating tech indicators */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl animate-bounce">
                ✨ AI-Powered
              </div>

              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-info text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl animate-pulse">
                🚀 Lightning Fast
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced CTA section */}
      <div className="relative mx-4 lg:mx-8 -mt-32 lg:-mt-24 z-50">
        <div className="card-material max-w-6xl mx-auto animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Typography
                placeholder={""} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                variant="h3"
                className="mb-4 text-dark-500 font-bold">
                Welcome to <span className="text-gradient-primary">VsT</span>, where your words come to life!
              </Typography>
              <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                placeholder={""}
                variant="paragraph"
                className="text-gray-600 leading-relaxed"
              >
                Transform your audio and video files into accurate transcripts effortlessly. Our intelligent analysis goes beyond transcription, offering insights to enhance the quality of your speech content.
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-3 bg-success-50 rounded-lg">
                <div className="w-10 h-10 bg-success-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-dark-500">Smart Analysis</div>
                  <div className="text-sm text-gray-600">AI-powered insights and sentiment analysis</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-info-50 rounded-lg">
                <div className="w-10 h-10 bg-info-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-dark-500">Global Reach</div>
                  <div className="text-sm text-gray-600">Translation support for 75+ languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
