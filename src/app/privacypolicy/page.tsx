"use client";
import { Navbar, Footer } from "@/components";
import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Campaign() {
  return (
    <>
      <Navbar />

      <section className="py-24 px-4 bg-[#2C86EB]">
        <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          placeholder={""}
          color="white"
          className="mb-2 text-2xl font-bold uppercase"
        >
          Privacy Policy and Terms of Service
        </Typography>
      </section>
      <section className="py-24 px-4">
        <div className="container mx-auto mb-10 text-left">
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-8 text-lg text-gray-700 lg:w-10/12"
          >
            This Privacy Policy explains how we collect, use, and protect
            information from users of our transcription service. By using our
            service, you agree to the terms of this Privacy Policy.
          </Typography>
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-4 text-lg text-gray-700 lg:w-10/12"
          >
            <strong className="text-blue-700">Information We Collect</strong>
            <br />
            - Personal Information: When you sign up for an account, we may
            collect personal information such as your name and email address.
            This information is used solely for the purpose of providing our
            transcription service to you.
            <br />
            - Usage Information: We use the file(s), which you upload by
            yourself, to be uploaded at our protected storage to have our
            algorithms process them. Those file(s) do not get shared with
            anyone.
            <br />- Device Information: We may collect information about the
            device you use to access our service, including the type of device,
            operating system, and IP address. This information is used for
            security purposes and to ensure the compatibility of our service
            with different devices.
          </Typography>
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-4 text-lg text-gray-700 lg:w-10/12"
          >
            <strong className="text-blue-700">How We Use Your Information</strong>
            <br />
            - To provide and improve our transcription service.
            <br />
            - To communicate with you about your account and our service.
            <br />
            - To personalize your experience and provide tailored content.
            <br />- To comply with legal obligations.
          </Typography>
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-4 text-lg text-gray-700 lg:w-10/12"
          >
            <strong className="text-blue-700">Information Sharing</strong>
            <br />
            We do not share your information with any third parties, except in
            the following circumstances:
            <br />
            {/* - With service providers who help us provide the transcription service, such as AWS.<br /> */}
            - With your consent or at your direction.
            <br />
            - To comply with legal requirements or protect our rights.
            <br />
            (About the Google User Data, we take email address to react out to
            the user, which we do not share. More details are already shared in
            the usage information above.)
          </Typography>
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-4 text-lg text-gray-700 lg:w-10/12"
          >
            <strong className="text-blue-700">Data Security</strong>
            <br />
            We use industry-standard security measures to protect your
            information, including the use of AWS-backed services. However, no
            data transmission over the internet can be guaranteed to be 100%
            secure.
          </Typography>
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-4 text-lg text-gray-700 lg:w-10/12"
          >
            <strong className="text-blue-700">Your Choices</strong>
            <br />
            You can access, update, or delete your personal information by
            logging into your account or contacting us directly. You can also
            choose not to provide certain information, but this may limit your
            ability to use certain features of our service.
          </Typography>
          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-4 text-lg text-gray-700 lg:w-10/12"
          >
            <strong className="text-blue-700">Changes to This Privacy Policy</strong>
            <br />
            We may update this Privacy Policy from time to time. If we make
            material changes, we will notify you by email or by posting a notice
            on our website. Your continued use of our service after any such
            update constitutes your acceptance of the updated Privacy Policy.
          </Typography>

          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-4 text-lg text-gray-700 lg:w-10/12"
          >
            <strong className="text-blue-700">Disclosure</strong>
            <br />
            Videos Transcription complies with the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
              className="text-blue-700"
            >
              Google API Services User Data Policy{" "}
            </a>
            , including the Limited Use requirements. Information received from
            Google APIs will only be used and transferred to other apps in
            accordance with this policy.
          </Typography>

          <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            placeholder={""}
            className="mx-auto w-full mb-4 text-lg text-gray-700 lg:w-10/12"
          >
            <strong className="text-blue-700">Contact Us</strong>
            <br />
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:shaharyar.malik2000@gmail.com">
              shaharyar.malik2000@gmail.com
            </a>
            .
          </Typography>
        </div>
      </section>
      <Footer />
    </>
  );
}
