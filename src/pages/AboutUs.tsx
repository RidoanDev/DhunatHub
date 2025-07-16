
import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';
import { Globe, Users, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Target className="h-5 w-5" />,
      title: 'আমাদের লক্ষ্য',
      description: 'ধুনট উপজেলার সকল সেবা এক প্ল্যাটফর্মে'
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'স্থানীয় দল',
      description: 'প্রযুক্তিবিদ ও উদ্যোক্তাদের দল'
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: 'আমাদের প্রতিশ্রুতি',
      description: 'সঠিক ও আপডেট তথ্য প্রদান'
    }
  ];

  const services = [
    '৩৬টি সেবা ক্যাটাগরি',
    'তাৎক্ষণিক যোগাযোগ',
    'গুগল ম্যাপ ইন্টিগ্রেশন',
    'সার্চ ও ফিল্টার',
    'বিনামূল্যে ব্যবহার',
    'নিয়মিত আপডেট'
  ];

  const dhunatInfo = [
    {
      title: 'আয়তন',
      value: '২৯৬.৪০ বর্গ কিমি',
      icon: '📏'
    },
    {
      title: 'জনসংখ্যা',
      value: 'প্রায় ৩.৫ লক্ষ',
      icon: '👥'
    },
    {
      title: 'ইউনিয়ন',
      value: '১৩টি ইউনিয়ন',
      icon: '🏘️'
    },
    {
      title: 'উপজেলা সদর',
      value: 'ধুনট',
      icon: '🏛️'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold font-inter mb-1">
              <span className="text-black">Dhunat</span>
              <span className="bg-orange-500 text-black px-1 rounded font-bold">Hub</span>
            </div>
            <p className="text-green-100 font-bengali text-sm">ধুনট উপজেলার ডিজিটাল সেবা</p>
          </div>
        </div>

        {/* About DhunatHub */}
        <div className="px-4 py-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-4">
            <h2 className="text-base font-bold text-gray-800 font-bengali mb-3">
              DhunatHub সম্পর্কে
            </h2>
            <p className="text-sm text-gray-600 font-bengali leading-relaxed mb-3">
              DhunatHub হলো ধুনট উপজেলার প্রথম ডিজিটাল সেবা ডিরেক্টরি। আমরা স্থানীয় মানুষের 
              প্রয়োজনীয় সকল সেবা একটি প্ল্যাটফর্মে নিয়ে এসেছি।
            </p>
            
            <h3 className="text-sm font-semibold text-gray-800 font-bengali mb-2">
              অ্যাপের সুবিধাসমূহ:
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-xs text-gray-600 font-bengali">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dhunat Information */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-800 font-bengali mb-3">
              ধুনট উপজেলার তথ্য
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {dhunatInfo.map((info, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-lg mb-1">{info.icon}</div>
                  <div className="text-xs font-semibold text-green-700 font-bengali">{info.title}</div>
                  <div className="text-xs text-gray-600 font-bengali">{info.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-800 font-bengali mb-3">
              ধুনট উপজেলার ম্যাপ
            </h3>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115827.84842987394!2d89.36742!3d24.7594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5e8d5c3b3b0d%3A0x1234567890123456!2sDhunat%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890123"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-800 font-bengali mb-3">
              আমাদের বিশেষত্ব
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-green-600 flex-shrink-0 mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-bengali text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-bengali">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Credit */}
          <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg text-center">
            <p className="text-xs text-gray-600 font-bengali mb-1">
              অ্যাপটি ডিজাইন ও ডেভেলপ করেছেন
            </p>
            <p className="font-bold text-purple-700 text-sm">Md Ridoan Mahmud Zisan</p>
            <button
              onClick={() => window.open('https://ridoan-zisan.netlify.app', '_blank')}
              className="mt-2 text-xs text-purple-600 hover:text-purple-800 font-bengali underline"
            >
              ডেভেলপারের ওয়েবসাইট
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default AboutUs;
