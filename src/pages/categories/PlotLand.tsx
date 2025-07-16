
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Home, Phone, MapPin, DollarSign } from 'lucide-react';

const PlotLand = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const plots = [
    { id: 1, title: '৫ কাঠা প্লট বিক্রয়', location: 'ধুনট সদর', price: '১৫ লক্ষ টাকা', owner: 'মোহাম্মদ আলী', phone: '01711000111', type: 'আবাসিক', status: 'বিক্রয়ের জন্য' },
    { id: 2, title: '১০ কাঠা কৃষি জমি', location: 'ধুনট বাজার', price: '২৫ লক্ষ টাকা', owner: 'রহিম উদ্দিন', phone: '01711000112', type: 'কৃষি', status: 'বিক্রয়ের জন্য' },
    { id: 3, title: '৩ কাঠা বাণিজ্যিক প্লট', location: 'ধুনট পৌরসভা', price: '৩০ লক্ষ টাকা', owner: 'করিম মিয়া', phone: '01711000113', type: 'বাণিজ্যিক', status: 'ভাড়ার জন্য' },
    { id: 4, title: '৮ কাঠা আবাসিক জমি', location: 'ধুনট রেলস্টেশন', price: '২০ লক্ষ টাকা', owner: 'ফারুক আহমেদ', phone: '01711000114', type: 'আবাসিক', status: 'বিক্রয়ের জন্য' },
    { id: 5, title: '১৫ কাঠা বড় প্লট', location: 'ধুনট সদর', price: '৪৫ লক্ষ টাকা', owner: 'নুরুল ইসলাম', phone: '01711000115', type: 'আবাসিক', status: 'বিক্রয়ের জন্য' },
    { id: 6, title: '২ কাঠা দোকান প্লট', location: 'ধুনট বাজার', price: '১৮ লক্ষ টাকা', owner: 'সালমা বেগম', phone: '01711000116', type: 'বাণিজ্যিক', status: 'বিক্রয়ের জন্য' },
    { id: 7, title: '৬ কাঠা কৃষি জমি', location: 'ধুনট পৌরসভা', price: '১২ লক্ষ টাকা', owner: 'জামাল হোসেন', phone: '01711000117', type: 'কৃষি', status: 'ভাড়ার জন্য' },
    { id: 8, title: '৪ কাঠা প্রাইম লোকেশন', location: 'ধুনট সদর', price: '৩৫ লক্ষ টাকা', owner: 'রোকেয়া খাতুন', phone: '01711000118', type: 'আবাসিক', status: 'বিক্রয়ের জন্য' },
    { id: 9, title: '১২ কাঠা ইন্ডাস্ট্রিয়াল প্লট', location: 'ধুনট রেলস্টেশন', price: '৫০ লক্ষ টাকা', owner: 'ইকবাল হুসাইন', phone: '01711000119', type: 'ইন্ডাস্ট্রিয়াল', status: 'বিক্রয়ের জন্য' },
    { id: 10, title: '৭ কাঠা রেডি প্লট', location: 'ধুনট বাজার', price: '২২ লক্ষ টাকা', owner: 'হাসান আলী', phone: '01711000120', type: 'আবাসিক', status: 'বিক্রয়ের জন্য' }
  ];

  const filteredPlots = plots.filter(plot => {
    const matchesSearch = plot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plot.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Home className="mr-2" size={20} />
            <h1 className="text-lg font-bold">প্লট বা জমি</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="প্লট বা জমি খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredPlots.map((plot) => (
              <div key={plot.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{plot.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    plot.status === 'বিক্রয়ের জন্য' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {plot.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Home size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-green-600">{plot.type}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{plot.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={14} className="mr-2 text-gray-400" />
                    <span className="font-semibold text-green-600">{plot.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${plot.phone}`} className="text-blue-600">{plot.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">মালিক: {plot.owner}</span>
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

export default PlotLand;
