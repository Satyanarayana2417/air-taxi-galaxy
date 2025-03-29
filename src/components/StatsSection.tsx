
import { useState, useEffect, useRef } from "react";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem = ({ value, label, suffix = "", duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * value));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, isVisible]);

  return (
    <div className="text-center p-6 futuristic-border glow-effect bg-airavata-blue/40 backdrop-blur-sm">
      <div className="text-4xl md:text-5xl font-bold mb-2 text-airavata-cyan font-orbitron">
        <span ref={countRef}>{count}</span>{suffix}
      </div>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-airavata-blue text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-airavata-cyan animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-airavata-purple animate-pulse" style={{animationDuration: "4s"}}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border border-white animate-pulse" style={{animationDuration: "3s"}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-orbitron">
            <span className="logo-highlight">AIR</span>avata by the Numbers
          </h2>
          <p className="text-xl text-gray-300">
            Leading the future of urban air mobility
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value={50000} label="Passengers Served" suffix="+" />
          <StatItem value={25} label="Major Cities Connected" />
          <StatItem value={99} label="Safety Rating" suffix="%" />
          <StatItem value={85} label="Average Time Saved" suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
