
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Fuel, Phone, MapPin, Clock } from 'lucide-react';

const GasStation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const gasStations = [
    { id: 1, name: 'পদ্মা পেট্রোল পাম্প', manager: 'আব্দুল করিম', location: 'ধুনট সদর', phone: '01711000231', type: 'পেট্রোল', service: 'পেট্রোল, ডিজেল, সিএনজি', timing: '২৪ ঘন্টা' },
    { id: 2, name: 'মেঘনা ফিলিং স্টেশন', owner: 'হাজী সালাম', location: 'ধুনট বাজার', phone: '01711000232', type: 'জ্বালানি', service: 'অকটেন, ডিজেল, মোবিল', timing: 'সকাল ৬টা - রাত ১২টা' },
    { id: 3, name: 'যমুনা এলপি গ্যাস', dealer: 'মোহাম্মদ আলম', location: 'ধুনট পৌরসভা', phone: '01711000233', type: 'এলপি গ্যাস', service: 'রান্নার গ্যাস, সিলিন্ডার', timing: 'সকাল ৮টা - সন্ধ্যা ৮টা' },
    { id: 4, name: 'বাশুন্ধরা গ্যাস স্টেশন', manager: 'নুরুল ইসলাম', location: 'ধুনট রেলস্টেশন', phone: '01711000234', type: 'প্রাকৃতিক গ্যাস', service: 'গ্যাস সংযোগ, মিটার', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 5, name: 'তিতাস গ্যাস অফিস', officer: 'ইঞ্জিনিয়ার রহিম', location: 'ধুনট সদর', phone: '01711000235', type: 'প্রাকৃতিক গ্যাস', service: 'গ্যাস বিতরণ, মেরামত', timing: 'সকাল ৮টা - বিকাল ৪টা' },
    { id: 6, name: 'সিএনজি কনভার্শন সেন্টার', technician: 'জামাল উদ্দিন', location: 'ধুনট বাজার', phone: '01711000236', type: 'সিএনজি', service: 'গাড়ি সিএনজি কনভার্শন', timing: 'সকাল ৯টা - সন্ধ্যা ৬টা' },
    { id: 7, name: 'টোটাল পেট্রোল পাম্প', manager: 'ফারুক আহমেদ', location: 'ধুনট পৌরসভা', phone: '01711000237', type: 'পেট্রোল', service: 'হাই অকটেন, ডিজেল', timing: '২৪ ঘন্টা' },
    { id: 8, name: 'অরিয়ন গ্যাস এজেন্সি', agent: 'ইকবাল হোসেন', location: 'ধুনট সদর', phone: '01711000238', type: 'এলপি গ্যাস', service: 'বাসা-বাড়িতে গ্যাস সরবরাহ', timing: 'সকাল ৭টা - রাত ৯টা' },
    { id: 9, name: 'পূর্বানী গ্যাস কোম্পানি', executive: 'সাইফুল ইসলাম', location: 'ধুনট রেলস্টেশন', phone: '01711000239', type: 'প্রাকৃতিক গ্যাস', service: 'ইন্ডাস্ট্রিয়াল গ্যাস সরবরাহ', timing: 'সকাল ৮টা - বিকাল ৫টা' },
    { id: 10, name: 'লাকী এলপি গ্যাস', distributor: 'হাসান আলী', location: 'ধুনট বাজার', phone: '01711000240', type: 'এলপি গ্যাস', service: 'পাইকারি ও খুচরা গ্যাস', timing: 'সকাল ৬টা - সন্ধ্যা ৭টা' }
  ];

  const filteredStations = gasStations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Fuel className="mr-2" size={20} />
            <h1 className="text-lg font-bold">গ্যাস স্টেশন</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="গ্যাস স্টেশন বা জ্বালানি খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredStations.map((station) => (
              <div key={station.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{station.name}</h3>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                    {station.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Fuel size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-red-600">{station.service}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{station.timing}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{station.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${station.phone}`} className="text-blue-600">{station.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {station.manager || station.owner || station.dealer || station.officer || station.technician || station.agent || station.executive || station.distributor}
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

export default GasStation;
