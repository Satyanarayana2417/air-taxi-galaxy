
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Clock, Calendar, Users } from "lucide-react";

export interface FlightDetails {
  id: string;
  fromCity: string;
  toCity: string;
  startTime: string;
  arrivalTime: string;
  date: string;
  availableSeats: number;
  taxiNumber: string;
  price: number;
}

interface FlightCardProps {
  flight: FlightDetails;
  onBook: (flight: FlightDetails, adultCount: number, childCount: number) => void;
}

const FlightCard = ({ flight, onBook }: FlightCardProps) => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  
  const handleIncrement = (type: 'adult' | 'child') => {
    if (type === 'adult') {
      setAdultCount(prev => Math.min(prev + 1, flight.availableSeats));
    } else {
      const maxChildren = Math.max(0, flight.availableSeats - adultCount);
      setChildCount(prev => Math.min(prev + 1, maxChildren));
    }
  };
  
  const handleDecrement = (type: 'adult' | 'child') => {
    if (type === 'adult') {
      setAdultCount(prev => Math.max(prev - 1, 1)); // At least one adult required
    } else {
      setChildCount(prev => Math.max(prev - 1, 0));
    }
  };
  
  const calculateTotal = () => {
    const adultPrice = adultCount * 2500;
    const childPrice = childCount * 1300;
    const subtotal = adultPrice + childPrice;
    const tax = subtotal * 0.18; // 18% IGST
    return {
      adultPrice,
      childPrice,
      subtotal,
      tax,
      total: subtotal + tax
    };
  };

  const { adultPrice, childPrice, subtotal, tax, total } = calculateTotal();

  return (
    <div className="bg-white dark:bg-airavata-blue/70 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <div className="text-xl font-semibold">{flight.fromCity}</div>
            <ArrowRight className="mx-2 text-airavata-cyan" />
            <div className="text-xl font-semibold">{flight.toCity}</div>
          </div>
          
          <div className="text-2xl font-bold text-airavata-purple">
            ₹{flight.price.toLocaleString()}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm">
              {flight.startTime} - {flight.arrivalTime}
            </span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm">{flight.date}</span>
          </div>
          
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm">{flight.availableSeats} seats available</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Taxi Number</div>
            <div className="font-medium">{flight.taxiNumber}</div>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-airavata-purple hover:bg-airavata-purple/90 text-white">
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Book Your Air Taxi</DialogTitle>
                <DialogDescription>
                  {flight.fromCity} to {flight.toCity} on {flight.date}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Adults</span>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => handleDecrement('adult')}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                        disabled={adultCount <= 1}
                      >
                        -
                      </button>
                      <span>{adultCount}</span>
                      <button 
                        onClick={() => handleIncrement('adult')}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                        disabled={adultCount + childCount >= flight.availableSeats}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Children</span>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => handleDecrement('child')}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                        disabled={childCount <= 0}
                      >
                        -
                      </button>
                      <span>{childCount}</span>
                      <button 
                        onClick={() => handleIncrement('child')}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                        disabled={adultCount + childCount >= flight.availableSeats}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between">
                    <span>Adult Tickets (₹2,500 × {adultCount})</span>
                    <span>₹{adultPrice.toLocaleString()}</span>
                  </div>
                  {childCount > 0 && (
                    <div className="flex justify-between">
                      <span>Child Tickets (₹1,300 × {childCount})</span>
                      <span>₹{childPrice.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IGST (18%)</span>
                    <span>₹{tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between pt-2 font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" className="mr-2">
                  Cancel
                </Button>
                <Button 
                  type="button" 
                  className="bg-airavata-purple hover:bg-airavata-purple/90 text-white"
                  onClick={() => onBook(flight, adultCount, childCount)}
                >
                  Proceed to Payment
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
