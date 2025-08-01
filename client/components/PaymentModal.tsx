import { useState } from "react";
import { X, CreditCard, Building, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    price: string;
    image: string;
    location: string;
  };
}

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  amount: string;
  popular?: boolean;
}

const paymentOptions: PaymentOption[] = [
  {
    id: "booking",
    name: "Booking Amount",
    description: "Secure your property with a booking amount",
    amount: "$50,000",
    popular: true,
  },
  {
    id: "token",
    name: "Token Amount",
    description: "Initial token to start the process",
    amount: "$10,000",
  },
  {
    id: "full",
    name: "Full Payment",
    description: "Complete property purchase",
    amount: "$2,450,000",
  },
];

export default function PaymentModal({ isOpen, onClose, property }: PaymentModalProps) {
  const [selectedOption, setSelectedOption] = useState("booking");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const selectedPaymentOption = paymentOptions.find(option => option.id === selectedOption);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);
    
    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      
      if (!scriptLoaded) {
        alert("Failed to load payment gateway. Please try again.");
        setIsProcessing(false);
        return;
      }

      // Convert amount to paise (Razorpay expects amount in smallest currency unit)
      const amountInPaise = parseFloat(selectedPaymentOption?.amount.replace(/[$,]/g, "") || "0") * 100;

      const options = {
        key: "rzp_test_9999999999999999", // Replace with your Razorpay key
        amount: amountInPaise,
        currency: "USD", // Change to INR if needed
        name: "LuxuryRealty",
        description: `Payment for ${property.title}`,
        image: "/placeholder.svg", // Add your logo
        order_id: `order_${Date.now()}`, // In production, generate this from backend
        handler: function (response: any) {
          // Payment successful
          console.log("Payment successful:", response);
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          setIsProcessing(false);
          onClose();
        },
        prefill: {
          name: customerInfo.name,
          email: customerInfo.email,
          contact: customerInfo.phone,
        },
        notes: {
          property_id: property.id,
          property_title: property.title,
          payment_type: selectedOption,
        },
        theme: {
          color: "#0EA5E9", // Your brand color
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold">Complete Your Payment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            disabled={isProcessing}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Property Details & Payment Options */}
            <div className="space-y-6">
              {/* Property Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Property Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{property.title}</h3>
                      <p className="text-sm text-muted-foreground">{property.location}</p>
                      <p className="text-lg font-bold text-primary mt-1">{property.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {paymentOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`relative p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedOption === option.id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedOption(option.id)}
                    >
                      {option.popular && (
                        <Badge className="absolute -top-2 left-4 bg-primary">
                          Most Popular
                        </Badge>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{option.name}</h4>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                        <div className="text-xl font-bold text-primary">{option.amount}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Shield className="w-8 h-8 text-green-500" />
                    <div>
                      <h4 className="font-semibold">Secure Payment</h4>
                      <p className="text-sm text-muted-foreground">
                        Your payment is secured with 256-bit SSL encryption
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Customer Information & Payment */}
            <div className="space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="customer-name">Full Name *</Label>
                    <Input
                      id="customer-name"
                      value={customerInfo.name}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, name: e.target.value })
                      }
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="customer-email">Email Address *</Label>
                    <Input
                      id="customer-email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="customer-phone">Phone Number *</Label>
                    <Input
                      id="customer-phone"
                      value={customerInfo.phone}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, phone: e.target.value })
                      }
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="customer-address">Address</Label>
                    <Input
                      id="customer-address"
                      value={customerInfo.address}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, address: e.target.value })
                      }
                      placeholder="Enter your address"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Payment Type:</span>
                      <span className="font-semibold">{selectedPaymentOption?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-semibold">{selectedPaymentOption?.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee:</span>
                      <span className="font-semibold">$0</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary">{selectedPaymentOption?.amount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Button */}
              <Button
                className="w-full py-6 text-lg"
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Pay {selectedPaymentOption?.amount}
                  </>
                )}
              </Button>

              {/* Payment Methods */}
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Secure payment powered by</p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src="https://razorpay.com/assets/razorpay-logo.svg"
                    alt="Razorpay"
                    className="h-6"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  We accept all major credit cards, debit cards, net banking, and UPI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
