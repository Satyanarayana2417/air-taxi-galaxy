
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Download } from "lucide-react";
import { FlightDetails } from "./FlightCard";

interface PaymentConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  flightDetails: FlightDetails | null;
  passengerDetails: {
    adults: number;
    children: number;
    total: number;
  } | null;
}

const PaymentConfirmation = ({ 
  isOpen, 
  onClose, 
  flightDetails, 
  passengerDetails 
}: PaymentConfirmationProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate PDF generation delay
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, this would trigger a PDF download
      console.log("Downloading PDF ticket...");
    }, 1500);
  };
  
  if (!flightDetails || !passengerDetails) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Check className="text-green-600" />
            </div>
            Payment Successful
          </DialogTitle>
          <DialogDescription>
            Your ticket has been booked successfully
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-4">
          <div className="border-b pb-4 mb-4">
            <h3 className="font-semibold text-lg">Ticket Details</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">From</p>
                <p className="font-medium">{flightDetails.fromCity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">To</p>
                <p className="font-medium">{flightDetails.toCity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{flightDetails.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">{flightDetails.startTime} - {flightDetails.arrivalTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">AIR Taxi Number</p>
                <p className="font-medium">{flightDetails.taxiNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Booking ID</p>
                <p className="font-medium">AIR{Math.floor(100000 + Math.random() * 900000)}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Passenger Summary</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Adults</span>
                <span>{passengerDetails.adults}</span>
              </div>
              {passengerDetails.children > 0 && (
                <div className="flex justify-between">
                  <span>Children</span>
                  <span>{passengerDetails.children}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold pt-2">
                <span>Total Paid</span>
                <span>₹{passengerDetails.total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button 
            variant="default" 
            className="bg-airavata-purple hover:bg-airavata-purple/90 text-white"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </span>
            ) : (
              <span className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Ticket
              </span>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentConfirmation;
