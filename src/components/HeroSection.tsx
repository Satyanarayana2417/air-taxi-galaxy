
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  videoSrc,
  buttonText = "Book Now",
  buttonLink = "/booking"
}: HeroSectionProps) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-airavata-blue/40 to-airavata-blue/70 z-[1]"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="z-10 text-white text-center max-w-4xl px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          {title.split("AIR").map((part, index, array) => (
            index === 0 ? (
              <span key={index}>
                {part}<span className="logo-highlight">AIR</span>
              </span>
            ) : (
              index === array.length - 1 ? (
                <span key={index}>{part}</span>
              ) : (
                <span key={index}>
                  {part}<span className="logo-highlight">AIR</span>
                </span>
              )
            )
          ))}
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-8">
          {subtitle}
        </p>
        
        {buttonText && (
          <Link to={buttonLink}>
            <Button className="bg-gradient-to-r from-airavata-purple to-airavata-cyan hover:shadow-lg px-8 py-6 text-lg">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
