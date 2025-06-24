"use client";
import { Button, Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-dark-500 via-dark-600 to-dark-700 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-info-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative section-padding">
        <div className="container-custom">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

            {/* Company Info - Takes up 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Typography
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  as="a"
                  href="/"
                  placeholder={""}
                  variant="h3"
                  className="mb-6 font-bold text-white hover:text-primary-300 transition-colors duration-300 inline-block"
                >
                  <span className="text-gradient-primary bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                    Videos
                  </span>{" "}
                  Transcription
                </Typography>

                <Typography
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  placeholder={""}
                  className="text-gray-300 leading-relaxed text-lg max-w-2xl"
                >
                  Unlock the Power of Seamless Transformation with Our Cutting-Edge AI Platform. Transform your audio and video content into accurate transcripts with intelligent insights and analysis.
                </Typography>
              </div>

              {/* Privacy Policy Link */}
              <div className="flex items-center">
                <div className="w-1 h-6 bg-gradient-primary rounded-full mr-4"></div>
                <Typography
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  as="a"
                  placeholder={""}
                  href="/privacypolicy"
                  className="text-gray-300 hover:text-primary-300 transition-colors duration-300 font-medium"
                >
                  Privacy Policy Available Here →
                </Typography>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-info rounded-full flex items-center justify-center shadow-colored-info">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">AI-Powered</div>
                    <div className="text-gray-400 text-sm">Advanced NLP</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-success rounded-full flex items-center justify-center shadow-colored-success">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">98% Accurate</div>
                    <div className="text-gray-400 text-sm">Precision transcription</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-warning rounded-full flex items-center justify-center shadow-colored-warning">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">75+ Languages</div>
                    <div className="text-gray-400 text-sm">Global support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Started Section */}
            <div className="lg:col-span-1">
              <div className="card-material bg-white/5 backdrop-blur-sm border border-white/10 h-full flex flex-col justify-center">
                <Typography
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  placeholder={""}
                  variant="h5"
                  className="mb-6 font-bold text-white text-center"
                >
                  Get Started Today
                </Typography>

                <div className="space-y-6 text-center">
                  <Typography
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    placeholder={""}
                    className="text-gray-300 text-sm"
                  >
                    Transform your content with AI-powered transcription and analysis
                  </Typography>

                  <Typography
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    href="https://app.videostranscription.com"
                    placeholder={""}
                    as="a"
                    className="inline-block w-full"
                  >
                    <Button
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      placeholder={""}
                      className="btn-gradient-primary w-full font-semibold py-4 text-lg hover:scale-105 transition-all duration-300"
                    >
                      Launch App
                      <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </Typography>

                  {/* Trust indicators */}
                  <div className="flex justify-center items-center gap-4 text-gray-400 text-xs pt-4">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-info-400 rounded-full"></div>
                      <span>Fast</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>Reliable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer - Simplified */}
          <div className="border-t border-gray-700/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Typography
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                placeholder={""}
                className="text-gray-400 text-sm text-center md:text-left"
              >
                &copy; {CURRENT_YEAR} Videos Transcription. All rights reserved.
              </Typography>

              {/* Simple stats */}
              <div className="flex items-center gap-8 text-gray-400 text-sm">
                <div className="text-center">
                  <div className="text-white font-semibold">10M+</div>
                  <div className="text-xs">Minutes Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold">50K+</div>
                  <div className="text-xs">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
