
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Sample city data - would come from an API in a real application
const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Jaipur", "Pune", "Ahmedabad", "Kochi",
  "New York", "London", "Dubai", "Singapore", "Tokyo"
];

const BookingForm = () => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState<string>("");
  const [toCity, setToCity] = useState<string>("");
  const [journeyDate, setJourneyDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [formErrors, setFormErrors] = useState({
    fromCity: false,
    toCity: false,
    journeyDate: false,
    sameCities: false,
  });

  const handleSearch = () => {
    // Validate form
    const errors = {
      fromCity: !fromCity,
      toCity: !toCity,
      journeyDate: !journeyDate,
      sameCities: fromCity === toCity && fromCity !== "",
    };
    
    setFormErrors(errors);
    
    // If no errors, navigate to search results
    if (!Object.values(errors).some(error => error)) {
      // In a real app, we'd pass these as query params
      navigate("/search-results", { 
        state: { 
          fromCity,
          toCity,
          journeyDate,
          returnDate
        } 
      });
    }
  };

  return (
    <div className="booking-form w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book Your Air Taxi</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">From</label>
          <Select onValueChange={setFromCity}>
            <SelectTrigger className={cn(
              "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700", 
              formErrors.fromCity && "border-red-500"
            )}>
              <SelectValue placeholder="Select departure city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formErrors.fromCity && (
            <p className="mt-1 text-sm text-red-500">Please select a departure city</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">To</label>
          <Select onValueChange={setToCity}>
            <SelectTrigger className={cn(
              "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700", 
              (formErrors.toCity || formErrors.sameCities) && "border-red-500"
            )}>
              <SelectValue placeholder="Select destination city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formErrors.toCity && (
            <p className="mt-1 text-sm text-red-500">Please select a destination city</p>
          )}
          {formErrors.sameCities && (
            <p className="mt-1 text-sm text-red-500">Departure and destination cannot be the same</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Journey Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700",
                  !journeyDate && "text-muted-foreground",
                  formErrors.journeyDate && "border-red-500"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {journeyDate ? format(journeyDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 pointer-events-auto">
              <Calendar
                mode="single"
                selected={journeyDate}
                onSelect={setJourneyDate}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
          {formErrors.journeyDate && (
            <p className="mt-1 text-sm text-red-500">Please select a journey date</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Return Date (Optional)</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 pointer-events-auto">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                initialFocus
                disabled={(date) => date < (journeyDate || new Date())}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="mt-8">
        <Button 
          className="w-full sm:w-auto bg-gradient-to-r from-airavata-purple to-airavata-cyan hover:shadow-lg text-white py-6"
          onClick={handleSearch}
        >
          <Search className="mr-2 h-5 w-5" /> Search Flights
        </Button>
      </div>
    </div>
  );
};

export default BookingForm;
