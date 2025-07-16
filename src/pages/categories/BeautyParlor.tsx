
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Sparkles, Phone, MapPin, Clock } from 'lucide-react';

const BeautyParlor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const beautyParlors = [
    { id: 1, name: 'রূপবাণী বিউটি পার্লার', owner: 'নাসরিন আক্তার', location: 'ধুনট সদর', phone: '01711000191', service: 'ব্রাইডাল মেকআপ, ফেসিয়াল', timing: 'সকাল ৯টা - রাত ৮টা', price: '৫০০-৩০০০ টাকা' },
    { id: 2, name: 'গ্ল্যামার বিউটি সেন্টার', beautician: 'শাহানা পারভীন', location: 'ধুনট বাজার', phone: '01711000192', service: 'হেয়ার কাট, হেয়ার কালার', timing: 'সকাল ১০টা - সন্ধ্যা ৭টা', price: '২০০-১৫০০ টাকা' },
    { id: 3, name: 'এলিগ্যান্স পার্লার', manager: 'রুমা খাতুন', location: 'ধুনট পৌরসভা', phone: '01711000193', service: 'নেইল আর্ট, আই ব্রো', timing: 'দুপুর ১২টা - রাত ৯টা', price: '১০০-৮০০ টাকা' },
    { id: 4, name: 'ডায়মন্ড বিউটি পার্লার', owner: 'সালমা বেগম', location: 'ধুনট রেলস্টেশন', phone: '01711000194', service: 'স্কিন ট্রিটমেন্ট, ম্যাসাজ', timing: 'সকাল ৮টা - সন্ধ্যা ৬টা', price: '৩০০-২০০০ টাকা' },
    { id: 5, name: 'গোল্ডেন গ্লো সেলুন', beautician: 'তাহমিনা সুলতানা', location: 'ধুনট সদর', phone: '01711000195', service: 'ব্লিচিং, ওয়াক্সিং', timing: 'সকাল ৯টা - সন্ধ্যা ৭টা', price: '১৫০-১২০০ টাকা' },
    { id: 6, name: 'প্রিন্সেস বিউটি হাউস', owner: 'রেহানা আক্তার', location: 'ধুনট বাজার', phone: '01711000196', service: 'পার্টি মেকআপ, হেনা', timing: 'দুপুর ১টা - রাত ১০টা', price: '৪০০-২৫০০ টাকা' },
    { id: 7, name: 'ক্রিস্টাল বিউটি সেন্টার', manager: 'ফাতেমা খাতুন', location: 'ধুনট পৌরসভা', phone: '01711000197', service: 'হেয়ার স্ট্রেইটেনিং, কার্লিং', timing: 'সকাল ১০টা - সন্ধ্যা ৮টা', price: '৬০০-৪০০০ টাকা' },
    { id: 8, name: 'এঞ্জেল বিউটি পার্লার', beautician: 'রোকসানা বেগম', location: 'ধুনট সদর', phone: '01711000198', service: 'পেডিকিউর, ম্যানিকিউর', timing: 'সকাল ৯টা - সন্ধ্যা ৬টা', price: '২৫০-৭০০ টাকা' },
    { id: 9, name: 'রয়েল টাচ সেলুন', owner: 'নার্গিস সুলতানা', location: 'ধুনট রেলস্টেশন', phone: '01711000199', service: 'হেয়ার স্পা, ডি-ট্যান', timing: 'দুপুর ২টা - রাত ৯টা', price: '৮০০-৩৫০০ টাকা' },
    { id: 10, name: 'গ্রেস বিউটি স্টুডিও', beautician: 'শামীমা খাতুন', location: 'ধুনট বাজার', phone: '01711000200', service: 'অ্যান্টি এজিং, বোটক্স', timing: 'সকাল ১১টা - সন্ধ্যা ৭টা', price: '১০০০-৮০০০ টাকা' }
  ];

  const filteredParlors = beautyParlors.filter(parlor => {
    const matchesSearch = parlor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         parlor.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Sparkles className="mr-2" size={20} />
            <h1 className="text-lg font-bold">বিউটি পার্লার</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="বিউটি পার্লার বা সেবা খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredParlors.map((parlor) => (
              <div key={parlor.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{parlor.name}</h3>
                  <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                    {parlor.price}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Sparkles size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-pink-600">{parlor.service}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{parlor.timing}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{parlor.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${parlor.phone}`} className="text-blue-600">{parlor.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">{parlor.owner || parlor.beautician || parlor.manager}</span>
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

export default BeautyParlor;
