
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Building, MapPin, Clock, Users } from 'lucide-react';

const ReligiousPlaces = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const places = [
    { id: 1, name: 'ধুনট জামে মসজিদ', type: 'মসজিদ', location: 'ধুনট সদর', capacity: '৫০০ জন', prayerTimes: 'পাঁচ ওয়াক্ত নামাজ', imam: 'মাওলানা আব্দুল করিম' },
    { id: 2, name: 'বাইতুল মুকাররম মসজিদ', type: 'মসজিদ', location: 'নতুন এলাকা', capacity: '৩০০ জন', prayerTimes: 'পাঁচ ওয়াক্ত নামাজ', imam: 'হাফেজ মোহাম্মদ আলী' },
    { id: 3, name: 'ইসলামিয়া জামে মসজিদ', type: 'মসজিদ', location: 'পুরাতন এলাকা', capacity: '২০০ জন', prayerTimes: 'পাঁচ ওয়াক্ত নামাজ', imam: 'মাওলানা আবু বকর' },
    { id: 4, name: 'নূরানী মসজিদ', type: 'মসজিদ', location: 'বাজার এলাকা', capacity: '১৫০ জন', prayerTimes: 'পাঁচ ওয়াক্ত নামাজ', imam: 'হাফেজ উসমান গনি' },
    { id: 5, name: 'কালী মন্দির', type: 'মন্দির', location: 'হিন্দু এলাকা', capacity: '১০০ জন', prayerTimes: 'সকাল ও সন্ধ্যায় আরতি', priest: 'পণ্ডিত রামকৃষ্ণ' },
    { id: 6, name: 'দুর্গা মন্দির', type: 'মন্দির', location: 'মন্দির পাড়া', capacity: '২০০ জন', prayerTimes: 'দৈনিক পূজা', priest: 'পণ্ডিত গোপাল চন্দ্র' },
    { id: 7, name: 'সেন্ট জোসেফ চার্চ', type: 'গির্জা', location: 'খ্রিস্টান এলাকা', capacity: '৮০ জন', prayerTimes: 'রবিবার প্রার্থনা', pastor: 'ফাদার মাইকেল' },
    { id: 8, name: 'ইদগাহ ময়দান', type: 'ইদগাহ', location: 'কেন্দ্রীয় এলাকা', capacity: '২০০০ জন', prayerTimes: 'ঈদের নামাজ', imam: 'পীর সাহেব হুজুর' },
    { id: 9, name: 'হানাফী মসজিদ', type: 'মসজিদ', location: 'আবাসিক এলাকা', capacity: '১২০ জন', prayerTimes: 'পাঁচ ওয়াক্ত নামাজ', imam: 'মাওলানা নূরুল ইসলাম' },
    { id: 10, name: 'তাবলীগ মসজিদ', type: 'মসজিদ', location: 'তাবলীগ এলাকা', capacity: '৮০ জন', prayerTimes: 'পাঁচ ওয়াক্ত নামাজ', imam: 'মাওলানা আব্দুর রহমান' }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || place.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Building className="mr-2" size={20} />
            <h1 className="text-lg font-bold">ধর্মীয় উপাসনালয়</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="উপাসনালয় খুঁজুন..."
          filterOptions={[
            { value: 'all', label: 'সব ধর্মের' },
            { value: 'মসজিদ', label: 'মসজিদ' },
            { value: 'মন্দির', label: 'মন্দির' },
            { value: 'গির্জা', label: 'গির্জা' }
          ]}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{place.name}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {place.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{place.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-2 text-gray-400" />
                    <span>ধারণক্ষমতা: {place.capacity}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{place.prayerTimes}</span>
                  </div>
                  {place.imam && (
                    <p className="text-gray-500 text-xs">ইমাম: {place.imam}</p>
                  )}
                  {place.priest && (
                    <p className="text-gray-500 text-xs">পুরোহিত: {place.priest}</p>
                  )}
                  {place.pastor && (
                    <p className="text-gray-500 text-xs">পাস্টর: {place.pastor}</p>
                  )}
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

export default ReligiousPlaces;
