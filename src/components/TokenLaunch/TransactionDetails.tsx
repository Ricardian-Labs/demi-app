import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign } from "lucide-react";

export const TransactionDetails = () => {
  const stats = [
    {
      label: "Total Raised",
      value: "1,234 ETH",
      icon: DollarSign,
      change: "+12.5%"
    },
    {
      label: "Participants",
      value: "856",
      icon: Users,
      change: "+8.2%"
    },
    {
      label: "Current Price",
      value: "0.10 ETH",
      icon: TrendingUp,
      change: "Tier 1"
    }
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-xl font-semibold mb-6">Sale Statistics</h3>

      <div className="space-y-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-lg bg-secondary flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            </div>
            <span className="text-sm text-primary font-medium">{stat.change}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Sale Progress</span>
          <span className="font-medium">42%</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full gradient-primary" style={{ width: "42%" }} />
        </div>
      </div>
    </Card>
  );
};
