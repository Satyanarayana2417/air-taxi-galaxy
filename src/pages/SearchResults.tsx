
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlightCard, { FlightDetails } from "@/components/FlightCard";
import PaymentForm from "@/components/PaymentForm";
import PaymentConfirmation from "@/components/PaymentConfirmation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample flight data - in a real app, this would come from an API
const sampleFlights: FlightDetails[] = [
  {
    id: "AT1001",
    fromCity: "Mumbai",
    toCity: "Delhi",
    startTime: "08:00",
    arrivalTime: "10:30",
    date: "June 15, 2024",
    availableSeats: 4,
    taxiNumber: "AT-1001",
    price: 5000,
  },
  {
    id: "AT1002",
    fromCity: "Mumbai",
    toCity: "Delhi",
    startTime: "11:30",
    arrivalTime: "14:00",
    date: "June 15, 2024",
    availableSeats: 6,
    taxiNumber: "AT-1002",
    price: 4500,
  },
  {
    id: "AT1003",
    fromCity: "Mumbai",
    toCity: "Delhi",
    startTime: "15:45",
    arrivalTime: "18:15",
    date: "June 15, 2024",
    availableSeats: 2,
    taxiNumber: "AT-1003",
    price: 6200,
  },
  {
    id: "AT1004",
    fromCity: "Mumbai",
    toCity: "Delhi",
    startTime: "19:30",
    arrivalTime: "22:00",
    date: "June 15, 2024",
    availableSeats: 8,
    taxiNumber: "AT-1004",
    price: 5800,
  },
];

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<FlightDetails | null>(null);
  const [passengerDetails, setPassengerDetails] = useState<{
    adults: number;
    children: number;
    total: number;
  } | null>(null);
  
  // Get search parameters from location state
  const searchParams = location.state || {};
  
  // In a real app, we would use the search parameters to fetch flights from API
  // For now, we'll just use our sample data
  const flights = sampleFlights.map(flight => ({
    ...flight,
    fromCity: searchParams.fromCity || flight.fromCity,
    toCity: searchParams.toCity || flight.toCity,
    date: searchParams.journeyDate ? 
      new Date(searchParams.journeyDate).toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      }) : 
      flight.date
  }));
  
  const handleBooking = (flight: FlightDetails, adultCount: number, childCount: number) => {
    setSelectedFlight(flight);
    setPassengerDetails({
      adults: adultCount,
      children: childCount,
      total: calculateTotal(adultCount, childCount)
    });
    setIsPaymentOpen(true);
  };
  
  const calculateTotal = (adultCount: number, childCount: number) => {
    const adultPrice = adultCount * 2500;
    const childPrice = childCount * 1300;
    const subtotal = adultPrice + childPrice;
    const tax = subtotal * 0.18; // 18% IGST
    return subtotal + tax;
  };
  
  const handlePaymentComplete = () => {
    setIsPaymentOpen(false);
    setIsConfirmationOpen(true);
  };
  
  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false);
    setSelectedFlight(null);
    setPassengerDetails(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Search
          </Button>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Available Air Taxis
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {flights.length} air taxis found from {searchParams.fromCity || "Origin"} to {searchParams.toCity || "Destination"}
              {searchParams.journeyDate && (
                ` on ${new Date(searchParams.journeyDate).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}`
              )}
            </p>
          </div>
          
          <div className="space-y-6">
            {flights.map((flight) => (
              <FlightCard 
                key={flight.id} 
                flight={flight} 
                onBook={handleBooking}
              />
            ))}
          </div>
          
          {flights.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">No Air Taxis Found</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any air taxis matching your search criteria.
              </p>
              <Button onClick={() => navigate(-1)}>
                Modify Search
              </Button>
            </div>
          )}
        </div>
        
        <PaymentForm 
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          flightDetails={selectedFlight}
          adultCount={passengerDetails?.adults || 0}
          childCount={passengerDetails?.children || 0}
          onPaymentComplete={handlePaymentComplete}
        />
        
        <PaymentConfirmation 
          isOpen={isConfirmationOpen}
          onClose={handleConfirmationClose}
          flightDetails={selectedFlight}
          passengerDetails={passengerDetails}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
