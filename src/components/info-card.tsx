import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ElementType;
  color?: "primary" | "info" | "success" | "warning" | "error";
  children?: React.ReactNode;
}

export function InfoCard({
  title,
  description,
  icon: Icon,
  color = "info",
  children
}: InfoCardProps) {
  const colorClasses = {
    primary: {
      gradient: "bg-gradient-primary",
      light: "bg-primary-50",
      text: "text-primary-600",
      shadow: "shadow-colored-primary",
    },
    info: {
      gradient: "bg-gradient-info",
      light: "bg-info-50",
      text: "text-info-600",
      shadow: "shadow-colored-info",
    },
    success: {
      gradient: "bg-gradient-success",
      light: "bg-success-50",
      text: "text-success-600",
      shadow: "shadow-colored-success",
    },
    warning: {
      gradient: "bg-gradient-warning",
      light: "bg-warning-50",
      text: "text-warning-600",
      shadow: "shadow-colored-warning",
    },
    error: {
      gradient: "bg-gradient-error",
      light: "bg-error-50",
      text: "text-error-600",
      shadow: "shadow-colored-error",
    },
  };

  const currentColor = colorClasses[color];
  const content = children || description;

  return (
    <Card
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placeholder={""}
      className="card-material group hover:scale-105 transition-all duration-500 border-0 h-full"
    >
      <CardBody
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder={""}
        className="p-6 text-center h-full flex flex-col justify-center"
      >
        {/* Icon */}
        {Icon && (
          <div className="relative mb-4 flex justify-center">
            <div className={`absolute inset-0 ${currentColor.light} rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500`}></div>
            <div className={`relative w-12 h-12 ${currentColor.gradient} rounded-2xl flex items-center justify-center ${currentColor.shadow} group-hover:shadow-2xl transition-all duration-500`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            {/* Floating dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-300 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}

        {/* Title */}
        <Typography
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder={""}
          variant="h3"
          className="mb-2 font-bold text-dark-500 group-hover:text-primary-600 transition-colors duration-300"
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder={""}
          variant="small"
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-medium"
        >
          {content}
        </Typography>

        {/* Hover effect decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-info-100 rounded-full opacity-0 group-hover:opacity-20 transform translate-x-8 -translate-y-8 transition-all duration-500"></div>
      </CardBody>
    </Card>
  );
}

export default InfoCard;