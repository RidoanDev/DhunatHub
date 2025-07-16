
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Package, Phone, MapPin, Clock } from 'lucide-react';

const CourierService = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const courierServices = [
    { id: 1, name: 'সুন্দরবন কুরিয়ার সার্ভিস', manager: 'মোহাম্মদ আলম', location: 'ধুনট সদর', phone: '01711000171', service: 'সারাদেশ ডেলিভারি', timing: '২৪-৪৮ ঘন্টা', price: '৬০-১২০ টাকা' },
    { id: 2, name: 'পথিক কুরিয়ার', owner: 'আব্দুর রহমান', location: 'ধুনট বাজার', phone: '01711000172', service: 'ঢাকা ও চট্টগ্রাম', timing: '১২-২৪ ঘন্টা', price: '৮০-১৫০ টাকা' },
    { id: 3, name: 'এসএ পরিবহন', manager: 'সালেহ আহমেদ', location: 'ধুনট পৌরসভা', phone: '01711000173', service: 'দেশব্যাপী কুরিয়ার', timing: '১-৩ দিন', price: '৫০-১০০ টাকা' },
    { id: 4, name: 'রেডএক্স এক্সপ্রেস', agent: 'নুরুল আমিন', location: 'ধুনট রেলস্টেশন', phone: '01711000174', service: 'আন্তর্জাতিক কুরিয়ার', timing: '৩-৭ দিন', price: '২০০-৫০০ টাকা' },
    { id: 5, name: 'ফাস্ট ট্র্যাক কুরিয়ার', owner: 'জামিল হোসেন', location: 'ধুনট সদর', phone: '01711000175', service: 'জরুরি ডেলিভারি', timing: '৬-১২ ঘন্টা', price: '১২০-২৫০ টাকা' },
    { id: 6, name: 'বিডি কুরিয়ার', manager: 'ইকবাল হুসাইন', location: 'ধুনট বাজার', phone: '01711000176', service: 'অনলাইন অর্ডার ডেলিভারি', timing: '১-২ দিন', price: '৭০-১৩০ টাকা' },
    { id: 7, name: 'স্পিড পোস্ট বাংলাদেশ', postmaster: 'আব্দুল করিম', location: 'ধুনট পৌরসভা', phone: '01711000177', service: 'সরকারি কুরিয়ার', timing: '২-৪ দিন', price: '৪০-৯০ টাকা' },
    { id: 8, name: 'ঢাকা কুরিয়ার সার্ভিস', agent: 'হাসান আলী', location: 'ধুনট সদর', phone: '01711000178', service: 'ঢাকা স্পেশাল সার্ভিস', timing: '১২ ঘন্টা', price: '১০০-১৮০ টাকা' },
    { id: 9, name: 'গ্লোবাল এক্সপ্রেস', manager: 'রফিক উদ্দিন', location: 'ধুনট রেলস্টেশন', phone: '01711000179', service: 'বিদেশ পার্সেল', timing: '৫-১০ দিন', price: '৩০০-৮০০ টাকা' },
    { id: 10, name: 'লোকাল ডেলিভারি সার্ভিস', owner: 'করিম মিয়া', location: 'ধুনট বাজার', phone: '01711000180', service: 'স্থানীয় ডেলিভারি', timing: '২-৬ ঘন্টা', price: '৩০-৬০ টাকা' }
  ];

  const filteredServices = courierServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Package className="mr-2" size={20} />
            <h1 className="text-lg font-bold">কুরিয়ার সেবা</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="কুরিয়ার সেবা খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{service.name}</h3>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Package size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-orange-600">{service.service}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>ডেলিভারি সময়: {service.timing}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${service.phone}`} className="text-blue-600">{service.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">{service.manager || service.owner || service.agent || service.postmaster}</span>
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

export default CourierService;
