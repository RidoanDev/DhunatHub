
import React from 'react';
import { Code, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import LogoText from './LogoText';

const Header = () => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  // ওয়েবসাইটের লিংক এখানে সেট করুন
  const websiteUrl = 'https://ridoan-zisan.netlify.app';

  const handleCodeIconClick = () => {
    window.open(websiteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <LogoText sizeClass="text-lg" fontWeight="font-bold" />
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-xs text-gray-600 hidden sm:block">স্থানীয় সেবা</div>
          
          {/* সার্চ বাটনটি ছিল, এখন কোড আইকন */}
          <button
            onClick={handleCodeIconClick}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="ওয়েবসাইটে যান"
          >
            <Code size={20} className="text-gray-700" />
          </button>

          <button
            onClick={handleNotificationClick}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors relative"
          >
            <Bell size={18} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
