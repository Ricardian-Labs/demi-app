import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WalletModal } from "@/components/WalletModal";
import { Wallet } from "lucide-react";

export const Header = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);

  const handleWhitepaperClick = () => {
    const link = document.createElement('a');
    link.href = '/demi_whitepaper.pdf';
    link.download = 'demi_whitepaper.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-semibold">Demi</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Launch
            </Link>
            <Link to="/dex-plus" className="text-foreground hover:text-primary transition-colors">
              Dex+
            </Link>
            <button 
              onClick={handleWhitepaperClick}
              className="text-foreground hover:text-primary transition-colors"
            >
              Whitepaper
            </button>
          </nav>

          <Button
            onClick={() => setIsWalletModalOpen(true)}
            variant={connectedAddress ? "outline" : "default"}
            className="gap-2"
          >
            <Wallet className="w-4 h-4" />
            {connectedAddress ? truncateAddress(connectedAddress) : "Connect wallet"}
          </Button>
        </div>
      </header>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onConnect={setConnectedAddress}
      />
    </>
  );
};
