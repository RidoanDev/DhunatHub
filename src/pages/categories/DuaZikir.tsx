
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Heart, Phone, MapPin, Clock } from 'lucide-react';

const DuaZikir = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const duaZikirCenters = [
    { id: 1, name: 'ধুনট ইসলামিক সেন্টার', imam: 'মাওলানা আব্দুল কাদের', location: 'ধুনট সদর', phone: '01711000271', program: 'সকাল-সন্ধ্যা দোয়া মাহফিল', timing: 'ফজর ও মাগরিবের পর' },
    { id: 2, name: 'তাবলিগি জামাত', amir: 'হাজী মোহাম্মদ আলী', location: 'ধুনট বাজার', phone: '01711000272', program: 'সাপ্তাহিক বয়ান ও দোয়া', timing: 'শুক্রবার আসরের পর' },
    { id: 3, name: 'কোরআন শিক্ষা কেন্দ্র', teacher: 'হাফেজ আব্দুর রহমান', location: 'ধুনট পৌরসভা', phone: '01711000273', program: 'তেলাওয়াত ও দোয়া শিক্ষা', timing: 'মাগরিব থেকে এশা' },
    { id: 4, name: 'দারুল উলুম মাদ্রাসা', principal: 'মাওলানা ফজলুর রহমান', location: 'ধুনট রেলস্টেশন', phone: '01711000274', program: 'দৈনিক যিকির মাহফিল', timing: 'আসরের পর' },
    { id: 5, name: 'সুফি খানকাহ', পীর: 'পীর সাহেব হাজী মোহাম্মদ', location: 'ধুনট সদর', phone: '01711000275', program: 'সুফি মুরাকাবা ও যিকির', timing: 'বৃহস্পতিবার রাত' },
    { id: 6, name: 'মহিলা ইসলামি সমিতি', president: 'হাজেরা খাতুন', location: 'ধুনট বাজার', phone: '01711000276', program: 'মহিলাদের দোয়া ও যিকির', timing: 'রোববার বিকাল' },
    { id: 7, name: 'যুব ইসলামি সংঘ', coordinator: 'উস্তাদ তারিক', location: 'ধুনট পৌরসভা', phone: '01711000277', program: 'যুবকদের ইসলামি আলোচনা', timing: 'শনিবার সন্ধ্যা' },
    { id: 8, name: 'রোগী সেবা সমিতি', volunteer: 'ডা. নুরুল হক', location: 'ধুনট সদর', phone: '01711000278', program: 'রোগীদের জন্য দোয়া', timing: 'প্রতিদিন সকাল' },
    { id: 9, name: 'কোরআন তেলাওয়াত সমিতি', qari: 'কারী সাইফুল ইসলাম', location: 'ধুনট রেলস্টেশন', phone: '01711000279', program: 'কোরআন তেলাওয়াত প্রতিযোগিতা', timing: 'মাসিক শুক্রবার' },
    { id: 10, name: 'ইসলামি দাওয়াহ সেন্টার', preacher: 'মাওলানা ইউসুফ', location: 'ধুনট বাজার', phone: '01711000280', program: 'দাওয়াতি কাজ ও দোয়া', timing: 'সাপ্তাহিক মঙ্গলবার' }
  ];

  const filteredCenters = duaZikirCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         center.program.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Heart className="mr-2" size={20} />
            <h1 className="text-lg font-bold">দোয়া-জিকির</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="দোয়া-জিকির কেন্দ্র খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredCenters.map((center) => (
              <div key={center.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{center.name}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    ধর্মীয়
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Heart size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-green-600">{center.program}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>{center.timing}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{center.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${center.phone}`} className="text-blue-600">{center.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {center.imam || center.amir || center.teacher || center.principal || center.পীর || center.president || center.coordinator || center.volunteer || center.qari || center.preacher}
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

export default DuaZikir;
