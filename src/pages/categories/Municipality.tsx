
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Building, Phone, MapPin, Clock } from 'lucide-react';

const Municipality = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const municipalityOffices = [
    { id: 1, name: 'ধুনট পৌরসভা প্রধান কার্যালয়', mayor: 'মেয়র আব্দুল হামিদ', location: 'ধুনট পৌরসভা', phone: '01711000211', service: 'পৌর সেবা, ট্রেড লাইসেন্স', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 2, name: 'পৌর রাজস্ব বিভাগ', officer: 'রাজস্ব কর্মকর্তা করিম', location: 'ধুনট পৌরসভা', phone: '01711000212', service: 'হোল্ডিং ট্যাক্স, সার্টিফিকেট', timing: 'সকাল ১০টা - বিকাল ৪টা' },
    { id: 3, name: 'পৌর প্রকৌশল বিভাগ', engineer: 'ইঞ্জিনিয়ার আলম', location: 'ধুনট পৌরসভা', phone: '01711000213', service: 'রাস্তাঘাট, নির্মাণ অনুমতি', timing: 'সকাল ৮টা - বিকাল ৪টা' },
    { id: 4, name: 'পৌর স্বাস্থ্য বিভাগ', doctor: 'ডা. নুরুল ইসলাম', location: 'ধুনট পৌরসভা', phone: '01711000214', service: 'স্বাস্থ্য সেবা, পরিচ্ছন্নতা', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 5, name: 'পৌর পরিকল্পনা বিভাগ', planner: 'পরিকল্পনাবিদ রহিম', location: 'ধুনট পৌরসভা', phone: '01711000215', service: 'নগর পরিকল্পনা, জোনিং', timing: 'সকাল ১০টা - বিকাল ৪টা' },
    { id: 6, name: 'পৌর বিদ্যুৎ বিভাগ', electrician: 'ইলেকট্রিশিয়ান সালাম', location: 'ধুনট পৌরসভা', phone: '01711000216', service: 'স্ট্রিট লাইট, বিদ্যুৎ সংযোগ', timing: 'সকাল ৮টা - সন্ধ্যা ৬টা' },
    { id: 7, name: 'পৌর পানি সরবরাহ বিভাগ', manager: 'পানি ব্যবস্থাপক জামাল', location: 'ধুনট পৌরসভা', phone: '01711000217', service: 'পানি সংযোগ, বিল পরিশোধ', timing: 'সকাল ৯টা - বিকাল ৫টা' },
    { id: 8, name: 'পৌর ফায়ার সার্ভিস', captain: 'ফায়ার ক্যাপ্টেন হাসান', location: 'ধুনট পৌরসভা', phone: '01711000218', service: 'অগ্নিনির্বাপণ, উদ্ধার কাজ', timing: '২৪ ঘন্টা' },
    { id: 9, name: 'পৌর আইন বিভাগ', lawyer: 'আইনজীবী নুরুল হক', location: 'ধুনট পৌরসভা', phone: '01711000219', service: 'আইনি পরামর্শ, মামলা', timing: 'সকাল ১০টা - বিকাল ৩টা' },
    { id: 10, name: 'পৌর জনসংযোগ বিভাগ', officer: 'জনসংযোগ কর্মকর্তা ইকবাল', location: 'ধুনট পৌরসভা', phone: '01711000220', service: 'জনগণের অভিযোগ, তথ্য', timing: 'সকাল ৯টা - বিকাল ৫টা' }
  ];

  const filteredOffices = municipalityOffices.filter(office => {
    const matchesSearch = office.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         office.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Building className="mr-2" size={20} />
            <h1 className="text-lg font-bold">পৌরসভা</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="পৌর বিভাগ বা সেবা খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredOffices.map((office) => (
              <div key={office.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{office.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    সরকারি
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Building size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-gray-600">{office.service}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{office.timing}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{office.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${office.phone}`} className="text-blue-600">{office.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {office.mayor || office.officer || office.engineer || office.doctor || office.planner || office.electrician || office.manager || office.captain || office.lawyer}
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

export default Municipality;
