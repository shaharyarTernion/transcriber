"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

export function Faqs() {
  return (
    <section className="py-24 px-4">
    <div className="container mx-auto mb-20 text-center">
      <Typography
        placeholder={""}
        color="blue-gray" className="mb-2 font-bold uppercase">
        Privacy Policy anf terms of service
      </Typography>
      {/* <Typography
        placeholder={""}
        variant="h1" color="current" className="mb-4">
        Diverse Rich Features
      </Typography> */}
      <Typography
        variant="lead"
        placeholder={""}
        className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
      >

This Privacy Policy explains how we collect, use, and protect information from users of our transcription service. By using our service, you agree to the terms of this Privacy Policy.

**Information We Collect**

We collect the following types of information:

1. **Personal Information**: When you sign up for an account, we may collect personal information such as your name, email address, and payment information. This information is used solely for the purpose of providing our transcription service to you.

2. **Usage Information**: We collect information about how you use our service, including the videos and audios you upload for transcription, the transcripts you receive, and any feedback you provide. This information helps us improve our service and provide a better user experience.

3. **Device Information**: We may collect information about the device you use to access our service, including the type of device, operating system, and IP address. This information is used for security purposes and to ensure the compatibility of our service with different devices.

**How We Use Your Information**

We use the information we collect for the following purposes:

1. To provide and improve our transcription service.
2. To communicate with you about your account and our service.
3. To personalize your experience and provide tailored content.
4. To comply with legal obligations.

**Information Sharing**

We do not share your information with any third parties, except in the following circumstances:

1. With service providers who help us provide the transcription service, such as AWS.
2. With your consent or at your direction.
3. To comply with legal requirements or protect our rights.

**Data Security**

We use industry-standard security measures to protect your information, including the use of AWS-backed services. AWS provides a secure and reliable infrastructure that complies with various security standards and certifications, such as ISO 27001 and SOC 2. However, no data transmission over the internet can be guaranteed to be 100% secure.

**Your Choices**

You can access, update, or delete your personal information by logging into your account or contacting us directly. You can also choose not to provide certain information, but this may limit your ability to use certain features of our service.

**Changes to This Privacy Policy**

We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website. Your continued use of our service after any such update constitutes your acceptance of the updated Privacy Policy.

**Contact Us**

If you have any questions about this Privacy Policy, please contact us at [shaharyar.malik2000@gmail.com].
   </Typography>
    </div>
    </section>
  );
}

export default Faqs;
