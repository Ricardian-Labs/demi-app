import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";

export const PaymentInstructions = () => {
  const steps = [
    "Connect your wallet using the button in the header",
    "Enter the amount of ETH you want to spend",
    "Review the transaction details and fees",
    "Click 'Purchase Tokens' to complete the transaction",
    "Confirm the transaction in your wallet"
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-xl font-semibold mb-6">How to Participate</h3>

      <div className="space-y-3 mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-white">{index + 1}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            Tokens will be distributed immediately after purchase confirmation
          </p>
        </div>

        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            Make sure you have enough ETH to cover network fees
          </p>
        </div>
      </div>
    </Card>
  );
};
