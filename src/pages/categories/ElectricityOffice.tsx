
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Zap, Phone, MapPin, Clock } from 'lucide-react';

const ElectricityOffice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const electricityOffices = [
    { id: 1, name: 'ধুনট পল্লী বিদ্যুৎ সমিতি', manager: 'ইঞ্জিনিয়ার আব্দুল মালেক', location: 'ধুনট সদর', phone: '01711000151', service: 'নতুন সংযোগ, বিল পরিশোধ', timings: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 2, name: 'বিদ্যুৎ উন্নয়ন বোর্ড', manager: 'ইঞ্জিনিয়ার মোহাম্মদ রহিম', location: 'ধুনট বাজার', phone: '01711000152', service: 'লাইন সংযোগ, ট্রান্সফরমার সমস্যা', timings: 'সকাল ৮টা - বিকাল ৪টা' },
    { id: 3, name: 'ধুনট সাব-স্টেশন', manager: 'ইঞ্জিনিয়ার কামরুল হাসান', location: 'ধুনট পৌরসভা', phone: '01711000153', service: 'বিদ্যুৎ বিতরণ নিয়ন্ত্রণ', timings: '২৪ ঘন্টা' },
    { id: 4, name: 'গ্রামীণ বিদ্যুৎায়ন অফিস', manager: 'মোহাম্মদ জামাল', location: 'ধুনট রেলস্টেশন', phone: '01711000154', service: 'গ্রামীণ বিদ্যুৎ সংযোগ', timings: 'সকাল ১০টা - বিকাল ৪টা' },
    { id: 5, name: 'মিটার রিডিং অফিস', manager: 'সাইফুল ইসলাম', location: 'ধুনট সদর', phone: '01711000155', service: 'মিটার রিডিং, বিল তৈরি', timings: 'সকাল ৯টা - দুপুর ১টা' },
    { id: 6, name: 'বিদ্যুৎ সংযোগ কার্যালয়', manager: 'নুরুল হক', location: 'ধুনট বাজার', phone: '01711000156', service: 'নতুন সংযোগের আবেদন', timings: 'সকাল ৯টা - বিকাল ৩টা' },
    { id: 7, name: 'লোডশেডিং নিয়ন্ত্রণ কেন্দ্র', manager: 'ইকবাল হোসেন', location: 'ধুনট পৌরসভা', phone: '01711000157', service: 'লোডশেডিং সময়সূচী', timings: '২৪ ঘন্টা' },
    { id: 8, name: 'বিদ্যুৎ রক্ষণাবেক্ষণ বিভাগ', manager: 'আলীম উদ্দিন', location: 'ধুনট সদর', phone: '01711000158', service: 'লাইনম্যান সেবা, মেরামত', timings: 'সকাল ৮টা - সন্ধ্যা ৬টা' },
    { id: 9, name: 'জরুরি বিদ্যুৎ সেবা', manager: 'হাসান আলী', location: 'ধুনট রেলস্টেশন', phone: '01711000159', service: 'জরুরি বিদ্যুৎ মেরামত', timings: '২৪ ঘন্টা' },
    { id: 10, name: 'সোলার এনার্জি অফিস', manager: 'ডক্টর রশিদ', location: 'ধুনট বাজার', phone: '01711000160', service: 'সোলার প্যানেল স্থাপন', timings: 'সকাল ১০টা - বিকাল ৫টা' }
  ];

  const filteredOffices = electricityOffices.filter(office => {
    const matchesSearch = office.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         office.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Zap className="mr-2" size={20} />
            <h1 className="text-lg font-bold">বিদ্যুৎ অফিস</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="বিদ্যুৎ অফিস বা সেবা খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredOffices.map((office) => (
              <div key={office.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{office.name}</h3>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                    অফিস
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Zap size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-yellow-600">{office.service}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{office.timings}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{office.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${office.phone}`} className="text-blue-600">{office.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">ম্যানেজার: {office.manager}</span>
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

export default ElectricityOffice;
