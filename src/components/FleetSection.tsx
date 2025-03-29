
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Battery, Clock, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface AirTaxi {
  id: string;
  name: string;
  image: string;
  caption: string;
  features: {
    range: string;
    speed: string;
    capacity: number;
    chargingTime: string;
  };
  description: string;
}

const airTaxis: AirTaxi[] = [
  {
    id: "vertijet",
    name: "VertiJet X1",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: "Our flagship model with cutting-edge technology",
    features: {
      range: "300 km",
      speed: "350 km/h",
      capacity: 4,
      chargingTime: "35 min"
    },
    description: "The VertiJet X1 is our premium air taxi, offering unparalleled speed and comfort. With state-of-the-art electric propulsion, it delivers zero-emission transportation with minimal noise. Perfect for intercity travel, the X1 features a spacious cabin and panoramic windows for an exceptional flying experience."
  },
  {
    id: "skycommuter",
    name: "SkyCommuter S2",
    image: "https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: "Efficient urban mobility solution",
    features: {
      range: "180 km",
      speed: "250 km/h",
      capacity: 3,
      chargingTime: "25 min"
    },
    description: "The SkyCommuter S2 is designed specifically for daily urban commutes. Its compact design allows for landing in smaller spaces while maintaining exceptional performance. With rapid charging capabilities and efficient energy usage, the S2 is the preferred choice for professionals seeking reliable air mobility within metropolitan areas."
  },
  {
    id: "aerovip",
    name: "AeroVIP Elite",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    caption: "Luxury air transportation experience",
    features: {
      range: "280 km",
      speed: "320 km/h",
      capacity: 2,
      chargingTime: "30 min"
    },
    description: "The AeroVIP Elite offers an exclusive flying experience with premium amenities. Its luxurious interior features handcrafted seats, ambient lighting, and advanced climate control. The noise-cancellation technology creates a serene cabin environment, while the intelligent autopilot system ensures a smooth journey. The ultimate choice for executive travel."
  }
];

const FleetSection = () => {
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Our <span className="logo-highlight">AIR</span> Taxi Fleet
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Experience the next generation of urban mobility
          </p>
        </div>
        
        <div ref={tabsRef}>
          <Tabs defaultValue={airTaxis[0].id} className="w-full">
            <TabsList className="w-full justify-center mb-8 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              {airTaxis.map((taxi) => (
                <TabsTrigger 
                  key={taxi.id} 
                  value={taxi.id}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-airavata-blue"
                >
                  {taxi.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {airTaxis.map((taxi) => (
              <TabsContent key={taxi.id} value={taxi.id} className="mt-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden relative">
                      <img 
                        src={taxi.image} 
                        alt={taxi.name} 
                        className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-xl font-semibold">{taxi.name}</h3>
                        <p className="text-white/80">{taxi.caption}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-4">{taxi.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          {taxi.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-airavata-purple/10 flex items-center justify-center mr-3">
                              <Battery className="text-airavata-purple" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Range</p>
                              <p className="font-medium">{taxi.features.range}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-airavata-cyan/10 flex items-center justify-center mr-3">
                              <Zap className="text-airavata-cyan" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Top Speed</p>
                              <p className="font-medium">{taxi.features.speed}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-airavata-purple/10 flex items-center justify-center mr-3">
                              <Users className="text-airavata-purple" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Capacity</p>
                              <p className="font-medium">{taxi.features.capacity} passengers</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-airavata-cyan/10 flex items-center justify-center mr-3">
                              <Clock className="text-airavata-cyan" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Charging Time</p>
                              <p className="font-medium">{taxi.features.chargingTime}</p>
                            </div>
                          </div>
                        </div>
                        
                        <Link to="/booking">
                          <Button className="w-full bg-gradient-to-r from-airavata-purple to-airavata-cyan hover:shadow-lg">
                            Book This Air Taxi <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
