import React from "react";

import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      placeholder={""}
      color="transparent" shadow={false}>
      <CardBody onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        placeholder={""}
        className="grid px-0">
        <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          placeholder={""}
          variant="h2" color="current" className="mb-2">
          {title}
        </Typography>
        <Typography onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          placeholder={""}
          className=" font-normal">{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;