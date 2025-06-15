
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Building2, 
  TestTube, 
  Droplets,
  Car,
  Shield,
  Scale,
  Briefcase,
  GraduationCap,
  Users,
  Building,
  ShoppingCart,
  Bus,
  Train,
  Home,
  Hotel,
  UserCheck,
  MapPin,
  Landmark,
  Wrench,
  Baby,
  Package,
  Zap,
  School,
  Truck,
  Video,
  Scissors,
  Globe,
  University,
  CreditCard,
  Fuel,
  Newspaper,
  Heart,
  HardHat,
  BookOpen
} from 'lucide-react';

const CategoryGrid = () => {
  const navigate = useNavigate();

  const categories = [
    // চিকিৎসা ও জরুরি সেবা
    { icon: Stethoscope, title: 'ডাক্তার', path: '/doctor', color: 'bg-red-100 text-red-600' },
    { icon: Building2, title: 'হাসপাতাল', path: '/hospital', color: 'bg-red-100 text-red-600' },
    { icon: TestTube, title: 'ডায়াগনস্টিক', path: '/diagnostic', color: 'bg-red-100 text-red-600' },
    { icon: Droplets, title: 'রক্ত', path: '/blood', color: 'bg-red-100 text-red-600' },

    // পরিবহণ ও নিরাপত্তা
    { icon: Car, title: 'গাড়ি ভাড়া', path: '/vehicle-rent', color: 'bg-blue-100 text-blue-600' },
    { icon: Shield, title: 'থানা', path: '/police-station', color: 'bg-blue-100 text-blue-600' },
    { icon: Scale, title: 'আইনজীবী', path: '/lawyer', color: 'bg-blue-100 text-blue-600' },
    { icon: Bus, title: 'বাস সময়সূচি', path: '/bus-schedule', color: 'bg-blue-100 text-blue-600' },

    // চাকরি ও শিক্ষা
    { icon: Briefcase, title: 'চাকরি', path: '/jobs', color: 'bg-green-100 text-green-600' },
    { icon: GraduationCap, title: 'শিক্ষক', path: '/teacher', color: 'bg-green-100 text-green-600' },
    { icon: Users, title: 'উদ্যোক্তা', path: '/entrepreneur', color: 'bg-green-100 text-green-600' },
    { icon: Building, title: 'প্রশিক্ষণ কেন্দ্র', path: '/training-center', color: 'bg-green-100 text-green-600' },

    // নিত্যপ্রয়োজন ও ভাড়া
    { icon: ShoppingCart, title: 'আজকের বাজার', path: '/todays-market', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Train, title: 'ট্রেন সময়সূচি', path: '/train-schedule', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Home, title: 'বাড়ি ভাড়া', path: '/house-rent', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Hotel, title: 'হোটেল', path: '/hotel', color: 'bg-yellow-100 text-yellow-600' },

    // কেনাকাটা ও রিয়েল এস্টেট
    { icon: UserCheck, title: 'শিক্ষার্থী', path: '/student', color: 'bg-purple-100 text-purple-600' },
    { icon: MapPin, title: 'দর্শনীয় স্থান', path: '/tourist-spots', color: 'bg-purple-100 text-purple-600' },
    { icon: Landmark, title: 'প্লট/জমি', path: '/plot-land', color: 'bg-purple-100 text-purple-600' },
    { icon: Wrench, title: 'মেকানিক', path: '/mechanic', color: 'bg-purple-100 text-purple-600' },

    // পারিবারিক ও ইউটিলিটি
    { icon: Baby, title: 'নার্সারি', path: '/nursery', color: 'bg-pink-100 text-pink-600' },
    { icon: Package, title: 'কেনা-বেচা', path: '/buy-sell', color: 'bg-pink-100 text-pink-600' },
    { icon: Zap, title: 'বিদ্যুৎ অফিস', path: '/electric-office', color: 'bg-pink-100 text-pink-600' },
    { icon: School, title: 'শিক্ষা প্রতিষ্ঠান', path: '/educational-institute', color: 'bg-pink-100 text-pink-600' },

    // অনলাইন ও মিডিয়া
    { icon: Truck, title: 'কুরিয়ার সেবা', path: '/courier-service', color: 'bg-indigo-100 text-indigo-600' },
    { icon: Video, title: 'ভিডিও দেখুন', path: '/watch-video', color: 'bg-indigo-100 text-indigo-600' },
    { icon: Scissors, title: 'বিউটি পার্লার', path: '/beauty-parlor', color: 'bg-indigo-100 text-indigo-600' },
    { icon: Globe, title: 'ওয়েবসাইট', path: '/website', color: 'bg-indigo-100 text-indigo-600' },

    // সরকারি ও আর্থিক
    { icon: University, title: 'পৌরসভা', path: '/municipality', color: 'bg-teal-100 text-teal-600' },
    { icon: CreditCard, title: 'ব্যাংক-বীমা', path: '/bank-insurance', color: 'bg-teal-100 text-teal-600' },
    { icon: Fuel, title: 'গ্যাস স্টেশন', path: '/gas-station', color: 'bg-teal-100 text-teal-600' },
    { icon: Newspaper, title: 'সংবাদপত্র', path: '/newspaper', color: 'bg-teal-100 text-teal-600' },

    // কমিউনিটি ও ধর্মীয়
    { icon: Heart, title: 'সাধারণ সাহায্য', path: '/general-help', color: 'bg-orange-100 text-orange-600' },
    { icon: HardHat, title: 'দিনমজুর', path: '/day-laborer', color: 'bg-orange-100 text-orange-600' },
    { icon: BookOpen, title: 'দোয়া-জিকির', path: '/dua-zikir', color: 'bg-orange-100 text-orange-600' }
  ];

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-4 gap-2">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div
              key={index}
              onClick={() => navigate(category.path)}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center mb-2 mx-auto`}>
                <IconComponent size={16} />
              </div>
              <h3 className="text-[10px] font-medium text-gray-900 text-center leading-tight">
                {category.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
