
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { TreePine, Phone, MapPin, Leaf } from 'lucide-react';

const Nursery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const nurseries = [
    { id: 1, name: 'গ্রিন গার্ডেন নার্সারি', owner: 'মোহাম্মদ আলী', location: 'ধুনট সদর', phone: '01711000131', speciality: 'ফুলের চারা, সবজির বীজ', established: '২০১০' },
    { id: 2, name: 'রেইনবো নার্সারি', owner: 'রহিমা খানম', location: 'ধুনট বাজার', phone: '01711000132', speciality: 'ইনডোর প্ল্যান্ট, অর্কিড', established: '২০১৫' },
    { id: 3, name: 'এভারগ্রিন নার্সারি', owner: 'করিম উদ্দিন', location: 'ধুনট পৌরসভা', phone: '01711000133', speciality: 'ফলের গাছ, ছায়াদানকারী গাছ', established: '২০০৮' },
    { id: 4, name: 'ফ্রেশ লিফ নার্সারি', owner: 'ফারুক আহমেদ', location: 'ধুনট রেলস্টেশন', phone: '01711000134', speciality: 'ক্যাকটাস, সাকুলেন্ট', established: '২০১৮' },
    { id: 5, name: 'ন্যাচারাল গার্ডেন', owner: 'নুরুল ইসলাম', location: 'ধুনট সদর', phone: '01711000135', speciality: 'ঔষধি গাছ, হার্বাল প্ল্যান্ট', established: '২০১২' },
    { id: 6, name: 'ব্লুম নার্সারি', owner: 'সালমা বেগম', location: 'ধুনট বাজার', phone: '01711000136', speciality: 'গোলাপ, জুঁই', established: '২০১৬' },
    { id: 7, name: 'ট্রপিক্যাল গার্ডেন', owner: 'জামাল হোসেন', location: 'ধুনট পৌরসভা', phone: '01711000137', speciality: 'পাম গাছ, বাঁশ', established: '২০০৫' },
    { id: 8, name: 'হার্ব এন্ড স্পাইস', owner: 'রোকেয়া খাতুন', location: 'ধুনট সদর', phone: '01711000138', speciality: 'মসলার গাছ, পুদিনা', established: '২০১৯' },
    { id: 9, name: 'অর্গানিক নার্সারি', owner: 'ইকবাল হুসাইন', location: 'ধুনট রেলস্টেশন', phone: '01711000139', speciality: 'জৈব সার, কম্পোস্ট', established: '২০১৩' },
    { id: 10, name: 'ফ্লাওয়ার পাওয়ার', owner: 'হাসান আলী', location: 'ধুনট বাজার', phone: '01711000140', speciality: 'বনসাই, মিনি প্ল্যান্ট', established: '২০১৭' }
  ];

  const filteredNurseries = nurseries.filter(nursery => {
    const matchesSearch = nursery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         nursery.speciality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="flex items-center">
            <TreePine className="mr-2" size={20} />
            <h1 className="text-lg font-bold">নার্সারি</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="নার্সারি বা গাছ খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredNurseries.map((nursery) => (
              <div key={nursery.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{nursery.name}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {nursery.established}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Leaf size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-green-600">{nursery.speciality}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{nursery.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${nursery.phone}`} className="text-blue-600">{nursery.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">মালিক: {nursery.owner}</span>
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

export default Nursery;
