
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Video as VideoIcon, Phone, MapPin, Users } from 'lucide-react';

const Video = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const videoChannels = [
    { id: 1, name: 'ধুনট নিউজ', owner: 'জহিরুল ইসলাম', location: 'ধুনট সদর', phone: '01711000181', type: 'সংবাদ চ্যানেল', subscribers: '৫০০০', content: 'স্থানীয় সংবাদ ও ঘটনা' },
    { id: 2, name: 'ধুনট ভ্লগ', creator: 'তানভীর হাসান', location: 'ধুনট বাজার', phone: '01711000182', type: 'ভ্লগিং', subscribers: '৩২০০', content: 'দৈনন্দিন জীবন ও ভ্রমণ' },
    { id: 3, name: 'কৃষি টিভি ধুনট', host: 'কৃষিবিদ রহমান', location: 'ধুনট পৌরসভা', phone: '01711000183', type: 'কৃষি শিক্ষা', subscribers: '২৮০০', content: 'কৃষি পরামর্শ ও প্রযুক্তি' },
    { id: 4, name: 'ধুনট এন্টারটেইনমেন্ট', producer: 'সালমান খান', location: 'ধুনট রেলস্টেশন', phone: '01711000184', type: 'বিনোদন', subscribers: '৭৫০০', content: 'গান, নাটক ও কমেডি' },
    { id: 5, name: 'ইসলামিক বাণী', speaker: 'হাফেজ আব্দুল হক', location: 'ধুনট সদর', phone: '01711000185', type: 'ধর্মীয়', subscribers: '৪২০০', content: 'ইসলামিক আলোচনা ও দোয়া' },
    { id: 6, name: 'ধুনট স্পোর্টস', anchor: 'রাকিব হোসেন', location: 'ধুনট বাজার', phone: '01711000186', type: 'ক্রীড়া', subscribers: '১৮০০', content: 'স্থানীয় খেলাধুলা সংবাদ' },
    { id: 7, name: 'শিক্ষা সহায়ক', teacher: 'প্রফেসর আলম', location: 'ধুনট পৌরসভা', phone: '01711000187', type: 'শিক্ষামূলক', subscribers: '৬৩০০', content: 'পাঠ্যবই ব্যাখ্যা ও গাইড' },
    { id: 8, name: 'হেলথ টিপস ধুনট', doctor: 'ডা. ফারুক আহমেদ', location: 'ধুনট সদর', phone: '01711000188', type: 'স্বাস্থ্য', subscribers: '৩৭০০', content: 'স্বাস্থ্য পরামর্শ ও টিপস' },
    { id: 9, name: 'ধুনট ফুড রিভিউ', foodie: 'তাসনিম আক্তার', location: 'ধুনট রেলস্টেশন', phone: '01711000189', type: 'খাবার', subscribers: '২১০০', content: 'স্থানীয় খাবারের রিভিউ' },
    { id: 10, name: 'টেক রিভিউ ধুনট', reviewer: 'সাকিব আল হাসান', location: 'ধুনট বাজার', phone: '01711000190', type: 'প্রযুক্তি', subscribers: '৪৮০০', content: 'গ্যাজেট রিভিউ ও টেক নিউজ' }
  ];

  const filteredChannels = videoChannels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         channel.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         channel.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-4">
          <div className="flex items-center">
            <VideoIcon className="mr-2" size={20} />
            <h1 className="text-lg font-bold">ভিডিও দেখুন</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="ভিডিও চ্যানেল খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredChannels.map((channel) => (
              <div key={channel.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{channel.name}</h3>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                    {channel.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <VideoIcon size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-red-600">{channel.content}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-2 text-gray-400" />
                    <span>সাবস্ক্রাইবার: {channel.subscribers}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{channel.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${channel.phone}`} className="text-blue-600">{channel.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {channel.owner || channel.creator || channel.host || channel.producer || channel.speaker || channel.anchor || channel.teacher || channel.doctor || channel.foodie || channel.reviewer}
                    </span>
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

export default Video;
