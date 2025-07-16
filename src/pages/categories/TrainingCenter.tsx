
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { BookOpen, Phone, MapPin, Clock, DollarSign } from 'lucide-react';

const TrainingCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const trainingCenters = [
    { id: 1, name: 'ধুনট কম্পিউটার ট্রেনিং সেন্টার', courses: 'কম্পিউটার বেসিক, মাইক্রোসফট অফিস', location: 'ধুনট সদর', phone: '01711000101', duration: '৩-৬ মাস', fee: '৫,০০০-১০,০০০ টাকা' },
    { id: 2, name: 'টেইলারিং ইনস্টিটিউট', courses: 'সেলাই, ফ্যাশন ডিজাইন', location: 'ধুনট বাজার', phone: '01711000102', duration: '৪-৮ মাস', fee: '৮,০০০-১৫,০০০ টাকা' },
    { id: 3, name: 'ড্রাইভিং স্কুল', courses: 'গাড়ি চালানো, লাইসেন্স প্রস্তুতি', location: 'ধুনট পৌরসভা', phone: '01711000103', duration: '১-২ মাস', fee: '১০,০০০-১৮,০০০ টাকা' },
    { id: 4, name: 'ইংরেজি ভাষা কেন্দ্র', courses: 'স্পোকেন ইংলিশ, আইইএলটিএস', location: 'ধুনট রেলস্টেশন', phone: '01711000104', duration: '৬-১২ মাস', fee: '৬,০০০-২০,০০০ টাকা' },
    { id: 5, name: 'বিউটি পার্লার ট্রেনিং', courses: 'হেয়ার স্টাইলিং, মেকআপ', location: 'ধুনট সদর', phone: '01711000105', duration: '২-৪ মাস', fee: '১২,০০০-২৫,০০০ টাকা' },
    { id: 6, name: 'ইলেকট্রিক্যাল ট্রেনিং সেন্টার', courses: 'ইলেকট্রিক্যাল মেইনটেনেন্স, ওয়্যারিং', location: 'ধুনট বাজার', phone: '01711000106', duration: '৩-৬ মাস', fee: '১৫,০০০-৩০,০০০ টাকা' },
    { id: 7, name: 'কুকিং ইনস্টিটিউট', courses: 'রান্নাবান্না, বেকিং', location: 'ধুনট পৌরসভা', phone: '01711000107', duration: '২-৩ মাস', fee: '৮,০০০-১৫,০০০ টাকা' },
    { id: 8, name: 'মোবাইল সার্ভিসিং', courses: 'মোবাইল মেরামত, সফটওয়্যার', location: 'ধুনট সদর', phone: '01711000108', duration: '২-৪ মাস', fee: '১০,০০০-২০,০০০ টাকা' },
    { id: 9, name: 'গ্রাফিক্স ডিজাইন একাডেমি', courses: 'ফটোশপ, ইলাস্ট্রেটর', location: 'ধুনট রেলস্টেশন', phone: '01711000109', duration: '৪-৮ মাস', fee: '১২,০০০-২৫,০০০ টাকা' },
    { id: 10, name: 'একাউন্টিং ট্রেনিং সেন্টার', courses: 'অ্যাকাউন্টিং, ট্যাক্স', location: 'ধুনট বাজার', phone: '01711000110', duration: '৬-১২ মাস', fee: '১৫,০০০-৩৫,০০০ টাকা' }
  ];

  const filteredCenters = trainingCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         center.courses.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-4">
          <div className="flex items-center">
            <BookOpen className="mr-2" size={20} />
            <h1 className="text-lg font-bold">প্রশিক্ষণ কেন্দ্র</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="প্রশিক্ষণ কেন্দ্র বা কোর্স খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredCenters.map((center) => (
              <div key={center.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{center.name}</h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {center.duration}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <BookOpen size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-purple-600">{center.courses}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{center.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={14} className="mr-2 text-gray-400" />
                    <span className="font-semibold text-green-600">{center.fee}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${center.phone}`} className="text-blue-600">{center.phone}</a>
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

export default TrainingCenter;
