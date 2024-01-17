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
    <Card
      placeholder={""}
      shadow={false} className="items-center text-center">
      <CardBody
        placeholder={""}
      >
        {/* <Avatar
          placeholder={""}
          src={img} className="mb-3" alt={client} size="lg" /> */}
        <Typography
          placeholder={""}
          variant="h6" color="blue-gray">
          {client}
        </Typography>
        <Typography
          placeholder={""}
          variant="small" className="mb-3 font-medium !text-gray-700">
          {title}
        </Typography>
        <Typography
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