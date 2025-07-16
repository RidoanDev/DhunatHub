
import { useNavigate } from 'react-router-dom';

const ServiceGrid = () => {
  const navigate = useNavigate();

  const services = [
    { id: 'doctor', name: 'ডাক্তার', icon: '👨‍⚕️', color: 'bg-blue-50 text-blue-600' },
    { id: 'hospital', name: 'হাসপাতাল', icon: '🏥', color: 'bg-red-50 text-red-600' },
    { id: 'diagnostic', name: 'ডায়াগনস্টিক', icon: '🔬', color: 'bg-purple-50 text-purple-600' },
    { id: 'blood-donation', name: 'রক্তদান', icon: '🩸', color: 'bg-red-50 text-red-600' },
    { id: 'car-rent', name: 'গাড়ি ভাড়া', icon: '🚗', color: 'bg-yellow-50 text-yellow-600' },
    { id: 'police', name: 'থানা', icon: '👮', color: 'bg-blue-50 text-blue-600' },
    { id: 'lawyer', name: 'আইনজীবী', icon: '⚖️', color: 'bg-gray-50 text-gray-600' },
    { id: 'bus-schedule', name: 'বাস সময়সূচী', icon: '🚌', color: 'bg-green-50 text-green-600' },
    { id: 'job', name: 'চাকরি', icon: '💼', color: 'bg-indigo-50 text-indigo-600' },
    { id: 'teacher', name: 'শিক্ষক', icon: '👨‍🏫', color: 'bg-blue-50 text-blue-600' },
    { id: 'entrepreneur', name: 'উদ্যোক্তা', icon: '🚀', color: 'bg-orange-50 text-orange-600' },
    { id: 'training', name: 'প্রশিক্ষণ কেন্দ্র', icon: '🎓', color: 'bg-purple-50 text-purple-600' },
    { id: 'market', name: 'আজকের বাজার', icon: '🛒', color: 'bg-green-50 text-green-600' },
    { id: 'train-schedule', name: 'ট্রেন সময়সূচী', icon: '🚆', color: 'bg-blue-50 text-blue-600' },
    { id: 'house-rent', name: 'বাড়ি ভাড়া', icon: '🏠', color: 'bg-yellow-50 text-yellow-600' },
    { id: 'hotel', name: 'হোটেল', icon: '🏨', color: 'bg-pink-50 text-pink-600' },
    { id: 'student', name: 'শিক্ষার্থী', icon: '👨‍🎓', color: 'bg-indigo-50 text-indigo-600' },
    { id: 'tourist-spot', name: 'দর্শনীয় স্থান', icon: '🏞️', color: 'bg-green-50 text-green-600' },
    { id: 'land', name: 'প্লট বা জমি', icon: '🏡', color: 'bg-brown-50 text-brown-600' },
    { id: 'mechanic', name: 'মেকানিক', icon: '🔧', color: 'bg-gray-50 text-gray-600' },
    { id: 'nursery', name: 'নার্সারি', icon: '🌱', color: 'bg-green-50 text-green-600' },
    { id: 'buy-sell', name: 'কেনাবেচা', icon: '💰', color: 'bg-yellow-50 text-yellow-600' },
    { id: 'electricity', name: 'বিদ্যুৎ অফিস', icon: '⚡', color: 'bg-yellow-50 text-yellow-600' },
    { id: 'education', name: 'শিক্ষা প্রতিষ্ঠান', icon: '🏫', color: 'bg-blue-50 text-blue-600' },
    { id: 'courier', name: 'কুরিয়ার সেবা', icon: '📦', color: 'bg-orange-50 text-orange-600' },
    { id: 'video', name: 'ভিডিও দেখুন', icon: '📹', color: 'bg-red-50 text-red-600' },
    { id: 'beauty-parlor', name: 'বিউটি পার্লার', icon: '💄', color: 'bg-pink-50 text-pink-600' },
    { id: 'website', name: 'ওয়েবসাইট', icon: '🌐', color: 'bg-blue-50 text-blue-600' },
    { id: 'municipality', name: 'পৌরসভা', icon: '🏛️', color: 'bg-gray-50 text-gray-600' },
    { id: 'bank-insurance', name: 'ব্যাংক-বীমা', icon: '🏦', color: 'bg-green-50 text-green-600' },
    { id: 'gas-station', name: 'গ্যাস স্টেশন', icon: '⛽', color: 'bg-red-50 text-red-600' },
    { id: 'newspaper', name: 'সংবাদপত্র', icon: '📰', color: 'bg-gray-50 text-gray-600' },
    { id: 'general-help', name: 'সাধারণ সাহায্য', icon: '🤝', color: 'bg-blue-50 text-blue-600' },
    { id: 'daily-worker', name: 'দিনমজুর', icon: '👷', color: 'bg-orange-50 text-orange-600' },
    { id: 'dua-zikir', name: 'দোয়া-জিকির', icon: '🤲', color: 'bg-green-50 text-green-600' },
    { id: 'religious', name: 'ধর্মীয় উপাসনালয়', icon: '🕌', color: 'bg-green-50 text-green-600' },
  ];

  const handleServiceClick = (serviceId: string) => {
    navigate(`/category/${serviceId}`);
  };

  return (
    <div className="px-2 pb-20">
      <div className="grid grid-cols-4 gap-2">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            className={`${service.color} p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95`}
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="text-lg">{service.icon}</span>
              <span className="font-bengali text-xs font-medium text-center leading-tight">
                {service.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
