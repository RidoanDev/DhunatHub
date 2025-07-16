
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Globe, Phone, MapPin, ExternalLink } from 'lucide-react';

const Website = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const websites = [
    { id: 1, name: 'ধুনট সরকারি ওয়েবসাইট', admin: 'উপজেলা নির্বাহী কর্মকর্তা', url: 'dhunat.bogura.gov.bd', phone: '01711000201', type: 'সরকারি', description: 'উপজেলার সকল সরকারি তথ্য ও সেবা' },
    { id: 2, name: 'ধুনট নিউজ পোর্টাল', editor: 'জহিরুল ইসলাম', url: 'dhunatnews24.com', phone: '01711000202', type: 'সংবাদ', description: 'স্থানীয় সংবাদ ও আপডেট' },
    { id: 3, name: 'ধুনট শিক্ষা বোর্ড', coordinator: 'প্রফেসর আলম', url: 'dhunat-education.org', phone: '01711000203', type: 'শিক্ষা', description: 'শিক্ষা প্রতিষ্ঠান ও ফলাফল' },
    { id: 4, name: 'ধুনট ব্যবসায়ী সমিতি', president: 'হাজী আব্দুল মালেক', url: 'dhunat-business.com', phone: '01711000204', type: 'ব্যবসা', description: 'স্থানীয় ব্যবসা ও বাণিজ্য তথ্য' },
    { id: 5, name: 'ধুনট হাসপাতাল', director: 'ডা. রেজাউল করিম', url: 'dhunat-hospital.bd', phone: '01711000205', type: 'স্বাস্থ্য', description: 'হাসপাতাল সেবা ও ডাক্তার তালিকা' },
    { id: 6, name: 'ধুনট কৃষি বিভাগ', officer: 'কৃষিবিদ রহমান', url: 'dhunat-agriculture.gov.bd', phone: '01711000206', type: 'কৃষি', description: 'কৃষি পরামর্শ ও প্রযুক্তি' },
    { id: 7, name: 'ধুনট পর্যটন গাইড', developer: 'তানভীর হাসান', url: 'visit-dhunat.com', phone: '01711000207', type: 'পর্যটন', description: 'দর্শনীয় স্থান ও ভ্রমণ গাইড' },
    { id: 8, name: 'ধুনট অনলাইন মার্কেট', founder: 'সালমান খান', url: 'dhunat-market.bd', phone: '01711000208', type: 'ই-কমার্স', description: 'স্থানীয় পণ্য অনলাইন কেনাকাটা' },
    { id: 9, name: 'ধুনট যুব উন্নয়ন', coordinator: 'রাকিব হোসেন', url: 'dhunat-youth.org', phone: '01711000209', type: 'সামাজিক', description: 'যুবদের দক্ষতা ও কর্মসংস্থান' },
    { id: 10, name: 'ধুনট টেক সল্যুশন', ceo: 'সাকিব আল হাসান', url: 'dhunat-tech.com', phone: '01711000210', type: 'প্রযুক্তি', description: 'ওয়েবসাইট ও সফটওয়্যার সেবা' }
  ];

  const filteredWebsites = websites.filter(website => {
    const matchesSearch = website.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         website.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         website.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Globe className="mr-2" size={20} />
            <h1 className="text-lg font-bold">ওয়েবসাইট</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="ওয়েবসাইট খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredWebsites.map((website) => (
              <div key={website.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{website.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {website.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Globe size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-blue-600">{website.description}</span>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink size={14} className="mr-2 text-gray-400" />
                    <a href={`https://${website.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {website.url}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${website.phone}`} className="text-blue-600">{website.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {website.admin || website.editor || website.coordinator || website.president || website.director || website.officer || website.developer || website.founder || website.ceo}
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

export default Website;
