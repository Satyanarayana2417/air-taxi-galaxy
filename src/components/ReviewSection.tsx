
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  avatar?: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Arjun Patel",
    location: "Mumbai to Delhi",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "AIRavata completely transformed my commute between Mumbai and Delhi. What used to be a 2-hour flight plus all the airport hassle is now a smooth 2.5-hour direct air taxi ride. The views are incredible and the service is exceptional!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Bangalore to Chennai",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "As a business traveler who frequently commutes between tech hubs, AIRavata has been a game-changer. The booking process is seamless, the air taxis are comfortable, and the time saved is invaluable for my productivity.",
    rating: 5
  },
  {
    id: 3,
    name: "Rajiv Mehta",
    location: "Delhi to Jaipur",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    text: "I was skeptical about air taxis at first, but after my first ride with AIRavata, I'm a convert. The safety features are impressive, the staff is professional, and the entire experience feels like the future of travel has arrived.",
    rating: 4
  },
  {
    id: 4,
    name: "Ananya Reddy",
    location: "Hyderabad to Bangalore",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Taking an AIRavata taxi for my weekly meetings in Bangalore has saved me countless hours. The aerial view of the cities is breathtaking, and the convenience of direct transportation without traffic is truly liberating.",
    rating: 5
  }
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-airavata-blue to-airavata-blue/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300">
            Hear from people who have experienced the future of urban mobility
          </p>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-0 md:left-10 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={prevReview}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Card className="max-w-4xl bg-white/5 backdrop-blur-sm border-none shadow-xl">
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="h-10 w-10 text-airavata-cyan opacity-50 rotate-180" />
                </div>
                
                <p className="text-lg md:text-xl text-center mb-8">
                  {reviews[currentIndex].text}
                </p>
                
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src={reviews[currentIndex].avatar} alt={reviews[currentIndex].name} />
                    <AvatarFallback>{reviews[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center">
                    <h4 className="font-semibold text-xl">{reviews[currentIndex].name}</h4>
                    <p className="text-gray-300">{reviews[currentIndex].location}</p>
                    <div className="flex items-center justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-2xl ${i < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-500'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 md:right-10 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={nextReview}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
