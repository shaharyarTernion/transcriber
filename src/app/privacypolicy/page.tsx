"use client";
import { Footer, Navbar } from "@/components";
import { Typography } from "@material-tailwind/react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: When you sign up for an account, we may collect personal information such as your name and email address. This information is used solely for the purpose of providing our transcription service to you.",
        "Usage Information: We use the file(s), which you upload by yourself, to be uploaded at our protected storage to have our algorithms process them. Those file(s) do not get shared with anyone.",
        "Device Information: We may collect information about the device you use to access our service, including the type of device, operating system, and IP address. This information is used for security purposes and to ensure the compatibility of our service with different devices."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our transcription service.",
        "To communicate with you about your account and our service.",
        "To personalize your experience and provide tailored content.",
        "To comply with legal obligations."
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not share your information with any third parties, except in the following circumstances:",
        "With your consent or at your direction.",
        "To comply with legal requirements or protect our rights.",
        "(About the Google User Data, we take email address to react out to the user, which we do not share. More details are already shared in the usage information above.)"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We use industry-standard security measures to protect your information, including the use of AWS-backed services. However, no data transmission over the internet can be guaranteed to be 100% secure."
      ]
    },
    {
      title: "Your Choices",
      content: [
        "You can access, update, or delete your personal information by logging into your account or contacting us directly. You can also choose not to provide certain information, but this may limit your ability to use certain features of our service."
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website. Your continued use of our service after any such update constitutes your acceptance of the updated Privacy Policy."
      ]
    },
    {
      title: "Disclosure",
      content: [
        "Videos Transcription complies with the Google API Services User Data Policy, including the Limited Use requirements. Information received from Google APIs will only be used and transferred to other apps in accordance with this policy."
      ]
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section with Gradient Background */}
      <div className="relative min-h-[40vh] w-full overflow-hidden">
        {/* Background gradient with Material Dashboard colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-600 to-info-500"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-info-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-success-500/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative flex items-center justify-center min-h-[40vh] px-4 lg:px-8">
          <div className="text-center animate-fade-in">
            <Typography
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              placeholder={""}
              variant="h1"
              className="mb-4 text-4xl lg:text-6xl font-bold text-white leading-tight"
            >
              Privacy Policy & <br />
              <span className="text-gradient-primary bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </Typography>

            <Typography
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              placeholder={""}
              variant="lead"
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Your privacy and data security are our top priorities. Learn how we protect and handle your information.
            </Typography>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Introduction Card */}
          <div className="mb-16 animate-slide-up">
            <div className="card-material max-w-4xl mx-auto">
              <Typography
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                placeholder={""}
                variant="h4"
                className="mb-6 text-2xl font-bold text-dark-500"
              >
                Our Commitment to Your Privacy
              </Typography>
              <Typography
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                placeholder={""}
                className="text-lg text-gray-600 leading-relaxed"
              >
                This Privacy Policy explains how we collect, use, and protect information from users of our transcription service. By using our service, you agree to the terms of this Privacy Policy. We are committed to maintaining the highest standards of data protection and transparency.
              </Typography>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="grid gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className="card-material animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <Typography
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    placeholder={""}
                    variant="h5"
                    className="text-xl font-bold text-dark-500 flex-1"
                  >
                    {section.title}
                  </Typography>
                </div>

                <div className="space-y-4 ml-16">
                  {section.content.map((item, itemIndex) => (
                    <Typography
                      key={itemIndex}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      placeholder={""}
                      className="text-gray-600 leading-relaxed"
                    >
                      {item.includes("Google API Services User Data Policy") ? (
                        <>
                          Videos Transcription complies with the{" "}
                          <a
                            href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                            className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 underline decoration-primary-200 hover:decoration-primary-400"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google API Services User Data Policy
                          </a>
                          {" "}
                          , including the Limited Use requirements. Information received from Google APIs will only be used and transferred to other apps in accordance with this policy.
                        </>
                      ) : (
                        item
                      )}
                    </Typography>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact Section */}
            <div className="card-material animate-fade-in bg-gradient-to-r from-primary-50 to-info-50 border border-primary-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-info rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <Typography
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    placeholder={""}
                    variant="h5"
                    className="text-xl font-bold text-dark-500 mb-4"
                  >
                    Contact Us
                  </Typography>
                  <Typography
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    placeholder={""}
                    className="text-gray-600 leading-relaxed mb-4"
                  >
                    If you have any questions about this Privacy Policy, please don't hesitate to contact us. We're here to help and ensure your privacy concerns are addressed.
                  </Typography>
                  <a
                    href="mailto:shaharyar.malik2000@gmail.com"
                    className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    shaharyar.malik2000@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 animate-fade-in">
            <div className="card-material">
              <div className="text-center mb-8">
                <Typography
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  placeholder={""}
                  variant="h4"
                  className="text-2xl font-bold text-dark-500 mb-4"
                >
                  Security & Trust
                </Typography>
                <Typography
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  placeholder={""}
                  className="text-gray-600"
                >
                  Your data is protected by industry-leading security measures
                </Typography>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold text-success-600 mb-2">SSL Encrypted</div>
                  <div className="text-gray-600 text-sm">End-to-end encryption for all data transfers</div>
                </div>

                <div className="p-6">
                  <div className="w-16 h-16 bg-info-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-info-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-0.257-0.257A6 6 0 1118 8zM2 8a8 8 0 1016 0 8 8 0 00-16 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold text-info-600 mb-2">GDPR Compliant</div>
                  <div className="text-gray-600 text-sm">Full compliance with privacy regulations</div>
                </div>

                <div className="p-6">
                  <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-warning-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold text-warning-600 mb-2">AWS Secured</div>
                  <div className="text-gray-600 text-sm">Enterprise-grade cloud security infrastructure</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
