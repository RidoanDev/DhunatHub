
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Wrench, Phone, MapPin, Clock } from 'lucide-react';

const Mechanic = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const mechanics = [
    { id: 1, name: 'মাস্টার আলী', specialty: 'গাড়ি মেকানিক', garage: 'আলী গ্যারেজ', location: 'ধুনট সদর', phone: '01711000121', experience: '২০ বছর', available: 'সকাল ৮টা - সন্ধ্যা ৬টা' },
    { id: 2, name: 'উস্তাদ রহিম', specialty: 'মোটরসাইকেল মেকানিক', garage: 'বাইক সার্ভিস সেন্টার', location: 'ধুনট বাজার', phone: '01711000122', experience: '১৫ বছর', available: 'সকাল ৯টা - রাত ৯টা' },
    { id: 3, name: 'করিম মিয়া', specialty: 'রিক্সা মেকানিক', garage: 'করিম রিক্সা গ্যারেজ', location: 'ধুনট পৌরসভা', phone: '01711000123', experience: '১২ বছর', available: 'সকাল ৭টা - সন্ধ্যা ৭টা' },
    { id: 4, name: 'ফারুক উস্তাদ', specialty: 'ট্রাক মেকানিক', garage: 'হেভি ভেহিকেল সার্ভিস', location: 'ধুনট রেলস্টেশন', phone: '01711000124', experience: '১৮ বছর', available: '২৪ ঘন্টা' },
    { id: 5, name: 'নুরুল মিস্ত্রি', specialty: 'জেনারেটর মেকানিক', garage: 'পাওয়ার সলিউশন', location: 'ধুনট সদর', phone: '01711000125', experience: '১০ বছর', available: 'সকাল ৮টা - সন্ধ্যা ৮টা' },
    { id: 6, name: 'সালাম মাস্টার', specialty: 'এসি মেকানিক', garage: 'কুলিং সিস্টেম সার্ভিস', location: 'ধুনট বাজার', phone: '01711000126', experience: '৮ বছর', available: 'সকাল ৯টা - সন্ধ্যা ৬টা' },
    { id: 7, name: 'জামাল উস্তাদ', specialty: 'ওয়েল্ডিং মেকানিক', garage: 'ওয়েল্ডিং ওয়ার্কশপ', location: 'ধুনট পৌরসভা', phone: '01711000127', experience: '২২ বছর', available: 'সকাল ৮টা - বিকাল ৫টা' },
    { id: 8, name: 'ইকবাল মিস্ত্রি', specialty: 'ইলেকট্রিক্যাল মেকানিক', garage: 'ইলেকট্রিক্যাল সার্ভিস', location: 'ধুনট সদর', phone: '01711000128', experience: '৬ বছর', available: 'সকাল ৯টা - সন্ধ্যা ৭টা' },
    { id: 9, name: 'হাসান মাস্টার', specialty: 'পাম্প মেকানিক', garage: 'ওয়াটার পাম্প সার্ভিস', location: 'ধুনট রেলস্টেশন', phone: '01711000129', experience: '১৪ বছর', available: 'সকাল ৮টা - সন্ধ্যা ৬টা' },
    { id: 10, name: 'তানভীর উস্তাদ', specialty: 'ফ্রিজ মেকানিক', garage: 'রেফ্রিজারেশন সার্ভিস', location: 'ধুনট বাজার', phone: '01711000130', experience: '৯ বছর', available: 'সকাল ১০টা - সন্ধ্যা ৮টা' }
  ];

  const filteredMechanics = mechanics.filter(mechanic => {
    const matchesSearch = mechanic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mechanic.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Wrench className="mr-2" size={20} />
            <h1 className="text-lg font-bold">মেকানিক</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="মেকানিক বা বিশেষত্ব খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredMechanics.map((mechanic) => (
              <div key={mechanic.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{mechanic.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {mechanic.experience}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Wrench size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-orange-600">{mechanic.specialty}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{mechanic.garage}, {mechanic.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>সময়: {mechanic.available}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${mechanic.phone}`} className="text-blue-600">{mechanic.phone}</a>
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

export default Mechanic;
