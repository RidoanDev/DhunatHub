
import { Bell } from 'lucide-react';

const NoticeMarquee = () => {
  return (
    <div className="bg-red-500 text-white py-1.5 mx-4 rounded-md mb-3 overflow-hidden">
      <div className="flex items-center">
        <span className="bg-red-700 px-2 py-0.5 text-xs font-bold rounded-r-full mr-2 flex-shrink-0 flex items-center">
          <Bell className="h-3 w-3" />
        </span>
        <div className="overflow-hidden">
          <p className="font-bengali text-xs animate-marquee whitespace-nowrap">
            ✨ DhunatHub অ্যাপে স্বাগতম! সকল সেবা এখন আপনার হাতের মুঠোয় 📱 জরুরি প্রয়োজনে ১০০ নম্বরে কল করুন 🚨
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeMarquee;
