
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Rocket, Phone, MapPin, Building } from 'lucide-react';

const Entrepreneur = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const entrepreneurs = [
    { id: 1, name: 'মোহাম্মদ আলী', business: 'আলী ট্রেডিং কর্পোরেশন', industry: 'আমদানি-রপ্তানি', location: 'ধুনট সদর', phone: '01711000091', established: '২০১০', employees: '৫০+' },
    { id: 2, name: 'রহিমা খানম', business: 'খানম টেক্সটাইল', industry: 'বস্ত্র শিল্প', location: 'ধুনট বাজার', phone: '01711000092', established: '২০১৫', employees: '৩০+' },
    { id: 3, name: 'করিম উদ্দিন', business: 'গ্রিন অ্যাগ্রো ফার্ম', industry: 'কৃষি ব্যবসা', location: 'ধুনট পৌরসভা', phone: '01711000093', established: '২০১২', employees: '২০+' },
    { id: 4, name: 'ফারুক আহমেদ', business: 'ডিজিটাল সলিউশন', industry: 'আইটি সেবা', location: 'ধুনট রেলস্টেশন', phone: '01711000094', established: '২০১৮', employees: '১৫+' },
    { id: 5, name: 'নুরুল ইসলাম', business: 'ইসলামী ফুড প্রোডাক্ট', industry: 'খাদ্য প্রক্রিয়াজাতকরণ', location: 'ধুনট সদর', phone: '01711000095', established: '২০০৮', employees: '৪০+' },
    { id: 6, name: 'সালমা বেগম', business: 'উইমেন ক্র্যাফট', industry: 'হস্তশিল্প', location: 'ধুনট বাজার', phone: '01711000096', established: '২০১৬', employees: '২৫+' },
    { id: 7, name: 'জামাল হোসেন', business: 'কনস্ট্রাকশন কোম্পানি', industry: 'নির্মাণ শিল্প', location: 'ধুনট পৌরসভা', phone: '01711000097', established: '২০০৫', employees: '৬০+' },
    { id: 8, name: 'রোকেয়া খাতুন', business: 'এডুকেশন সেন্টার', industry: 'শিক্ষা সেবা', location: 'ধুনট সদর', phone: '01711000098', established: '২০১৩', employees: '১২+' },
    { id: 9, name: 'ইকবাল হুসাইন', business: 'হেলথ কেয়ার সেবা', industry: 'স্বাস্থ্য সেবা', location: 'ধুনট রেলস্টেশন', phone: '01711000099', established: '২০১৭', employees: '২২+' },
    { id: 10, name: 'হাসান আলী', business: 'ট্রান্সপোর্ট সার্ভিস', industry: 'পরিবহন সেবা', location: 'ধুনট বাজার', phone: '01711000100', established: '২০০৯', employees: '৩৫+' }
  ];

  const filteredEntrepreneurs = entrepreneurs.filter(entrepreneur => {
    const matchesSearch = entrepreneur.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entrepreneur.business.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entrepreneur.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Rocket className="mr-2" size={20} />
            <h1 className="text-lg font-bold">উদ্যোক্তা</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="উদ্যোক্তা বা ব্যবসা খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredEntrepreneurs.map((entrepreneur) => (
              <div key={entrepreneur.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{entrepreneur.name}</h3>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    {entrepreneur.established}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Building size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-orange-600">{entrepreneur.business}</span>
                  </div>
                  <div className="flex items-center">
                    <Rocket size={14} className="mr-2 text-gray-400" />
                    <span>{entrepreneur.industry}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{entrepreneur.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${entrepreneur.phone}`} className="text-blue-600">{entrepreneur.phone}</a>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {entrepreneur.employees} কর্মচারী
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

export default Entrepreneur;
