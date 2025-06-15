
import React from 'react';
import { Bell } from 'lucide-react';

const NoticeMarquee = () => {
  const notice = "ধুনটের সবচেয়ে বিশ্বস্ত সেবা অ্যাপ! ২৪/৭ আপনার সেবায়। সর্বশেষ আপডেটের জন্য যুক্ত থাকুন।";

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 mx-4 my-2 p-2 rounded-lg">
      <div className="flex items-center overflow-hidden">
        <Bell className="text-red-600 mr-2 flex-shrink-0" size={14} />
        <div className="overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-xs text-yellow-800 font-medium">
            {notice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeMarquee;
