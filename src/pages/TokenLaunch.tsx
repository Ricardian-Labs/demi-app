import { useState, useEffect } from "react";
import { ExchangeInterface } from "@/components/TokenLaunch/ExchangeInterface";
import { PriceTier } from "@/components/TokenLaunch/PriceTier";
import { TransactionDetails } from "@/components/TokenLaunch/TransactionDetails";
import { PaymentInstructions } from "@/components/TokenLaunch/PaymentInstructions";

export default function TokenLaunch() {
  const [currentTier, setCurrentTier] = useState(1);
  const [pricePerToken, setPricePerToken] = useState("0.10");
  const [timeRemaining, setTimeRemaining] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          setCurrentTier((tier) => Math.min(tier + 1, 5));
          return 3600;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Demi Token Launch</h1>
            <p className="text-xl text-muted-foreground">
              Participate in the exclusive token sale
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <PriceTier
                tier={currentTier}
                price={pricePerToken}
                timeRemaining={formatTime(timeRemaining)}
              />
              <ExchangeInterface pricePerToken={pricePerToken} />
            </div>

            <div className="space-y-6">
              <TransactionDetails />
              <PaymentInstructions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
