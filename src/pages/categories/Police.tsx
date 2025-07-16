
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Shield, Phone, MapPin, Clock } from 'lucide-react';

const Police = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const policeStations = [
    { id: 1, name: 'ধুনট থানা', officer: 'এসআই মোহাম্মদ আলী', address: 'ধুনট সদর, বগুড়া', phone: '01711000051', emergency: '999', hours: '২৪ ঘন্টা' },
    { id: 2, name: 'ধুনট ট্রাফিক পুলিশ', officer: 'সার্জেন্ট রহিম উদ্দিন', address: 'ধুনট বাজার, বগুড়া', phone: '01711000052', emergency: '999', hours: 'সকাল ৬টা - রাত ১২টা' },
    { id: 3, name: 'রেলওয়ে পুলিশ', officer: 'কনস্টেবল করিম মিয়া', address: 'ধুনট রেলস্টেশন, বগুড়া', phone: '01711000053', emergency: '999', hours: '২৪ ঘন্টা' },
    { id: 4, name: 'সাইবার ক্রাইম ইউনিট', officer: 'এসআই ফারুক আহমেদ', address: 'ধুনট পৌরসভা, বগুড়া', phone: '01711000054', emergency: '999', hours: 'সকাল ৯টা - সন্ধ্যা ৬টা' },
    { id: 5, name: 'মহিলা ও শিশু নির্যাতন প্রতিরোধ', officer: 'এসআই সালমা খানম', address: 'ধুনট সদর, বগুড়া', phone: '01711000055', emergency: '999', hours: '২৪ ঘন্টা' },
    { id: 6, name: 'গোয়েন্দা বিভাগ', officer: 'এসআই নুরুল ইসলাম', address: 'ধুনট বাজার, বগুড়া', phone: '01711000056', emergency: '999', hours: 'সকাল ৮টা - রাত ১০টা' },
    { id: 7, name: 'হাইওয়ে পুলিশ', officer: 'সার্জেন্ট জামাল হোসেন', address: 'ঢাকা-রংপুর মহাসড়ক', phone: '01711000057', emergency: '999', hours: '২৪ ঘন্টা' },
    { id: 8, name: 'কমিউনিটি পুলিশিং', officer: 'কনস্টেবল সালাম উল্লাহ', address: 'ধুনট পৌরসভা, বগুড়া', phone: '01711000058', emergency: '999', hours: 'সকাল ৯টা - সন্ধ্যা ৭টা' },
    { id: 9, name: 'টুরিস্ট পুলিশ', officer: 'এসআই ইকবাল হুসাইন', address: 'ধুনট সদর, বগুড়া', phone: '01711000059', emergency: '999', hours: 'সকাল ৮টা - সন্ধ্যা ৮টা' },
    { id: 10, name: 'অ্যান্টি টেরোরিজম ইউনিট', officer: 'এসআই হাসান আলী', address: 'ধুনট থানা, বগুড়া', phone: '01711000060', emergency: '999', hours: '২৪ ঘন্টা' }
  ];

  const filteredStations = policeStations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.officer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Shield className="mr-2" size={20} />
            <h1 className="text-lg font-bold">থানা</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="থানা বা অফিসার খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredStations.map((station) => (
              <div key={station.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{station.name}</h3>
                  <a 
                    href={`tel:${station.emergency}`} 
                    className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-bold hover:bg-red-200"
                  >
                    জরুরি: {station.emergency}
                  </a>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield size={14} className="mr-2 text-gray-400" />
                    <span>দায়িত্বরত: {station.officer}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{station.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>কার্যসময়: {station.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${station.phone}`} className="text-blue-600">{station.phone}</a>
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

export default Police;
