
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { HandHeart, Phone, MapPin, Clock } from 'lucide-react';

const GeneralHelp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const helpServices = [
    { id: 1, name: 'ধুনট সমাজসেবা অফিস', officer: 'সমাজসেবা অফিসার রহিম', location: 'ধুনট সদর', phone: '01711000251', service: 'বয়স্ক ভাতা, বিধবা ভাতা', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 2, name: 'দুর্গত মানবতা সেবা সংস্থা', president: 'আব্দুর রশিদ', location: 'ধুনট বাজার', phone: '01711000252', service: 'দুর্যোগকালীন সাহায্য', timing: '২৪ ঘন্টা' },
    { id: 3, name: 'ধুনট মহিলা সমিতি', chairperson: 'রোকেয়া বেগম', location: 'ধুনট পৌরসভা', phone: '01711000253', service: 'মহিলাদের আইনি সহায়তা', timing: 'সকাল ১০টা - বিকাল ৪টা' },
    { id: 4, name: 'শিশু সহায় কেন্দ্র', coordinator: 'নুরুল আমিন', location: 'ধুনট রেলস্টেশন', phone: '01711000254', service: 'পথশিশুদের সাহায্য', timing: 'সকাল ৮টা - সন্ধ্যা ৬টা' },
    { id: 5, name: 'বয়স্ক সেবা কেন্দ্র', manager: 'ডা. ফারুক আহমেদ', location: 'ধুনট সদর', phone: '01711000255', service: 'বয়স্কদের চিকিৎসা সেবা', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 6, name: 'প্রতিবন্ধী কল্যাণ সমিতি', secretary: 'জামাল হোসেন', location: 'ধুনট বাজার', phone: '01711000256', service: 'প্রতিবন্ধীদের পুনর্বাসন', timing: 'সকাল ১০টা - বিকাল ৪টা' },
    { id: 7, name: 'দরিদ্র তহবিল কমিটি', chairman: 'হাজী সালাম', location: 'ধুনট পৌরসভা', phone: '01711000257', service: 'দরিদ্রদের আর্থিক সাহায্য', timing: 'সকাল ৯টা - দুপুর ১টা' },
    { id: 8, name: 'মানসিক স্বাস্থ্য সেবা', counselor: 'মনোবিদ তানিয়া', location: 'ধুনট সদর', phone: '01711000258', service: 'মানসিক স্বাস্থ্য পরামর্শ', timing: 'বিকাল ২টা - সন্ধ্যা ৬টা' },
    { id: 9, name: 'আইনি সহায়তা কেন্দ্র', lawyer: 'আইনজীবী করিম', location: 'ধুনট রেলস্টেশন', phone: '01711000259', service: 'বিনামূল্যে আইনি পরামর্শ', timing: 'সকাল ১০টা - বিকাল ৩টা' },
    { id: 10, name: 'জরুরি সাহায্য হটলাইন', operator: 'কল সেন্টার টিম', location: 'ধুনট বাজার', phone: '01711000260', service: 'যেকোনো জরুরি সাহায্য', timing: '২৪ ঘন্টা' }
  ];

  const filteredServices = helpServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center">
            <HandHeart className="mr-2" size={20} />
            <h1 className="text-lg font-bold">সাধারণ সাহায্য</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="সাহায্য সেবা খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{service.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    সাহায্য
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <HandHeart size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-blue-600">{service.service}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{service.timing}</span>
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
                    <span className="text-xs text-gray-500">
                      {service.officer || service.president || service.chairperson || service.coordinator || service.manager || service.secretary || service.chairman || service.counselor || service.lawyer || service.operator}
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

export default GeneralHelp;
