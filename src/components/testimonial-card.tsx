import { StarIcon } from "@heroicons/react/24/solid";
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
  rating?: number;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placeholder={""}
      className="card-material group hover:scale-105 transition-all duration-500 border-0 overflow-hidden h-full"
    >
      <CardBody
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder={""}
        className="p-2 flex flex-col h-full"
      >
        {/* Quote Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary-50 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
          <div className="relative w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-colored-primary group-hover:shadow-2xl transition-all duration-500">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Feedback */}
        <Typography
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant="paragraph"
          placeholder={""}
          className="mb-6 font-normal text-gray-600 leading-relaxed flex-grow italic group-hover:text-gray-700 transition-colors duration-300"
        >
          "{feedback}"
        </Typography>

        {/* Rating */}
        <div className="flex justify-center mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-warning-400' : 'text-gray-300'
                  } transition-colors duration-300`}
              />
            ))}
          </div>
        </div>

        {/* Client Info */}
        <div className="text-center">
          {/* Avatar or Initial */}
          <div className="mb-4 flex justify-center">
            {img ? (
              <Avatar
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder={""}
                src={img}
                alt={client}
                size="lg"
                className="border-2 border-primary-100 shadow-lg"
              />
            ) : (
              <div className="w-12 h-12 bg-gradient-info rounded-full flex items-center justify-center text-white font-bold text-lg shadow-colored-info">
                {client.charAt(0)}
              </div>
            )}
          </div>

          <Typography
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant="h6"
            className="font-bold text-dark-500 group-hover:text-primary-600 transition-colors duration-300"
          >
            {client}
          </Typography>

          {title && (
            <Typography
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="small"
              className="font-medium text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
            >
              {title}
            </Typography>
          )}
        </div>

        {/* Hover effect decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-info-100 rounded-full opacity-0 group-hover:opacity-20 transform translate-x-10 -translate-y-10 transition-all duration-500"></div>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;