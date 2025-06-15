
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { Bell, Clock, Star, Info, AlertCircle } from 'lucide-react';

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "নতুন মেডিকেল সেন্টার যুক্ত",
      description: "ধুনট ডিজিটাল ডায়াগনস্টিক সেন্টার এখন আমাদের অ্যাপে পাওয়া যাচ্ছে।",
      date: "২ ঘন্টা আগে",
      type: "new-service",
      isRead: false
    },
    {
      id: 2,
      title: "অ্যাপ আপডেট উপলব্ধ",
      description: "নতুন ফিচার এবং বাগ ফিক্স সহ ভার্শন ১.১.০ এখন উপলব্ধ।",
      date: "৬ ঘন্টা আগে",
      type: "app-update",
      isRead: false
    },
    {
      id: 3,
      title: "জরুরি নম্বর আপডেট",
      description: "থানা, ফায়ার সার্ভিস এবং হাসপাতালের জরুরি নম্বরগুলো আপডেট করা হয়েছে।",
      date: "১ দিন আগে",
      type: "update",
      isRead: true
    },
    {
      id: 4,
      title: "নতুন বাস সার্ভিস",
      description: "ঢাকা-ধুনট রুটে নতুন এসি বাস সার্ভিস চালু হয়েছে।",
      date: "২ দিন আগে",
      type: "transport",
      isRead: true
    },
    {
      id: 5,
      title: "ছুটির দিনের সময়সূচি",
      description: "আগামী ঈদের ছুটিতে ব্যাংক ও সরকারি অফিসের সময়সূচি পরিবর্তন হবে।",
      date: "৩ দিন আগে",
      type: "schedule",
      isRead: true
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'new-service': return <Star size={12} className="text-green-600" />;
      case 'app-update': return <Info size={12} className="text-blue-600" />;
      case 'update': return <AlertCircle size={12} className="text-orange-600" />;
      default: return <Bell size={12} className="text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-3 py-3 pb-20">
        <div className="flex items-center mb-3">
          <Bell className="text-blue-600 mr-2" size={18} />
          <h1 className="text-base font-semibold text-gray-900">বিজ্ঞপ্তি</h1>
        </div>

        {/* Notifications List */}
        <div className="space-y-1.5">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow-sm p-2.5 ${
                !notification.isRead ? 'border-l-3 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-1.5">
                <div className="flex items-center flex-1">
                  <div className="mr-2">
                    {getTypeIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xs font-medium ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                      {!notification.isRead && (
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full ml-1.5"></span>
                      )}
                    </h3>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-xs mb-1.5 leading-relaxed">
                {notification.description}
              </p>
              
              <div className="flex items-center text-xs text-gray-500">
                <Clock size={10} className="mr-1" />
                {notification.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Notifications;
