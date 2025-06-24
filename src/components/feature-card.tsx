import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  color?: "primary" | "info" | "success" | "warning" | "error";
}

export function FeatureCard({ icon: Icon, title, children, color = "info" }: FeatureCardProps) {
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

  return (
    <Card
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placeholder={""}
      className="card-material group hover:scale-105 transition-all duration-500 border-0 overflow-hidden"  onResize={undefined} onResizeCapture={undefined}    >
      <CardBody
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder={""}
        className="p-8" onResize={undefined} onResizeCapture={undefined}      >
        {/* Icon Container */}
        <div className="relative mb-6">
          {/* Background decoration */}
          <div className={`absolute inset-0 ${currentColor.light} rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500`}></div>

          {/* Icon */}
          <div className={`relative w-16 h-16 ${currentColor.gradient} rounded-2xl flex items-center justify-center ${currentColor.shadow} group-hover:shadow-2xl transition-all duration-500`}>
            <Icon className="h-8 w-8 text-white" />
          </div>

          {/* Floating dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-200 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-info-200 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <Typography
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          placeholder={""}
          variant="h5"
          className="mb-4 font-bold text-dark-500 group-hover:text-primary-600 transition-colors duration-300"
        >
          {title}
        </Typography>

        <Typography
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          placeholder={""}
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
        >
          {children}
        </Typography>

        {/* Hover effect decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-info-100 rounded-full opacity-0 group-hover:opacity-20 transform translate-x-10 -translate-y-10 transition-all duration-500"></div>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
