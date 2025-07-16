
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { ShoppingCart, MapPin, Phone, Clock } from 'lucide-react';

const TodaysMarket = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const markets = [
    { id: 1, name: 'ধুনট বাজার', type: 'প্রধান বাজার', location: 'ধুনট সদর', phone: '01711000001', openTime: 'সকাল ৮টা - রাত ১০টা' },
    { id: 2, name: 'নতুন বাজার', type: 'সাধারণ বাজার', location: 'নতুন বাজার এলাকা', phone: '01711000002', openTime: 'সকাল ৬টা - রাত ৯টা' },
    { id: 3, name: 'পুরাতন বাজার', type: 'ঐতিহ্যবাহী বাজার', location: 'পুরাতন বাজার এলাকা', phone: '01711000003', openTime: 'সকাল ৭টা - রাত ৮টা' },
    { id: 4, name: 'কৃষি বাজার', type: 'কৃষি পণ্য', location: 'কৃষি এলাকা', phone: '01711000004', openTime: 'সকাল ৫টা - দুপুর ২টা' },
    { id: 5, name: 'মাছ বাজার', type: 'মাছের বাজার', location: 'নদীর পাড়', phone: '01711000005', openTime: 'সকাল ৬টা - দুপুর ১২টা' },
    { id: 6, name: 'সবজি বাজার', type: 'সবজির বাজার', location: 'বাজার এলাকা', phone: '01711000006', openTime: 'সকাল ৬টা - রাত ৯টা' },
    { id: 7, name: 'মাংসের দোকান', type: 'মাংসের বাজার', location: 'কসাই এলাকা', phone: '01711000007', openTime: 'সকাল ৮টা - রাত ৮টা' },
    { id: 8, name: 'ফলের বাজার', type: 'ফলের দোকান', location: 'ফল বিক্রেতা এলাকা', phone: '01711000008', openTime: 'সকাল ৭টা - রাত ১০টা' },
    { id: 9, name: 'মুদি দোকান', type: 'মুদি পণ্য', location: 'আবাসিক এলাকা', phone: '01711000009', openTime: 'সকাল ৭টা - রাত ১১টা' },
    { id: 10, name: 'পোল্ট্রি বাজার', type: 'মুরগির বাজার', location: 'পোল্ট্রি এলাকা', phone: '01711000010', openTime: 'সকাল ৬টা - সন্ধ্যা ৭টা' }
  ];

  const filteredMarkets = markets.filter(market => {
    const matchesSearch = market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         market.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || market.type.includes(filterType);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="flex items-center">
            <ShoppingCart className="mr-2" size={20} />
            <h1 className="text-lg font-bold">আজকের বাজার</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="বাজার খুঁজুন..."
          filterOptions={[
            { value: 'all', label: 'সব বাজার' },
            { value: 'প্রধান', label: 'প্রধান বাজার' },
            { value: 'কৃষি', label: 'কৃষি বাজার' },
            { value: 'মাছ', label: 'মাছের বাজার' }
          ]}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredMarkets.map((market) => (
              <div key={market.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{market.name}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {market.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{market.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${market.phone}`} className="text-blue-600">{market.phone}</a>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{market.openTime}</span>
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

export default TodaysMarket;
