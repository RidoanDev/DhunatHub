
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Stethoscope, Phone, MapPin, Clock, User } from 'lucide-react';

const Doctor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const doctors = [
    { id: 1, name: 'ডা. মোহাম্মদ আলী', specialty: 'হৃদরোগ বিশেষজ্ঞ', hospital: 'ধুনট সদর হাসপাতাল', phone: '01711000001', visitTime: 'সকাল ৯টা - দুপুর ১টা', fee: '৫০০ টাকা' },
    { id: 2, name: 'ডা. রহিমা খানম', specialty: 'গাইনি বিশেষজ্ঞ', hospital: 'মা ও শিশু হাসপাতাল', phone: '01711000002', visitTime: 'বিকাল ৪টা - রাত ৮টা', fee: '৬০০ টাকা' },
    { id: 3, name: 'ডা. করিম উদ্দিন', specialty: 'শিশু বিশেষজ্ঞ', hospital: 'শিশু হাসপাতাল', phone: '01711000003', visitTime: 'সকাল ১০টা - বিকাল ৩টা', fee: '৪৫০ টাকা' },
    { id: 4, name: 'ডা. ফারুক আহমেদ', specialty: 'চর্মরোগ বিশেষজ্ঞ', hospital: 'স্কিন কেয়ার ক্লিনিক', phone: '01711000004', visitTime: 'সন্ধ্যা ৬টা - রাত ৯টা', fee: '৪০০ টাকা' },
    { id: 5, name: 'ডা. নুরুল ইসলাম', specialty: 'অর্থোপেডিক সার্জন', hospital: 'বোন জয়েন্ট হাসপাতাল', phone: '01711000005', visitTime: 'সকাল ৮টা - দুপুর ১২টা', fee: '৭০০ টাকা' },
    { id: 6, name: 'ডা. সালমা বেগম', specialty: 'চোখের ডাক্তার', hospital: 'আই কেয়ার সেন্টার', phone: '01711000006', visitTime: 'বিকাল ৩টা - সন্ধ্যা ৭টা', fee: '৫৫০ টাকা' },
    { id: 7, name: 'ডা. জামাল হোসেন', specialty: 'নিউরোলজিস্ট', hospital: 'ব্রেইন কেয়ার হাসপাতাল', phone: '01711000007', visitTime: 'সকাল ১০টা - বিকাল ২টা', fee: '৮০০ টাকা' },
    { id: 8, name: 'ডা. রোকেয়া খাতুন', specialty: 'মানসিক রোগ বিশেষজ্ঞ', hospital: 'মেন্টাল হেলথ ক্লিনিক', phone: '01711000008', visitTime: 'সন্ধ্যা ৫টা - রাত ৮টা', fee: '৬৫০ টাকা' },
    { id: 9, name: 'ডা. ইকবাল হুসাইন', specialty: 'কিডনি বিশেষজ্ঞ', hospital: 'কিডনি কেয়ার সেন্টার', phone: '01711000009', visitTime: 'সকাল ৯টা - দুপুর ১টা', fee: '৭৫০ টাকা' },
    { id: 10, name: 'ডা. হাসান আলী', specialty: 'সাধারণ চিকিৎসক', hospital: 'জেনারেল হাসপাতাল', phone: '01711000010', visitTime: 'সকাল ৮টা - রাত ১০টা', fee: '৩০০ টাকা' }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || doctor.specialty.includes(filterType);
    return matchesSearch && matchesFilter;
  });

  const handleMapClick = (doctorName: string) => {
    const searchQuery = encodeURIComponent(`${doctorName} ধুনট বগুড়া`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Stethoscope className="mr-2" size={20} />
            <h1 className="text-lg font-bold">ডাক্তার</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="ডাক্তার বা বিশেষত্ব খুঁজুন..."
          filterOptions={[
            { value: 'all', label: 'সব বিশেষত্ব' },
            { value: 'হৃদরোগ', label: 'হৃদরোগ বিশেষজ্ঞ' },
            { value: 'গাইনি', label: 'গাইনি বিশেষজ্ঞ' },
            { value: 'শিশু', label: 'শিশু বিশেষজ্ঞ' },
            { value: 'চর্মরোগ', label: 'চর্মরোগ বিশেষজ্ঞ' }
          ]}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User size={32} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-base">{doctor.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{doctor.specialty}</p>
                    <p className="text-xs text-gray-500">{doctor.hospital}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.open(`tel:${doctor.phone}`, '_self')}
                      className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                      title="কল করুন"
                    >
                      <Phone size={16} />
                    </button>
                    <button
                      onClick={() => handleMapClick(doctor.name)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      title="ম্যাপে দেখুন"
                    >
                      <MapPin size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>সময়: {doctor.visitTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-2 text-gray-400" />
                    <span className="font-semibold text-green-600">ফি: {doctor.fee}</span>
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

export default Doctor;
