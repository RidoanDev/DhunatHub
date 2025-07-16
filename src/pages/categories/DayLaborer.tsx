
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Hammer, Phone, MapPin, Star } from 'lucide-react';

const DayLaborer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const dayLaborers = [
    { id: 1, name: 'আবুল কাশেম', type: 'রাজমিস্ত্রি', location: 'ধুনট সদর', phone: '01711000261', experience: '১৫ বছর', dailyWage: '৮০০-১২০০ টাকা', specialty: 'ইট, সিমেন্ট, রড বাঁধাই' },
    { id: 2, name: 'করিম মিয়া', type: 'প্লাম্বার', location: 'ধুনট বাজার', phone: '01711000262', experience: '১০ বছর', dailyWage: '৬০০-১০০০ টাকা', specialty: 'পানির লাইন, স্যানিটারি' },
    { id: 3, name: 'রহিম উদ্দিন', type: 'ইলেকট্রিশিয়ান', location: 'ধুনট পৌরসভা', phone: '01711000263', experience: '১২ বছর', dailyWage: '৭০০-১১০০ টাকা', specialty: 'বৈদ্যুতিক ওয়্যারিং, ফ্যান লাগানো' },
    { id: 4, name: 'আলম হোসেন', type: 'ঢালাই মিস্ত্রি', location: 'ধুনট রেলস্টেশন', phone: '01711000264', experience: '৮ বছর', dailyWage: '৫০০-৮০০ টাকা', specialty: 'কংক্রিট ঢালাই, ছাদ তৈরি' },
    { id: 5, name: 'জসিম মিয়া', type: 'কাঠমিস্ত্রি', location: 'ধুনট সদর', phone: '01711000265', experience: '২০ বছর', dailyWage: '৯০০-১৫০০ টাকা', specialty: 'দরজা-জানালা, আসবাবপত্র' },
    { id: 6, name: 'নুরুল ইসলাম', type: 'পেইন্টার', location: 'ধুনট বাজার', phone: '01711000266', experience: '৬ বছর', dailyWage: '৫০০-৯০০ টাকা', specialty: 'দেয়াল রং, ইমালশন পেইন্ট' },
    { id: 7, name: 'হাসান আলী', type: 'টাইলস মিস্ত্রি', location: 'ধুনট পৌরসভা', phone: '01711000267', experience: '৭ বছর', dailyWage: '৬০০-১০০০ টাকা', specialty: 'মেঝে টাইলস, দেয়াল টাইলস' },
    { id: 8, name: 'সাইফুল ইসলাম', type: 'ঢালাই ও রং মিস্ত্রি', location: 'ধুনট সদর', phone: '01711000268', experience: '৯ বছর', dailyWage: '৭০০-১২০০ টাকা', specialty: 'কংক্রিট ও পেইন্টিং' },
    { id: 9, name: 'ইকবাল হুসাইন', type: 'গ্রিল ওয়েল্ডিং', location: 'ধুনট রেলস্টেশন', phone: '01711000269', experience: '৫ বছর', dailyWage: '৮০০-১৩০০ টাকা', specialty: 'গ্রিল, গেট তৈরি' },
    { id: 10, name: 'আনোয়ার হোসেন', type: 'জেনারেল লেবার', location: 'ধুনট বাজার', phone: '01711000270', experience: '৩ বছর', dailyWage: '৪০০-৬০০ টাকা', specialty: 'সাধারণ নির্মাণ কাজ' }
  ];

  const filteredLaborers = dayLaborers.filter(laborer => {
    const matchesSearch = laborer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         laborer.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         laborer.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Hammer className="mr-2" size={20} />
            <h1 className="text-lg font-bold">দিনমজুর</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="মিস্ত্রি বা কাজের ধরন খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredLaborers.map((laborer) => (
              <div key={laborer.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{laborer.name}</h3>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    {laborer.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Hammer size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-orange-600">{laborer.specialty}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={14} className="mr-2 text-gray-400" />
                    <span>অভিজ্ঞতা: {laborer.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{laborer.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${laborer.phone}`} className="text-blue-600">{laborer.phone}</a>
                    </div>
                    <span className="text-xs text-green-600 font-medium">{laborer.dailyWage}</span>
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

export default DayLaborer;
