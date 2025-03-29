
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Services = () => {
  const heroVideoSrc = "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="AIRavata Services"
          subtitle="Experience the next generation of urban mobility"
          videoSrc={heroVideoSrc}
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Our Air Taxi Services
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                Tailored solutions for all your air transportation needs
              </p>
            </div>
            
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="personal">Personal Travel</TabsTrigger>
                <TabsTrigger value="business">Business Travel</TabsTrigger>
                <TabsTrigger value="tourism">Tourism & Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Personal Air Transport
                    </h3>
                    <p className="text-lg mb-4">
                      Skip the traffic and get to your destination faster with our personal air taxi services. 
                      Perfect for daily commutes, airport transfers, or special occasions.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Door-to-door service with convenient pickup locations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Flexible scheduling to fit your lifestyle</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Comfortable cabins with panoramic views</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Subscription plans for regular commuters</span>
                      </li>
                    </ul>
                    <Link to="/booking">
                      <Button className="bg-airavata-purple hover:bg-airavata-purple/90 text-white">
                        Book Personal Flight
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151" 
                      alt="Personal Air Travel" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Personal Air Taxi Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">Single Journey</h4>
                        <p className="text-3xl font-bold text-airavata-purple mb-4">₹2,500<span className="text-sm text-gray-600 dark:text-gray-400">/person</span></p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>One-way journey</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>15kg luggage allowance</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Basic amenities</span>
                          </li>
                        </ul>
                        <Link to="/booking" className="block w-full">
                          <Button variant="outline" className="w-full">Select</Button>
                        </Link>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-airavata-purple">
                      <CardContent className="p-6">
                        <div className="absolute top-0 right-0 bg-airavata-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                          POPULAR
                        </div>
                        <h4 className="font-bold text-lg mb-2">Return Journey</h4>
                        <p className="text-3xl font-bold text-airavata-purple mb-4">₹4,500<span className="text-sm text-gray-600 dark:text-gray-400">/person</span></p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Round trip</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>20kg luggage allowance</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Priority boarding</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Complimentary refreshments</span>
                          </li>
                        </ul>
                        <Link to="/booking" className="block w-full">
                          <Button className="w-full bg-airavata-purple hover:bg-airavata-purple/90 text-white">Select</Button>
                        </Link>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">Monthly Pass</h4>
                        <p className="text-3xl font-bold text-airavata-purple mb-4">₹40,000<span className="text-sm text-gray-600 dark:text-gray-400">/month</span></p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>20 one-way journeys</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>25kg luggage allowance</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>VIP boarding</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Flexible scheduling</span>
                          </li>
                        </ul>
                        <Link to="/booking" className="block w-full">
                          <Button variant="outline" className="w-full">Select</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="business" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 relative h-80 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc" 
                      alt="Business Air Travel" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4">
                      Business Air Solutions
                    </h3>
                    <p className="text-lg mb-4">
                      Transform your business travel with our premium air taxi services designed specifically for 
                      corporate clients. Save time, increase productivity, and arrive refreshed.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Corporate accounts with consolidated billing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Executive cabin with workspace</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Priority scheduling for urgent meetings</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                    <Link to="/contact">
                      <Button className="bg-airavata-purple hover:bg-airavata-purple/90 text-white">
                        Contact Business Team
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Business Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">Small Business</h4>
                        <p className="text-3xl font-bold text-airavata-purple mb-4">₹75,000<span className="text-sm text-gray-600 dark:text-gray-400">/month</span></p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>30 one-way journeys</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Up to 5 employees</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Basic scheduling</span>
                          </li>
                        </ul>
                        <Link to="/contact" className="block w-full">
                          <Button variant="outline" className="w-full">Inquire</Button>
                        </Link>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-airavata-purple">
                      <CardContent className="p-6">
                        <div className="absolute top-0 right-0 bg-airavata-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                          POPULAR
                        </div>
                        <h4 className="font-bold text-lg mb-2">Medium Business</h4>
                        <p className="text-3xl font-bold text-airavata-purple mb-4">₹150,000<span className="text-sm text-gray-600 dark:text-gray-400">/month</span></p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>75 one-way journeys</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Up to 15 employees</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Advanced scheduling</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Account manager</span>
                          </li>
                        </ul>
                        <Link to="/contact" className="block w-full">
                          <Button className="w-full bg-airavata-purple hover:bg-airavata-purple/90 text-white">Inquire</Button>
                        </Link>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">Enterprise</h4>
                        <p className="text-3xl font-bold text-airavata-purple mb-4">Custom</p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Unlimited journeys</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Unlimited employees</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Premium scheduling</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Dedicated team</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Custom integration</span>
                          </li>
                        </ul>
                        <Link to="/contact" className="block w-full">
                          <Button variant="outline" className="w-full">Contact Sales</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tourism" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Tourism & Special Events
                    </h3>
                    <p className="text-lg mb-4">
                      Experience destinations from a whole new perspective with our tourism services, or make your 
                      special event truly memorable with a custom air taxi experience.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Scenic tours of landmarks and natural wonders</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Wedding transportation with custom branding</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Corporate event and VIP transfers</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Photography and filming packages</span>
                      </li>
                    </ul>
                    <Link to="/contact">
                      <Button className="bg-airavata-purple hover:bg-airavata-purple/90 text-white">
                        Request Custom Package
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                      alt="Tourism Air Experience" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Landmark Tours</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Experience iconic landmarks from the sky with our guided aerial tours, providing 
                        unique perspectives and photo opportunities.
                      </p>
                      <p className="font-semibold text-lg mb-4">Starting at ₹8,000 per person</p>
                      <Link to="/contact" className="block w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-pink-400 to-red-500"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Wedding Packages</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Make your special day even more memorable with luxury air transportation for the 
                        wedding party and spectacular photo opportunities.
                      </p>
                      <p className="font-semibold text-lg mb-4">Custom Packages Available</p>
                      <Link to="/contact" className="block w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Impress clients and reward employees with exclusive air taxi services for 
                        corporate events, retreats, and team-building activities.
                      </p>
                      <p className="font-semibold text-lg mb-4">Custom Quotes Based on Requirements</p>
                      <Link to="/contact" className="block w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
