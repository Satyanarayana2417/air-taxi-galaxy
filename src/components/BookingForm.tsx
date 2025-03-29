
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

// Enhanced city data with international destinations
const cities = [
  // Indian Cities
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Jaipur", "Pune", "Ahmedabad", "Kochi",
  // International Cities
  "New York", "London", "Dubai", "Singapore", "Tokyo",
  "Paris", "Sydney", "Hong Kong", "Berlin", "Toronto",
  "Bangkok", "Amsterdam", "Rome", "Barcelona", "Cairo"
];

// Map to categorize cities by country
const cityToCountry: Record<string, string> = {
  // Indian Cities
  "Mumbai": "India", "Delhi": "India", "Bangalore": "India",
  "Hyderabad": "India", "Chennai": "India", "Kolkata": "India",
  "Jaipur": "India", "Pune": "India", "Ahmedabad": "India", "Kochi": "India",
  // International Cities
  "New York": "USA", "London": "UK", "Dubai": "UAE", 
  "Singapore": "Singapore", "Tokyo": "Japan", "Paris": "France",
  "Sydney": "Australia", "Hong Kong": "Hong Kong", "Berlin": "Germany",
  "Toronto": "Canada", "Bangkok": "Thailand", "Amsterdam": "Netherlands",
  "Rome": "Italy", "Barcelona": "Spain", "Cairo": "Egypt"
};

// Tax rates by country (percentage)
const countryTaxRates: Record<string, number> = {
  "India": 18, // IGST 18%
  "USA": 8.5,
  "UK": 20, // VAT
  "UAE": 5, // VAT
  "Singapore": 8, // GST
  "Japan": 10,
  "France": 20, // VAT
  "Australia": 10, // GST
  "Hong Kong": 0,
  "Germany": 19, // VAT
  "Canada": 13, // HST
  "Thailand": 7, // VAT
  "Netherlands": 21, // VAT
  "Italy": 22, // VAT
  "Spain": 21, // VAT
  "Egypt": 14, // VAT
};

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
      // Determine which tax rate to use based on destination country
      const fromCountry = cityToCountry[fromCity] || "India";
      const toCountry = cityToCountry[toCity] || "India";
      const isInternational = fromCountry !== toCountry;
      const taxRate = isInternational ? countryTaxRates[toCountry] : countryTaxRates["India"];

      navigate("/search-results", { 
        state: { 
          fromCity,
          toCity,
          journeyDate,
          returnDate,
          taxRate,
          isInternational
        } 
      });
    }
  };

  // Group cities by country for the dropdown
  const groupedCities: Record<string, string[]> = {};
  cities.forEach(city => {
    const country = cityToCountry[city] || "Other";
    if (!groupedCities[country]) {
      groupedCities[country] = [];
    }
    groupedCities[country].push(city);
  });

  // Sort countries
  const countries = Object.keys(groupedCities).sort((a, b) => 
    a === "India" ? -1 : b === "India" ? 1 : a.localeCompare(b)
  );

  return (
    <div className="booking-form w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 font-orbitron">Book Your Air Taxi</h2>
      
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
              {countries.map(country => (
                <div key={country}>
                  <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-50 dark:bg-gray-800">
                    {country}
                  </h3>
                  {groupedCities[country].map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </div>
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
              {countries.map(country => (
                <div key={country}>
                  <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-50 dark:bg-gray-800">
                    {country}
                  </h3>
                  {groupedCities[country].map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </div>
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
          className="w-full sm:w-auto bg-gradient-to-r from-airavata-purple to-airavata-cyan hover:shadow-lg text-white py-6 font-orbitron"
          onClick={handleSearch}
        >
          <Search className="mr-2 h-5 w-5" /> Search Flights
        </Button>
      </div>
      
      {/* International travel indicator */}
      {fromCity && toCity && cityToCountry[fromCity] !== cityToCountry[toCity] && (
        <div className="mt-4 p-3 bg-airavata-purple/10 border border-airavata-purple/30 rounded-md text-sm">
          <p>
            <span className="font-medium">International journey:</span> {cityToCountry[fromCity]} to {cityToCountry[toCity]}. 
            {countryTaxRates[cityToCountry[toCity]] > 0 && 
              ` Applicable tax rate: ${countryTaxRates[cityToCountry[toCity]]}%.`
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
