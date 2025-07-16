
import { useState } from 'react';
import { Menu, Bell, Code, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: '🏠', label: 'হোম', path: '/' },
    { icon: '🔔', label: 'বিজ্ঞপ্তি', path: '/notifications' },
    { icon: '📱', label: 'আমার অ্যাপ', path: '/my-apps' },
    { icon: '📞', label: 'আমাদের সম্পর্কে', path: '/about' },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleCodeClick = () => {
    window.open('https://ridoan-zisan.netlify.app', '_blank');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="px-3 py-2 flex items-center justify-between">
          {/* DhunatHub Logo */}
          <div className="flex items-center">
            <div className="text-lg font-bold font-inter">
              <span className="text-black">Dhunat</span>
              <span className="bg-orange-500 text-black px-1 rounded font-bold">Hub</span>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-1">
            <button
              onClick={handleCodeClick}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              title="ডেভেলপার"
            >
              <Code className="h-4 w-4 text-gray-700" />
            </button>
            
            <button
              onClick={() => navigate('/notifications')}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors relative"
              title="বিজ্ঞপ্তি"
            >
              <Bell className="h-4 w-4 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
                3
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              title="মেনু"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 text-gray-700" />
              ) : (
                <Menu className="h-4 w-4 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sliding Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed right-0 top-10 w-48 bg-white rounded-l-xl shadow-2xl animate-slide-in">
            <div className="p-3">
              <h3 className="text-base font-semibold text-gray-800 font-bengali mb-3">মেনু</h3>
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleMenuClick(item.path)}
                    className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors text-left"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-bengali text-gray-700 text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavigation;
