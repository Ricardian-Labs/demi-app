import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

export default function DexPlus() {
  const [displayText, setDisplayText] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  
  const fullText = "Dex+ is coming soon. Advanced trading features for professional traders.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        
        if (soundEnabled && audioContext) {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.value = 800;
          gainNode.gain.value = 0.1;
          
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.05);
        }
        
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [soundEnabled, audioContext]);

  const toggleSound = () => {
    if (!audioContext) {
      setAudioContext(new AudioContext());
    }
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleSound}
              className="rounded-full"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </Button>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">Dex+</h1>
            <div className="min-h-[120px] flex items-center justify-center">
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {[
              { title: "Advanced Charts", desc: "Professional trading tools" },
              { title: "Limit Orders", desc: "Set your desired price" },
              { title: "Analytics", desc: "Deep market insights" }
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
