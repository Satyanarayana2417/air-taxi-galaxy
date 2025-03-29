
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

const Future = () => {
  const heroVideoSrc = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-lights-and-flying-ships-11738-large.mp4";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Future of AIRavata"
          subtitle="Building a world of urban air mobility"
          videoSrc={heroVideoSrc}
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Our Vision for 2050
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                By 2050, every house should have a flying taxi landing pad
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 overflow-hidden border-0 shadow-lg">
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                    alt="Future Vision" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Revolutionizing Urban Mobility</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Our long-term vision at <span className="logo-highlight">AIR</span>avata is to fundamentally transform how people move 
                    within and between cities. We envision a future where air taxis are as common as cars today, 
                    where every residential and commercial building is equipped with landing pads, and where 
                    the sky is filled with safe, efficient air traffic.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    This vision requires not only technological innovation but also changes in urban planning, 
                    regulatory frameworks, and public acceptance. We're working on all these fronts to make our 
                    vision a reality, partnering with cities, governments, and other stakeholders to build the 
                    infrastructure and systems needed for widespread urban air mobility.
                  </p>
                </CardContent>
              </Card>
              
              <div className="space-y-8">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-32 bg-gradient-to-r from-airavata-purple to-airavata-cyan"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Our 2030 Goals</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• Expand to 50+ major cities globally</li>
                      <li>• Achieve 100% renewable energy fleet</li>
                      <li>• Develop autonomous navigation system</li>
                      <li>• Reduce costs by 50% from current levels</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Our 2040 Goals</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• Expand to 200+ cities worldwide</li>
                      <li>• Full autonomous operation capability</li>
                      <li>• Integrate with all major transport systems</li>
                      <li>• Achieve price parity with ground taxis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-airavata-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Future Objectives
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Key initiatives driving our long-term vision
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="h-16 w-16 rounded-full bg-airavata-cyan/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-airavata-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Expansion</h3>
                <p className="text-gray-300 mb-4">
                  We're rapidly expanding our operations to major cities around the world, bringing our air taxi 
                  services to urban centers that need new mobility solutions.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    Asia-Pacific expansion by 2025
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    European network by 2026
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    North American rollout by 2027
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="h-16 w-16 rounded-full bg-airavata-cyan/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-airavata-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Based Navigation</h3>
                <p className="text-gray-300 mb-4">
                  Our research teams are developing cutting-edge AI systems that will enable safer, more efficient 
                  flights and eventually lead to fully autonomous air taxis.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    Advanced collision avoidance
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    Predictive route optimization
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    Weather adaptation capabilities
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="h-16 w-16 rounded-full bg-airavata-cyan/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-airavata-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Eco-Friendly Flying Taxis</h3>
                <p className="text-gray-300 mb-4">
                  We're committed to developing zero-emission vehicles powered by renewable energy, 
                  minimizing our environmental impact while maximizing efficiency.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    Electric propulsion systems
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    Solar-augmented charging
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-airavata-cyan rounded-full mr-2"></span>
                    Sustainable materials construction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Infrastructure Development
                </h2>
                <p className="text-lg mb-4">
                  A key part of our vision is developing the necessary infrastructure to support 
                  widespread urban air mobility. This includes:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-airavata-purple/10 flex items-center justify-center mt-1 mr-3">
                      <span className="text-airavata-purple text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Vertiports and Landing Pads</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Developing a network of vertiports in strategic locations across cities,
                        as well as residential and commercial landing pads.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-airavata-purple/10 flex items-center justify-center mt-1 mr-3">
                      <span className="text-airavata-purple text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Charging Infrastructure</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Building a comprehensive network of fast-charging stations to keep our 
                        electric air taxis operational with minimal downtime.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-airavata-purple/10 flex items-center justify-center mt-1 mr-3">
                      <span className="text-airavata-purple text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Air Traffic Management</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Working with regulators to develop systems for managing increased 
                        air traffic in urban environments safely and efficiently.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
                  alt="Future Infrastructure" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-semibold">
                    Our vision of integrated urban air mobility infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Future;
