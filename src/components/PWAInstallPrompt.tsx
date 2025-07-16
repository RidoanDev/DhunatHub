
import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleCancel = () => {
    setShowPrompt(false);
    setDeferredPrompt(null);
  };

  return (
    <Dialog open={showPrompt} onOpenChange={setShowPrompt}>
      <DialogContent className="sm:max-w-md mx-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-center font-bengali">
            <div className="flex flex-col items-center space-y-4">
              <img 
                src="https://i.postimg.cc/prRszN0b/Dhunat-Hub-20250615-173308-0000.png" 
                alt="DhunatHub Logo" 
                className="w-16 h-16 rounded-lg"
              />
              <h2 className="text-xl font-bold text-gray-800">DhunatHub অ্যাপ ইনস্টল করুন</h2>
              <p className="text-sm text-gray-600 text-center">
                আপনার ডিভাইসে DhunatHub অ্যাপ ইনস্টল করুন এবং অফলাইনে ব্যবহার করুন
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col space-y-3 mt-4">
          <Button 
            onClick={handleInstall}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bengali"
          >
            <Download className="mr-2 h-4 w-4" />
            ইনস্টল করুন
          </Button>
          
          <Button 
            onClick={handleCancel}
            variant="outline"
            className="w-full font-bengali"
          >
            <X className="mr-2 h-4 w-4" />
            বাতিল
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PWAInstallPrompt;
