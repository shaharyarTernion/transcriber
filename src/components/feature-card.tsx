import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";


interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card
      placeholder={""}
      color="transparent" shadow={false}>
      <CardBody
        placeholder={""}
        className="grid justify-start">
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-[#2C86EB] p-2.5 text-left text-white">
          <Icon className="h-6 w-6" />
        </div>
        <Typography
          placeholder={""}
          variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography
          placeholder={""}
          className=" font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
