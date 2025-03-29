
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlightDetails } from "./FlightCard";

interface PaymentFormProps {
  isOpen: boolean;
  onClose: () => void;
  flightDetails: FlightDetails | null;
  adultCount: number;
  childCount: number;
  onPaymentComplete: () => void;
}

const PaymentForm = ({ 
  isOpen, 
  onClose,
  flightDetails,
  adultCount,
  childCount,
  onPaymentComplete
}: PaymentFormProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const calculateTotal = () => {
    if (!flightDetails) return 0;
    
    const adultPrice = adultCount * 2500;
    const childPrice = childCount * 1300;
    const subtotal = adultPrice + childPrice;
    
    // Use the tax rate from the flight details, default to 18% (India)
    const taxRate = flightDetails.taxRate || 18;
    const tax = subtotal * (taxRate / 100);
    
    return subtotal + tax;
  };
  
  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
    }, 2000);
  };
  
  if (!flightDetails) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
          <DialogDescription>
            Pay securely using one of our payment methods.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <Tabs defaultValue="upi">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upi">UPI</TabsTrigger>
              <TabsTrigger value="card">Card</TabsTrigger>
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upi" className="space-y-4 pt-4">
              <div className="flex justify-center space-x-4">
                <button className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="w-12 h-12 object-contain" />
                </button>
                <button className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="w-12 h-12 object-contain" />
                </button>
                <button className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="w-12 h-12 object-contain" />
                </button>
                <button className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/PhonePe_Logo.svg" alt="PhonePe" className="w-12 h-12 object-contain" />
                </button>
              </div>
              
              <div className="py-4">
                <h3 className="text-sm font-medium mb-2">Enter UPI ID</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="username@upi" 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-airavata-purple focus:border-airavata-purple"
                  />
                  <Button 
                    className="rounded-l-none bg-gray-100 hover:bg-gray-200 text-gray-800 border border-l-0 border-gray-300"
                  >
                    Verify
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="card" className="space-y-4 pt-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <input 
                    type="text" 
                    placeholder="Card Number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-airavata-purple focus:border-airavata-purple"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-airavata-purple focus:border-airavata-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <input 
                      type="text" 
                      placeholder="CVV" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-airavata-purple focus:border-airavata-purple"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Name on Card</label>
                  <input 
                    type="text" 
                    placeholder="Name on Card" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-airavata-purple focus:border-airavata-purple"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="wallet" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="h-8 mb-2" />
                  <span className="text-sm">Paytm</span>
                </button>
                <button className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/PhonePe_Logo.svg" alt="PhonePe" className="h-8 mb-2" />
                  <span className="text-sm">PhonePe</span>
                </button>
                <button className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-8 mb-2" />
                  <span className="text-sm">Google Pay</span>
                </button>
                <button className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Amazon_Pay_logo.svg" alt="Amazon Pay" className="h-8 mb-2" />
                  <span className="text-sm">Amazon Pay</span>
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between font-medium">
            <span>Total Amount</span>
            <span>₹{calculateTotal().toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
          </div>
          {flightDetails.isInternational && (
            <div className="text-xs text-gray-500 mt-1">
              Includes {flightDetails.taxRate || 18}% tax ({flightDetails.toCity} local tax rate)
            </div>
          )}
        </div>
        
        <DialogFooter className="mt-4">
          <Button type="button" variant="outline" onClick={onClose} disabled={isProcessing}>
            Cancel
          </Button>
          <Button 
            type="button" 
            className="bg-airavata-purple hover:bg-airavata-purple/90 text-white"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              `Pay ₹${calculateTotal().toLocaleString(undefined, { maximumFractionDigits: 2 })}`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentForm;
