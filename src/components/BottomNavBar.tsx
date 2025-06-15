
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Bell, Info } from 'lucide-react';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', name: 'হোম', icon: Home, path: '/' },
    { id: 'contact', name: 'আমার অ্যাপ', icon: User, path: '/contact' }, // "Mobile" এর বদলে User
    { id: 'notifications', name: 'বিজ্ঞপ্তি', icon: Bell, path: '/notifications' },
    { id: 'about', name: 'সম্পর্কে', icon: Info, path: '/about' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center transition-colors ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <IconComponent size={20} />
              <span className="text-xs mt-1">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
