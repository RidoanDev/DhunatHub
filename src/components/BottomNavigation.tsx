
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Smartphone, Bell, Info } from 'lucide-react';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'হোম', path: '/' },
    { icon: Smartphone, label: 'অ্যাপ', path: '/my-apps' },
    { icon: Bell, label: 'বিজ্ঞপ্তি', path: '/notifications' },
    { icon: Info, label: 'সম্পর্কে', path: '/about' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-bottom z-40">
      <div className="grid grid-cols-4 h-14">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center space-y-0.5 transition-colors ${
                isActive 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span className="text-xs font-bengali font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
