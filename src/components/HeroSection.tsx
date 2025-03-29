
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
      {/* Enhanced gradient overlay for depth and futuristic feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-airavata-blue/60 via-airavata-blue/50 to-airavata-blue/80 z-[1]"></div>
      
      {/* Video background */}
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Animated logo element */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] animate-float">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-airavata-purple to-airavata-cyan opacity-80 flex items-center justify-center">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-airavata-blue/90 flex items-center justify-center text-white">
            <div className="text-center">
              <span className="logo-highlight text-3xl md:text-4xl font-orbitron">AIR</span>
              <span className="text-2xl md:text-3xl font-orbitron">avata</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="z-10 text-white text-center max-w-4xl px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-orbitron leading-tight">
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
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        {buttonText && (
          <Link to={buttonLink}>
            <Button className="bg-gradient-to-r from-airavata-purple to-airavata-cyan hover:shadow-lg px-8 py-6 text-lg transform transition-all hover:scale-105 hover:shadow-airavata-cyan/20 font-orbitron">
              {buttonText}
            </Button>
          </Link>
        )}
        
        {/* Decorative elements */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-12 h-1 bg-airavata-cyan rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-airavata-purple rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-4 h-1 bg-airavata-cyan rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
