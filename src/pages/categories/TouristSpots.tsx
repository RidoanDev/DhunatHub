
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Camera, MapPin, Clock, Star } from 'lucide-react';

const TouristSpots = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const spots = [
    { id: 1, name: 'ধুনট নদীর তীর', type: 'প্রাকৃতিক', location: 'নদীর পাড়', description: 'সূর্যাস্তের সুন্দর দৃশ্য', rating: 4, openTime: 'সারাদিন' },
    { id: 2, name: 'পুরাতন জমিদার বাড়ি', type: 'ঐতিহাসিক', location: 'পুরাতন এলাকা', description: 'প্রাচীন স্থাপত্যের নিদর্শন', rating: 5, openTime: 'সকাল ৯টা - সন্ধ্যা ৬টা' },
    { id: 3, name: 'ধুনট পার্ক', type: 'পার্ক', location: 'কেন্দ্রীয় এলাকা', description: 'পরিবার নিয়ে ঘুরতে আদর্শ', rating: 4, openTime: 'সকাল ৬টা - রাত ১০টা' },
    { id: 4, name: 'শহীদ মিনার', type: 'ঐতিহাসিক', location: 'সদর এলাকা', description: 'মুক্তিযুদ্ধের স্মৃতিস্তম্ভ', rating: 5, openTime: 'সারাদিন' },
    { id: 5, name: 'কৃষি গবেষণা খামার', type: 'শিক্ষামূলক', location: 'কৃষি এলাকা', description: 'আধুনিক কৃষি পদ্ধতি দেখার সুযোগ', rating: 3, openTime: 'সকাল ৮টা - বিকাল ৫টা' },
    { id: 6, name: 'ধুনট হাট বাজার', type: 'সাংস্কৃতিক', location: 'বাজার এলাকা', description: 'ঐতিহ্যবাহী গ্রামীণ হাট', rating: 4, openTime: 'সকাল ৭টা - দুপুর ২টা' },
    { id: 7, name: 'মসজিদ কমপ্লেক্স', type: 'ধর্মীয়', location: 'মসজিদ এলাকা', description: 'সুন্দর ইসলামিক স্থাপত্য', rating: 4, openTime: 'সারাদিন' },
    { id: 8, name: 'বটতলা', type: 'প্রাকৃতিক', location: 'গ্রামের মাঝে', description: 'প্রাচীন বটগাছের ছায়া', rating: 3, openTime: 'সারাদিন' },
    { id: 9, name: 'স্কুল মিউজিয়াম', type: 'শিক্ষামূলক', location: 'স্কুল এলাকা', description: 'স্থানীয় ইতিহাস ও ঐতিহ্য', rating: 3, openTime: 'সকাল ১০টা - বিকাল ৪টা' },
    { id: 10, name: 'ফিশিং পয়েন্ট', type: 'বিনোদন', location: 'পুকুর পাড়', description: 'মাছ ধরার জন্য আদর্শ স্থান', rating: 4, openTime: 'সকাল ৬টা - সন্ধ্যা ৭টা' }
  ];

  const filteredSpots = spots.filter(spot => {
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || spot.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Camera className="mr-2" size={20} />
            <h1 className="text-lg font-bold">দর্শনীয় স্থান</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="দর্শনীয় স্থান খুঁজুন..."
          filterOptions={[
            { value: 'all', label: 'সব ধরনের' },
            { value: 'প্রাকৃতিক', label: 'প্রাকৃতিক' },
            { value: 'ঐতিহাসিক', label: 'ঐতিহাসিক' },
            { value: 'ধর্মীয়', label: 'ধর্মীয়' }
          ]}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredSpots.map((spot) => (
              <div key={spot.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{spot.name}</h3>
                  <div className="flex items-center">
                    <Star size={12} className="text-yellow-500 mr-1" />
                    <span className="text-xs text-gray-600">{spot.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{spot.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Camera size={14} className="mr-2 text-gray-400" />
                    <span>{spot.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{spot.openTime}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{spot.description}</p>
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

export default TouristSpots;
