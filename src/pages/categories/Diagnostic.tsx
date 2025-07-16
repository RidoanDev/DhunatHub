
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Activity, Phone, MapPin, Clock } from 'lucide-react';

const Diagnostic = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const diagnostics = [
    { id: 1, name: 'ধুনট ডায়াগনস্টিক সেন্টার', address: 'ধুনট সদর, বগুড়া', phone: '01711000021', services: 'এক্স-রে, আল্ট্রাসাউন্ড, ইসিজি', hours: 'সকাল ৮টা - রাত ৮টা', price: 'সাশ্রয়ী' },
    { id: 2, name: 'আধুনিক ল্যাব', address: 'ধুনট বাজার, বগুড়া', phone: '01711000022', services: 'রক্ত পরীক্ষা, মূত্র পরীক্ষা', hours: 'সকাল ৭টা - সন্ধ্যা ৯টা', price: 'মধ্যম' },
    { id: 3, name: 'হেলথ কেয়ার ল্যাব', address: 'ধুনট পৌরসভা, বগুড়া', phone: '01711000023', services: 'সিটি স্ক্যান, এমআরআই', hours: 'সকাল ৯টা - সন্ধ্যা ৭টা', price: 'উচ্চ' },
    { id: 4, name: 'কেয়ার ডায়াগনস্টিক', address: 'ধুনট রেলস্টেশন, বগুড়া', phone: '01711000024', services: 'প্যাথলজি, বায়োকেমিস্ট্রি', hours: 'সকাল ৮টা - রাত ১০টা', price: 'সাশ্রয়ী' },
    { id: 5, name: 'মেডিকেল ইমেজিং সেন্টার', address: 'ধুনট সদর, বগুড়া', phone: '01711000025', services: 'আল্ট্রাসাউন্ড, ডপলার', hours: 'সকাল ৯টা - সন্ধ্যা ৬টা', price: 'মধ্যম' },
    { id: 6, name: 'ল্যাব এইড', address: 'ধুনট বাজার, বগুড়া', phone: '01711000026', services: 'হরমোন টেস্ট, ক্যান্সার মার্কার', hours: 'সকাল ৭টা - সন্ধ্যা ৮টা', price: 'উচ্চ' },
    { id: 7, name: 'পপুলার ডায়াগনস্টিক', address: 'ধুনট পৌরসভা, বগুড়া', phone: '01711000027', services: 'মাইক্রোবায়োলজি, হিস্টোপ্যাথলজি', hours: 'সকাল ৮টা - রাত ৯টা', price: 'মধ্যম' },
    { id: 8, name: 'কিউর ল্যাব', address: 'ধুনট সদর, বগুড়া', phone: '01711000028', services: 'ডায়াবেটিস টেস্ট, লিভার ফাংশন', hours: 'সকাল ৬টা - সন্ধ্যা ৭টা', price: 'সাশ্রয়ী' },
    { id: 9, name: 'প্রাইম ডায়াগনস্টিক', address: 'ধুনট রেলস্টেশন, বগুড়া', phone: '01711000029', services: 'কিডনি ফাংশন, থাইরয়েড টেস্ট', hours: 'সকাল ৮টা - সন্ধ্যা ৮টা', price: 'মধ্যম' },
    { id: 10, name: 'হেলথ চেক ল্যাব', address: 'ধুনট বাজার, বগুড়া', phone: '01711000030', services: 'সম্পূর্ণ স্বাস্থ্য পরীক্ষা', hours: 'সকাল ৭টা - রাত ১০টা', price: 'বিভিন্ন' }
  ];

  const filteredDiagnostics = diagnostics.filter(diagnostic => {
    const matchesSearch = diagnostic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         diagnostic.services.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Activity className="mr-2" size={20} />
            <h1 className="text-lg font-bold">ডায়াগনস্টিক</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="ডায়াগনস্টিক সেন্টার খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredDiagnostics.map((diagnostic) => (
              <div key={diagnostic.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{diagnostic.name}</h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {diagnostic.price}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{diagnostic.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>সময়: {diagnostic.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${diagnostic.phone}`} className="text-blue-600">{diagnostic.phone}</a>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    <strong>সেবাসমূহ:</strong> {diagnostic.services}
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

export default Diagnostic;
