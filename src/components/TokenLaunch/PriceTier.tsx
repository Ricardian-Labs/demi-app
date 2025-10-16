import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface PriceTierProps {
  tier: number;
  price: string;
  timeRemaining: string;
}

export const PriceTier = ({ tier, price, timeRemaining }: PriceTierProps) => {
  const tiers = [
    { number: 1, price: "0.10", discount: "50% OFF" },
    { number: 2, price: "0.15", discount: "25% OFF" },
    { number: 3, price: "0.18", discount: "10% OFF" },
    { number: 4, price: "0.20", discount: "" },
    { number: 5, price: "0.22", discount: "" },
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Price Tier {tier}</h3>
        <div className="flex items-center gap-2 text-primary">
          <Clock className="w-4 h-4" />
          <span className="font-mono font-semibold">{timeRemaining}</span>
        </div>
      </div>

      <div className="space-y-3">
        {tiers.map((t) => (
          <div
            key={t.number}
            className={`p-3 rounded-lg transition-colors ${
              t.number === tier
                ? "bg-primary/20 border-2 border-primary"
                : "bg-secondary border border-border"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-semibold">Tier {t.number}</span>
                {t.discount && (
                  <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary font-medium">
                    {t.discount}
                  </span>
                )}
              </div>
              <span className="font-mono font-semibold">{t.price} ETH</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-secondary">
        <p className="text-sm text-muted-foreground">
          Price increases when timer expires or tier sells out
        </p>
      </div>
    </Card>
  );
};
