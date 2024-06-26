import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      placeholder={""}
      shadow={false} className="items-center text-center">
      <CardBody onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        placeholder={""}
      >
        {/* <Avatar
          placeholder={""}
          src={img} className="mb-3" alt={client} size="lg" /> */}
        <Typography
          placeholder={""} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          variant="h6" color="blue-gray">
          {client}
        </Typography>
        <Typography
          placeholder={""} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          variant="small" className="mb-3 font-medium !text-gray-700">
          {title}
        </Typography>
        <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          variant="paragraph"
          placeholder={""}
          className="mb-5 font-normal !text-gray-500"
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;