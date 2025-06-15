import React from 'react';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { MapPin, Phone, Mail, Star, Clock, Shield, Users, Code2 } from 'lucide-react';
import WeatherDateInfo from '../components/WeatherDateInfo';
import LogoText from '../components/LogoText';

// Pornhub-style orange
const PORNHUB_ORANGE = "#ff9900";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-3 py-4 pb-20 max-w-md mx-auto">
        {/* Logo Section */}
        <div className="text-center mb-5">
          <div className="flex justify-center mb-2">
            <img 
              src="https://i.postimg.cc/prRszN0b/Dhunat-Hub-20250615-173308-0000.png" 
              alt="DhunatHub Logo" 
              className="w-24 h-24 rounded-full shadow-lg object-cover"
            />
          </div>
          {/* Update: Use LogoText */}
          <LogoText className="mb-1" />
          <p className="text-xs text-gray-600">ধুনটের স্থানীয় সেবার ডিজিটাল প্ল্যাটফর্ম</p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-sm p-3 mb-4">
          <h2 className="text-sm font-semibold text-center text-teal-600 mb-3">যোগাযোগ</h2>
          <div className="flex justify-center gap-4">
            <a href="tel:01712525910" className="text-center">
              <div className="bg-green-100 p-2 rounded-full mx-auto mb-1 w-8 h-8 flex items-center justify-center">
                <Phone size={14} className="text-green-600" />
              </div>
              <p className="text-xs text-gray-700">কল করুন</p>
            </a>
            <a href="mailto:ridoan.zisan@gmail.com" className="text-center">
              <div className="bg-teal-100 p-2 rounded-full mx-auto mb-1 w-8 h-8 flex items-center justify-center">
                <Mail size={14} className="text-teal-600" />
              </div>
              <p className="text-xs text-gray-700">ই-মেইল</p>
            </a>
          </div>
        </div>

        {/* App Features */}
        <div className="bg-white rounded-lg shadow-sm p-3 mb-4">
          <h2 className="text-sm font-semibold text-center text-teal-600 mb-3">অ্যাপের সুবিধাসমূহ</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-1.5 rounded-lg">
                <Star size={14} className="text-blue-600" />
              </div>
              <p className="text-xs text-gray-700">সব ধরনের স্থানীয় সেবা এক জায়গায়</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 p-1.5 rounded-lg">
                <Clock size={14} className="text-green-600" />
              </div>
              <p className="text-xs text-gray-700">২৪/৭ সেবা খোঁজার সুবিধা</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 p-1.5 rounded-lg">
                <Shield size={14} className="text-purple-600" />
              </div>
              <p className="text-xs text-gray-700">বিশ্বস্ত ও যাচাইকৃত সেবাদাতা</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-orange-100 p-1.5 rounded-lg">
                <Users size={14} className="text-orange-600" />
              </div>
              <p className="text-xs text-gray-700">সরাসরি যোগাযোগের সুবিধা</p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg shadow-sm p-3 mb-4">
          <h2 className="text-sm font-semibold text-center text-teal-600 mb-3">বিস্তারিত</h2>
          <div className="text-xs text-gray-700 leading-relaxed space-y-2">
            <p>
              <span className="font-semibold text-teal-600">DhunatHub</span> ধুনট উপজেলার স্থানীয় সেবার একটি আধুনিক ডিজিটাল প্ল্যাটফর্ম। 
              এখানে সহজেই পাবেন ডাক্তার, হাসপাতাল, রেস্টুরেন্ট, শিক্ষা প্রতিষ্ঠান সহ সকল প্রয়োজনীয় সেবা।
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-2 rounded-lg border-l-3 border-teal-500">
              <h3 className="font-medium text-teal-800 mb-1 text-xs">ব্যবসায়ীদের জন্য:</h3>
              <p className="text-xs text-gray-700">
                আপনার প্রতিষ্ঠানের ডিজিটাল বিজ্ঞাপন দিয়ে হাজারো মানুষের কাছে পৌঁছান।
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <div className="bg-blue-50 p-1.5 rounded-md text-center">
                <span className="font-medium text-blue-700">হাসপাতাল</span>
              </div>
              <div className="bg-green-50 p-1.5 rounded-md text-center">
                <span className="font-medium text-green-700">রেস্টুরেন্ট</span>
              </div>
              <div className="bg-purple-50 p-1.5 rounded-md text-center">
                <span className="font-medium text-purple-700">শিক্ষা প্রতিষ্ঠান</span>
              </div>
              <div className="bg-orange-50 p-1.5 rounded-md text-center">
                <span className="font-medium text-orange-700">ব্যবসা প্রতিষ্ঠান</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weather, Time and Date */}
        <WeatherDateInfo />

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-sm p-3">
          <h2 className="text-sm font-semibold text-gray-900 mb-2 flex items-center justify-center">
            <MapPin className="text-blue-600 mr-1" size={16} />
            ধুনট এর মানচিত্র
          </h2>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58419.89842987717!2d89.5233!3d24.7667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5f5b5c5a5a5b%3A0x5c5a5a5b5c5a5a5b!2sDhunat%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="140"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            <div className="absolute top-1 left-1 bg-white/90 px-1.5 py-0.5 rounded-md text-xs shadow-sm">
              <MapPin size={10} className="inline mr-0.5 text-blue-600" />
              ধুনট, বগুড়া
            </div>
          </div>
        </div>
        
        {/* Developer Credit */}
        <div className="text-center pt-6 mt-6 border-t border-gray-200">
            <a 
              href="https://ridoan-zisan.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-teal-600 transition-colors"
            >
                <Code2 size={14} />
                <span>ডেভেলপার: Md Ridoan Mahmud zisan</span>
            </a>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default About;
