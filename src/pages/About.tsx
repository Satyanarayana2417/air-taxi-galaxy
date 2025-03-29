
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const About = () => {
  const heroVideoSrc = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-lights-and-flying-ships-11738-large.mp4";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="About AIRavata"
          subtitle="Pioneers in urban air mobility"
          videoSrc={heroVideoSrc}
          buttonText="Our Vision"
          buttonLink="/future"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-lg mb-4">
                  Founded in 2023, <span className="logo-highlight">AIR</span>avata was born from a vision to transform urban transportation. 
                  Our founders, a team of aerospace engineers and urban mobility experts, recognized the growing challenges of ground transportation 
                  in rapidly expanding cities across India and globally.
                </p>
                <p className="text-lg mb-4">
                  After years of research and development, we launched our first fleet of air taxis in 2024, 
                  starting with routes between major metropolitan areas in India. Our success was immediate, 
                  as commuters embraced the freedom and efficiency of soaring above congested roads.
                </p>
                <p className="text-lg">
                  Today, <span className="logo-highlight">AIR</span>avata continues to expand, bringing revolutionary transportation 
                  solutions to more cities while constantly upgrading our fleet with the latest in 
                  eco-friendly propulsion and autonomous navigation technologies.
                </p>
              </div>
              
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc" 
                  alt="AIRavata Air Taxi" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-semibold">
                    Our state-of-the-art air taxi fleet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Our Vision & Mission
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                Shaping the future of urban mobility
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-airavata-blue/70 p-8 rounded-xl shadow-lg">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-airavata-purple to-airavata-cyan flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  To revolutionize urban mobility with air taxis, transforming how people move within and between cities.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  By 2050, our vision is that every house should have access to a flying taxi landing pad, 
                  making air travel as common and accessible as ground transportation is today.
                </p>
              </div>
              
              <div className="bg-white dark:bg-airavata-blue/70 p-8 rounded-xl shadow-lg">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-airavata-purple to-airavata-cyan flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  To provide safe, efficient, and eco-friendly air transportation that saves time, 
                  reduces traffic congestion, and creates a more connected world.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We are committed to developing cutting-edge aerial vehicles, securing the necessary 
                  infrastructure, and working with regulatory bodies to make urban air mobility accessible to all.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Our Values
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                The principles that guide us
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-24 w-24 mx-auto bg-airavata-purple/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-airavata-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Safety is our top priority in every aspect of our operations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-24 w-24 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Committed to eco-friendly technologies and reducing our carbon footprint.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-24 w-24 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Continuously pushing the boundaries of technology and transportation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-24 w-24 mx-auto bg-airavata-cyan/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-airavata-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Making air mobility accessible and affordable for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
