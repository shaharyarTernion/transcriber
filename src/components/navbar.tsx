import {
  Button,
  Navbar as MTNavbar,
  Typography
} from "@material-tailwind/react";
import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        placeholder={""}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium text-gray-700 hover:text-primary-500 transition-colors duration-300 cursor-pointer"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      placeholder={""}
      fullWidth
      shadow={isScrolling}
      blurred={isScrolling}
      color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 border-0 transition-all duration-500 ${isScrolling
        ? "bg-white/95 backdrop-blur-md shadow-material border-b border-gray-200/20"
        : "bg-transparent"
        }`}
    >
      <div className="container-custom flex items-center justify-between py-2">
        {/* Logo */}
        <Typography
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          placeholder={""}
          as="a"
          href="/"
          variant="h6"
          className={`font-bold text-xl transition-colors duration-300 ${isScrolling
            ? "text-dark-500 hover:text-primary-500"
            : "text-white hover:text-primary-200"
            }`}
        >
          <span className={isScrolling ? "text-gradient-primary" : "text-white"}>
            Videos
          </span>{" "}
          Transcription
        </Typography>

        {/* Desktop Actions */}
        <div className="hidden gap-4 lg:flex lg:items-center">
          <Typography
            as="a"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            href="https://app.videostranscription.com"
            placeholder={""}
            className="inline-block"
          >
            <Button
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              placeholder={""}
              size="sm"
              className={`font-semibold transition-all duration-300 ${isScrolling
                ? "btn-gradient-primary"
                : "bg-white text-dark-500 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                }`}
            >
              Get Started
            </Button>
          </Typography>
        </div>

      </div>

    </MTNavbar>
  );
}

export default Navbar;
