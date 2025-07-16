
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Home, MapPin, Phone, Banknote } from 'lucide-react';

const HouseRent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const houses = [
    { id: 1, title: '২ বেডরুম ফ্ল্যাট', location: 'ধুনট সদর', rent: '৮,০০০ টাকা', type: 'ফ্ল্যাট', phone: '01711000001', details: 'পানি, গ্যাস, বিদ্যুৎ সহ' },
    { id: 2, title: '৩ বেডরুম বাড়ি', location: 'নতুন এলাকা', rent: '১২,০০০ টাকা', type: 'বাড়ি', phone: '01711000002', details: 'গ্যারেজ ও ছাদ সহ' },
    { id: 3, title: '১ বেডরুম রুম', location: 'বাজার এলাকা', rent: '৫,০০০ টাকা', type: 'রুম', phone: '01711000003', details: 'আলাদা বাথরুম' },
    { id: 4, title: '৪ বেডরুম বড় বাড়ি', location: 'আবাসিক এলাকা', rent: '১৮,০০০ টাকা', type: 'বাড়ি', phone: '01711000004', details: 'বাগান ও পার্কিং সহ' },
    { id: 5, title: 'স্টুডিও রুম', location: 'কলেজ এলাকা', rent: '৪,০০০ টাকা', type: 'রুম', phone: '01711000005', details: 'ছাত্র/ছাত্রীদের জন্য' },
    { id: 6, title: '২ বেডরুম বাড়ি', location: 'পুরাতন এলাকা', rent: '১০,০০০ টাকা', type: 'বাড়ি', phone: '01711000006', details: 'নিরাপদ এলাকা' },
    { id: 7, title: 'ব্যাচেলর রুম', location: 'অফিস এলাকা', rent: '৬,০০০ টাকা', type: 'রুম', phone: '01711000007', details: 'WiFi ও AC সহ' },
    { id: 8, title: '৩ বেডরুম ফ্ল্যাট', location: 'কেন্দ্রীয় এলাকা', rent: '১৫,০০০ টাকা', type: 'ফ্ল্যাট', phone: '01711000008', details: 'লিফট ও জেনারেটর সহ' },
    { id: 9, title: 'ফ্যামিলি বাড়ি', location: 'শান্ত এলাকা', rent: '২০,০০০ টাকা', type: 'বাড়ি', phone: '01711000009', details: 'স্কুল ও হাসপাতাল কাছে' },
    { id: 10, title: 'মেস রুম', location: 'শিক্ষার্থী এলাকা', rent: '৩,৫০০ টাকা', type: 'মেস', phone: '01711000010', details: 'খাবার সহ' }
  ];

  const filteredHouses = houses.filter(house => {
    const matchesSearch = house.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         house.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || house.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Home className="mr-2" size={20} />
            <h1 className="text-lg font-bold">বাড়ি ভাড়া</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="বাড়ি বা এলাকা খুঁজুন..."
          filterOptions={[
            { value: 'all', label: 'সব ধরনের' },
            { value: 'বাড়ি', label: 'বাড়ি' },
            { value: 'ফ্ল্যাট', label: 'ফ্ল্যাট' },
            { value: 'রুম', label: 'রুম' }
          ]}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredHouses.map((house) => (
              <div key={house.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{house.title}</h3>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    {house.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{house.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Banknote size={14} className="mr-2 text-gray-400" />
                    <span className="font-semibold text-green-600">{house.rent}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${house.phone}`} className="text-blue-600">{house.phone}</a>
                  </div>
                  <p className="text-gray-500 text-xs">{house.details}</p>
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

export default HouseRent;
