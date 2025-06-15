
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import LogoText from './LogoText';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallBanner = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    const handleAppInstalled = () => {
      setInstallPrompt(null);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);
  
  const handleInstallClick = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
        console.log('User accepted the install prompt.');
    } else {
        console.log('User dismissed the install prompt');
    }
    setInstallPrompt(null);
    setIsBannerVisible(false);
  };

  const handleDismiss = () => {
    setIsBannerVisible(false);
  };

  if (!installPrompt || !isBannerVisible) {
    return null;
  }

  // Minimalistic Centered Popup (mobile-first)
  return (
    <div
      className="
        fixed inset-0 z-[1100] flex items-center justify-center
        bg-black/40
      "
      style={{ pointerEvents: 'auto' }}
    >
      <div
        className="
          bg-white rounded-lg shadow-2xl p-5 w-[90vw] max-w-xs mx-auto
          flex flex-col items-center gap-3
          animate-in zoom-in-95
        "
        style={{ minWidth: 220 }}
      >
        <img 
          src="https://i.postimg.cc/prRszN0b/Dhunat-Hub-20250615-173308-0000.png" 
          alt="DhunatHub App Icon" 
          className="w-14 h-14 rounded-lg mx-auto mb-1"
          style={{ boxShadow: '0 0 8px #FFD18044' }}
        />
        <LogoText sizeClass="text-base" fontWeight="font-bold" className="mb-1" />
        <p className="text-xs text-muted-foreground text-center mb-1 max-w-[200px]">DhunatHub অ্যাপটি হোম-স্ক্রীনে যুক্ত করুন।</p>
        <div className="flex gap-2 w-full mt-1">
          <Button
            onClick={handleInstallClick}
            size="sm"
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 text-sm"
          >
            ইন্সটল
          </Button>
          <button
            onClick={handleDismiss}
            aria-label="Cancel"
            className="flex items-center justify-center px-2 h-9 rounded-full text-muted-foreground hover:bg-secondary transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallBanner;
