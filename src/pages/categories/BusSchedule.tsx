import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Bus, MapPin, Clock, Phone } from 'lucide-react';

const BusSchedule = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const busSchedules = [
    { id: 1, route: 'ধুনট - ঢাকা', company: 'শ্যামলী পরিবহন', departure: 'সকাল ৭:০০', fare: '৩৫০ টাকা', phone: '01711000001', destination: 'ঢাকা' },
    { id: 2, route: 'ধুনট - রংপুর', company: 'এস আর ট্রাভেলস', departure: 'সকাল ৮:৩০', fare: '১৫০ টাকা', phone: '01711000002', destination: 'রংপুর' },
    { id: 3, route: 'ধুনট - বগুড়া', company: 'হানিফ এন্টারপ্রাইজ', departure: 'সকাল ৬:৪৫', fare: '৮০ টাকা', phone: '01711000003', destination: 'বগুড়া' },
    { id: 4, route: 'ধুনট - সিরাজগঞ্জ', company: 'নাবিল পরিবহন', departure: 'সন্ধ্যা ৬:১৫', fare: '১২০ টাকা', phone: '01711000004', destination: 'সিরাজগঞ্জ' },
    { id: 5, route: 'ধুনট - পাবনা', company: 'রয়েল কোচ', departure: 'দুপুর ১২:৩০', fare: '১০০ টাকা', phone: '01711000005', destination: 'পাবনা' },
    { id: 6, route: 'ধুনট - চট্টগ্রাম', company: 'গ্রিন লাইন', departure: 'রাত ৯:০০', fare: '৫৫০ টাকা', phone: '01711000006', destination: 'চট্টগ্রাম' },
    { id: 7, route: 'ধুনট - সিলেট', company: 'শান্তি পরিবহন', departure: 'সন্ধ্যা ৭:৩০', fare: '৪৫০ টাকা', phone: '01711000007', destination: 'সিলেট' },
    { id: 8, route: 'ধুনট - রাজশাহী', company: 'দেশ ট্রাভেলস', departure: 'সকাল ৯:১৫', fare: '২০০ টাকা', phone: '01711000008', destination: 'রাজশাহী' },
    { id: 9, route: 'ধুনট - যশোর', company: 'সোহাগ পরিবহন', departure: 'বিকাল ৩:৪৫', fare: '৩০০ টাকা', phone: '01711000009', destination: 'যশোর' },
    { id: 10, route: 'ধুনট - কুমিল্লা', company: 'তৃষা পরিবহন', departure: 'সকাল ১০:০০', fare: '৩৮০ টাকা', phone: '01711000010', destination: 'কুমিল্লা' }
  ];

  const destinationOptions = [
    { value: 'ঢাকা', label: 'ঢাকা' },
    { value: 'চট্টগ্রাম', label: 'চট্টগ্রাম' },
    { value: 'রংপুর', label: 'রংপুর' },
    { value: 'বগুড়া', label: 'বগুড়া' },
    { value: 'রাজশাহী', label: 'রাজশাহী' },
    { value: 'সিলেট', label: 'সিলেট' }
  ];

  const filteredSchedules = busSchedules.filter(schedule => {
    const matchesSearch = schedule.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         schedule.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || schedule.destination === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Bus className="mr-2" size={20} />
            <h1 className="text-lg font-bold">বাস সময়সূচী</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="গন্তব্য বা কোম্পানি খুঁজুন..."
          filterOptions={destinationOptions}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredSchedules.map((schedule) => (
              <div key={schedule.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{schedule.route}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {schedule.fare}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bus size={14} className="mr-2 text-gray-400" />
                    <span>{schedule.company}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>ছাড়ার সময়: {schedule.departure}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${schedule.phone}`} className="text-blue-600">{schedule.phone}</a>
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

export default BusSchedule;
