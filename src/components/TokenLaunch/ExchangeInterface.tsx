import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDownUp } from "lucide-react";
import { toast } from "sonner";

interface ExchangeInterfaceProps {
  pricePerToken: string;
}

export const ExchangeInterface = ({ pricePerToken }: ExchangeInterfaceProps) => {
  const [ethAmount, setEthAmount] = useState("");
  const [demiAmount, setDemiAmount] = useState("");

  const handleEthChange = (value: string) => {
    setEthAmount(value);
    if (value && !isNaN(Number(value))) {
      const tokens = (Number(value) / Number(pricePerToken)).toFixed(2);
      setDemiAmount(tokens);
    } else {
      setDemiAmount("");
    }
  };

  const handleDemiChange = (value: string) => {
    setDemiAmount(value);
    if (value && !isNaN(Number(value))) {
      const eth = (Number(value) * Number(pricePerToken)).toFixed(4);
      setEthAmount(eth);
    } else {
      setEthAmount("");
    }
  };

  const handlePurchase = () => {
    if (!ethAmount || !demiAmount) {
      toast.error("Please enter an amount");
      return;
    }
    toast.success(`Purchasing ${demiAmount} DEMI tokens for ${ethAmount} ETH`);
  };

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-xl font-semibold mb-6">Exchange</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">You pay</label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="0.0"
              value={ethAmount}
              onChange={(e) => handleEthChange(e.target.value)}
              className="flex-1 bg-secondary border-border text-lg"
            />
            <div className="px-4 py-2 bg-secondary rounded-lg flex items-center gap-2 min-w-[100px]">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs">Ξ</span>
              </div>
              <span className="font-medium">ETH</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <ArrowDownUp className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">You receive</label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="0.0"
              value={demiAmount}
              onChange={(e) => handleDemiChange(e.target.value)}
              className="flex-1 bg-secondary border-border text-lg"
            />
            <div className="px-4 py-2 bg-secondary rounded-lg flex items-center gap-2 min-w-[100px]">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-white">D</span>
              </div>
              <span className="font-medium">DEMI</span>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button
            onClick={handlePurchase}
            className="w-full gradient-primary hover:gradient-hover text-white font-semibold h-12 text-lg"
          >
            Purchase Tokens
          </Button>
        </div>

        <div className="pt-2 space-y-1 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Price per token</span>
            <span>{pricePerToken} ETH</span>
          </div>
          <div className="flex justify-between">
            <span>Network fee</span>
            <span>~0.002 ETH</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
