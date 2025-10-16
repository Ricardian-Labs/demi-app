import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (address: string) => void;
}

const wallets = [
  {
    name: "MetaMask",
    icon: "🦊",
    available: typeof window !== 'undefined' && (window as any).ethereum?.isMetaMask,
    type: "evm"
  },
  {
    name: "WalletConnect",
    icon: "🔗",
    available: true,
    type: "evm"
  },
  {
    name: "Coinbase Wallet",
    icon: "💼",
    available: typeof window !== 'undefined' && (window as any).ethereum?.isCoinbaseWallet,
    type: "evm"
  },
  {
    name: "Polkadot.js",
    icon: "⚫",
    available: false,
    type: "polkadot"
  }
];

export const WalletModal = ({ isOpen, onClose, onConnect }: WalletModalProps) => {
  const handleConnect = async (walletName: string, available: boolean) => {
    if (!available) {
      toast.error(`${walletName} is not installed`);
      return;
    }

    try {
      if (walletName === "MetaMask" && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts'
        });
        
        if (accounts[0]) {
          onConnect(accounts[0]);
          toast.success(`Connected to ${walletName}`);
          onClose();
        }
      } else if (walletName === "WalletConnect") {
        const mockAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb";
        onConnect(mockAddress);
        toast.success(`Connected to ${walletName}`);
        onClose();
      } else {
        const mockAddress = "0x" + Math.random().toString(16).substr(2, 40);
        onConnect(mockAddress);
        toast.success(`Connected to ${walletName}`);
        onClose();
      }
    } catch (error) {
      toast.error("Failed to connect wallet");
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Connect Wallet</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => handleConnect(wallet.name, wallet.available)}
              className="w-full p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{wallet.icon}</span>
                <div className="text-left">
                  <p className="font-medium">{wallet.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{wallet.type}</p>
                </div>
              </div>
              
              {!wallet.available ? (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span>Install</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              ) : (
                <Wallet className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
