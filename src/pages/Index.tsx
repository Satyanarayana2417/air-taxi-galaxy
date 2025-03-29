import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ReviewSection from "@/components/ReviewSection";
import StatsSection from "@/components/StatsSection";
import FleetSection from "@/components/FleetSection";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const heroVideoSrc = "/public/videos/flying-taxi.mp4";  // Make sure this file exists in the public folder
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Fly Beyond Boundaries with AIRavata!"
          subtitle="The Future of Urban Air Mobility"
          videoSrc={heroVideoSrc}
        />
        
        {/* Booking Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BookingForm />
          </div>
        </section>
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Fleet Section */}
        <FleetSection />
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Why Choose <span className="logo-highlight">AIR</span>avata?
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                Experience the benefits of urban air mobility
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-indigo-600"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Zero Traffic Congestion</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Skip the gridlock and fly directly to your destination, saving precious time and reducing stress.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Fastest Travel Mode</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our air taxis travel at optimal speeds with direct routes, getting you there in a fraction of the time.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-airavata-purple to-airavata-cyan"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Seamless Tourism Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enjoy breathtaking aerial views and convenient transportation to tourist destinations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Reviews Section */}
        <ReviewSection />
        
        {/* Vision Section */}
        <section className="py-16 bg-airavata-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-bold mb-6">
                  Our Vision for the Future
                </h2>
                <p className="text-xl mb-4">
                  By 2050, our mission is to have every home equipped with a flying taxi landing pad, revolutionizing how we think about transportation.
                </p>
                <p className="mb-6">
                  With AIRavata, we're building a future where urban mobility is not constrained by roads or traffic, but instead takes to the skies for efficient, eco-friendly transportation.
                </p>
              </div>
              <div className="md:w-1/2 bg-airavata-purple/20 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Future Objectives</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-airavata-cyan/20 flex items-center justify-center mt-1 mr-3">
                      <span className="text-airavata-cyan text-sm">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Expansion</h4>
                      <p className="text-gray-300">Bringing our air taxi network to major cities worldwide</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-airavata-cyan/20 flex items-center justify-center mt-1 mr-3">
                      <span className="text-airavata-cyan text-sm">02</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">AI-Based Navigation</h4>
                      <p className="text-gray-300">Advanced AI systems for safer, more efficient flights</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-airavata-cyan/20 flex items-center justify-center mt-1 mr-3">
                      <span className="text-airavata-cyan text-sm">03</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Eco-Friendly Flying Taxis</h4>
                      <p className="text-gray-300">Developing zero-emission vehicles powered by renewable energy</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
