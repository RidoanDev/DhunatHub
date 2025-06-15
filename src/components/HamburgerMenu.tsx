import React, { useState } from 'react';
import { Menu, X, Home, Bell, Info, Mail, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'হোম', path: '/' },
    // যোগাযোগ অপশনটি রিমুভ করা হয়েছে
    { icon: Bell, label: 'বিজ্ঞপ্তি', path: '/notifications' },
    { icon: Info, label: 'সম্পর্কে', path: '/about' },
    { icon: Mail, label: 'আমার অ্যাপ', path: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleDeveloperClick = () => {
    window.open('https://ridoan-zisan.netlify.app', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div 
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900">মেনু</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-1">
                {/* বাকি আইটেম */}
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={index}>
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors text-left"
                      >
                        <IconComponent size={16} className="text-gray-600" />
                        <span className="text-sm text-gray-900">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
                {/* ডেভেলপার অপশনটি সবশেষে */}
                <li>
                  <button
                    onClick={handleDeveloperClick}
                    className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors text-left"
                  >
                    <Code size={16} className="text-blue-600" />
                    <span className="text-sm text-blue-700 font-semibold">Developer</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
