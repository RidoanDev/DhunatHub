
import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';
import { Bell, Clock } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'নতুন ডাক্তার',
      message: 'ডা. আহমেদ হাসান নতুন চেম্বার খুলেছেন',
      time: '২ ঘন্টা আগে',
      read: false,
      type: 'info'
    },
    {
      id: 2,
      title: 'জরুরি নোটিশ',
      message: 'আগামীকাল বিনামূল্যে স্বাস্থ্য পরীক্ষা',
      time: '৫ ঘন্টা আগে',
      read: false,
      type: 'urgent'
    },
    {
      id: 3,
      title: 'নতুন সেবা',
      message: 'হোম ডেলিভারি সেবা চালু',
      time: '১ দিন আগে',
      read: true,
      type: 'info'
    },
    {
      id: 4,
      title: 'রক্তদান ক্যাম্প',
      message: 'আগামীকাল ধুনট সদর হাসপাতালে রক্তদান ক্যাম্প',
      time: '৩ ঘন্টা আগে',
      read: false,
      type: 'urgent'
    },
    {
      id: 5,
      title: 'নতুন হাসপাতাল',
      message: 'ধুনট এলাকায় নতুন প্রাইভেট হাসপাতাল খোলা হয়েছে',
      time: '৬ ঘন্টা আগে',
      read: true,
      type: 'info'
    },
    {
      id: 6,
      title: 'অ্যাপ আপডেট',
      message: 'DhunatHub অ্যাপের নতুন ভার্শন পাওয়া যাচ্ছে',
      time: '৮ ঘন্টা আগে',
      read: false,
      type: 'update'
    },
    {
      id: 7,
      title: 'বিশেষ ছাড়',
      message: 'সকল ডায়াগনস্টিক সেন্টারে ২০% ছাড়',
      time: '১২ ঘন্টা আগে',
      read: true,
      type: 'info'
    },
    {
      id: 8,
      title: 'ট্রেইনিং প্রোগ্রাম',
      message: 'বিনামূল্যে কম্পিউটার প্রশিক্ষণ কোর্স শুরু',
      time: '১ দিন আগে',
      read: false,
      type: 'info'
    },
    {
      id: 9,
      title: 'নতুন বাস রুট',
      message: 'ধুনট-ঢাকা নতুন বাস সার্ভিস চালু',
      time: '২ দিন আগে',
      read: true,
      type: 'info'
    },
    {
      id: 10,
      title: 'জরুরি সেবা',
      message: 'রাতের বেলা অ্যাম্বুলেন্স সেবা ২৪/৭ চালু',
      time: '৩ দিন আগে',
      read: false,
      type: 'urgent'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return '🚨';
      case 'update':
        return '🔄';
      default:
        return 'ℹ️';
    }
  };

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center space-x-3">
            <Bell className="h-6 w-6" />
            <div>
              <h1 className="text-lg font-bold font-bengali">বিজ্ঞপ্তি</h1>
              <p className="text-blue-100 font-bengali text-sm">গুরুত্বপূর্ণ আপডেট</p>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="px-4 py-3">
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-lg p-3 border transition-colors ${
                  notification.read 
                    ? 'bg-gray-50 border-gray-100' 
                    : notification.type === 'urgent'
                    ? 'bg-red-50 border-red-100'
                    : 'bg-blue-50 border-blue-100'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-lg flex-shrink-0">
                    {getNotificationIcon(notification.type)}
                  </span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-semibold font-bengali text-sm ${
                        notification.read ? 'text-gray-700' : 'text-gray-900'
                      }`}>
                        {notification.title}
                      </h3>
                      
                      {!notification.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      )}
                    </div>
                    
                    <p className={`text-xs font-bengali mb-2 ${
                      notification.read ? 'text-gray-600' : 'text-gray-800'
                    }`}>
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span className="font-bengali">{notification.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Notifications;
