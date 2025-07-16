
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Scale, Phone, MapPin, Clock } from 'lucide-react';

const Lawyer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const lawyers = [
    { id: 1, name: 'ব্যারিস্টার মোহাম্মদ আলী', specialization: 'ফৌজদারি আইন', chamber: 'ধুনট কোর্ট', phone: '01711000061', experience: '১৫ বছর', consultation: '৫০০ টাকা' },
    { id: 2, name: 'অ্যাডভোকেট রহিমা খানম', specialization: 'পারিবারিক আইন', chamber: 'ধুনট বার অ্যাসোসিয়েশন', phone: '01711000062', experience: '১২ বছর', consultation: '৪০০ টাকা' },
    { id: 3, name: 'ব্যারিস্টার করিম উদ্দিন', specialization: 'সাংবিধানিক আইন', chamber: 'সুপ্রিম কোর্ট চেম্বার', phone: '01711000063', experience: '২০ বছর', consultation: '১০০০ টাকা' },
    { id: 4, name: 'অ্যাডভোকেট ফারুক আহমেদ', specialization: 'ভূমি আইন', chamber: 'ধুনট আদালত', phone: '01711000064', experience: '১০ বছর', consultation: '৩০০ টাকা' },
    { id: 5, name: 'ব্যারিস্টার নুরুল ইসলাম', specialization: 'কর্পোরেট আইন', chamber: 'বিজনেস ল চেম্বার', phone: '01711000065', experience: '১৮ বছর', consultation: '৮০০ টাকা' },
    { id: 6, name: 'অ্যাডভোকেট সালমা বেগম', specialization: 'নারী ও শিশু অধিকার', chamber: 'মানবাধিকার চেম্বার', phone: '01711000066', experience: '৮ বছর', consultation: '৩৫০ টাকা' },
    { id: 7, name: 'ব্যারিস্টার জামাল হোসেন', specialization: 'আন্তর্জাতিক আইন', chamber: 'আন্তর্জাতিক আইন চেম্বার', phone: '01711000067', experience: '২২ বছর', consultation: '১২০০ টাকা' },
    { id: 8, name: 'অ্যাডভোকেট সালাম উল্লাহ', specialization: 'শ্রম আইন', chamber: 'শ্রমিক আইনজীবী সংঘ', phone: '01711000068', experience: '৭ বছর', consultation: '২৫০ টাকা' },
    { id: 9, name: 'ব্যারিস্টার ইকবাল হুসাইন', specialization: 'সাইবার আইন', chamber: 'ডিজিটাল আইন চেম্বার', phone: '01711000069', experience: '৫ বছর', consultation: '৬০০ টাকা' },
    { id: 10, name: 'অ্যাডভোকেট হাসান আলী', specialization: 'পরিবেশ আইন', chamber: 'পরিবেশ আইন চেম্বার', phone: '01711000070', experience: '৯ বছর', consultation: '৪৫০ টাকা' }
  ];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-4">
          <div className="flex items-center">
            <Scale className="mr-2" size={20} />
            <h1 className="text-lg font-bold">আইনজীবী</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="আইনজীবী বা বিশেষত্ব খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredLawyers.map((lawyer) => (
              <div key={lawyer.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{lawyer.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {lawyer.experience}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Scale size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-blue-600">{lawyer.specialization}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{lawyer.chamber}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span className="font-semibold text-green-600">পরামর্শ ফি: {lawyer.consultation}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${lawyer.phone}`} className="text-blue-600">{lawyer.phone}</a>
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

export default Lawyer;
