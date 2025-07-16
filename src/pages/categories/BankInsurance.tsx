
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Landmark, Phone, MapPin, Clock } from 'lucide-react';

const BankInsurance = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const bankInsurances = [
    { id: 1, name: 'সোনালী ব্যাংক ধুনট শাখা', manager: 'মোহাম্মদ আলম', location: 'ধুনট সদর', phone: '01711000221', type: 'সরকারি ব্যাংক', service: 'সঞ্চয় হিসাব, ঋণ সেবা', timing: 'সকাল ১০টা - বিকাল ৪টা' },
    { id: 2, name: 'ইসলামী ব্যাংক ধুনট', manager: 'হাজী আব্দুর রহমান', location: 'ধুনট বাজার', phone: '01711000222', type: 'ইসলামি ব্যাংক', service: 'শরিয়াভিত্তিক ব্যাংকিং', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 3, name: 'ডাচ-বাংলা ব্যাংক', manager: 'রেজাউল করিম', location: 'ধুনট পৌরসভা', phone: '01711000223', type: 'বেসরকারি ব্যাংক', service: 'এটিএম, অনলাইন ব্যাংকিং', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 4, name: 'গ্রামীণ ব্যাংক ধুনট', officer: 'নুরুল ইসলাম', location: 'ধুনট রেলস্টেশন', phone: '01711000224', type: 'ক্ষুদ্রঋণ ব্যাংক', service: 'ক্ষুদ্রঋণ, গ্রামীণ উন্নয়ন', timing: 'সকাল ৮টা - বিকাল ৪টা' },
    { id: 5, name: 'আইএফআইসি ব্যাংক', manager: 'সালমান খান', location: 'ধুনট সদর', phone: '01711000225', type: 'বেসরকারি ব্যাংক', service: 'কর্পোরেট ব্যাংকিং', timing: 'সকাল ১০টা - বিকাল ৪টা' },
    { id: 6, name: 'ডেল্টা লাইফ ইন্স্যুরেন্স', agent: 'তারিক আহমেদ', location: 'ধুনট বাজার', phone: '01711000226', type: 'জীবন বীমা', service: 'জীবন বীমা, সঞ্চয় পরিকল্পনা', timing: 'সকাল ৯টা - সন্ধ্যা ৬টা' },
    { id: 7, name: 'মেঘনা লাইফ ইন্স্যুরেন্স', officer: 'ফারুক আহমেদ', location: 'ধুনট পৌরসভা', phone: '01711000227', type: 'জীবন বীমা', service: 'শিক্ষা বীমা, পেনশন', timing: 'সকাল ১০টা - বিকাল ৫টা' },
    { id: 8, name: 'নর্থইস্ট ইন্স্যুরেন্স', manager: 'জামাল হোসেন', location: 'ধুনট সদর', phone: '01711000228', type: 'সাধারণ বীমা', service: 'গাড়ি বীমা, বাড়ি বীমা', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 9, name: 'পূবালী ব্যাংক', manager: 'ইকবাল হুসাইন', location: 'ধুনট রেলস্টেশন', phone: '01711000229', type: 'বেসরকারি ব্যাংক', service: 'ব্যবসায়িক হিসাব, এসএমই ঋণ', timing: 'সকাল ৯টা - বিকাল ৪টা' },
    { id: 10, name: 'এমটিবিএল মোবাইল ব্যাংক', agent: 'হাসান আলী', location: 'ধুনট বাজার', phone: '01711000230', type: 'মোবাইল ব্যাংক', service: 'মোবাইল ব্যাংকিং, বিকাশ', timing: 'সকাল ৮টা - রাত ১০টা' }
  ];

  const filteredBankInsurances = bankInsurances.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Landmark className="mr-2" size={20} />
            <h1 className="text-lg font-bold">ব্যাংক-বীমা</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="ব্যাংক বা বীমা প্রতিষ্ঠান খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredBankInsurances.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{item.name}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Landmark size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-green-600">{item.service}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{item.timing}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${item.phone}`} className="text-blue-600">{item.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">{item.manager || item.officer || item.agent}</span>
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

export default BankInsurance;
