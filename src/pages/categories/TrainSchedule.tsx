
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Train, MapPin, Clock, Banknote } from 'lucide-react';

const TrainSchedule = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const trainSchedules = [
    { id: 1, trainName: 'ইন্টারসিটি এক্সপ্রেস', route: 'ধুনট - ঢাকা', departure: 'সকাল ৬:৩০', arrival: 'সকাল ১০:১৫', fare: 'শোভন ১৮০, এসি ৩৫০' },
    { id: 2, trainName: 'রংপুর এক্সপ্রেস', route: 'ধুনট - রংপুর', departure: 'দুপুর ১২:৪৫', arrival: 'বিকাল ২:৩০', fare: 'শোভন ১২০, এসি ২৪০' },
    { id: 3, trainName: 'তিস্তা এক্সপ্রেস', route: 'ধুনট - বগুড়া', departure: 'সন্ধ্যা ৫:১৫', arrival: 'সন্ধ্যা ৬:০০', fare: 'শোভন ৬০, এসি ১২০' },
    { id: 4, trainName: 'যমুনা এক্সপ্রেস', route: 'ধুনট - সিরাজগঞ্জ', departure: 'সকাল ৯:০০', arrival: 'সকাল ১১:৩০', fare: 'শোভন ৮০, এসি ১৬০' },
    { id: 5, trainName: 'পদ্মা এক্সপ্রেস', route: 'ধুনট - পাবনা', departure: 'বিকাল ৩:২০', arrival: 'বিকাল ৪:৪৫', fare: 'শোভন ৭০, এসি ১৪০' },
    { id: 6, trainName: 'চট্টলা এক্সপ্রেস', route: 'ধুনট - চট্টগ্রাম', departure: 'রাত ১০:৩০', arrival: 'সকাল ৭:১৫', fare: 'শোভন ৪৫০, এসি ৮৫০' },
    { id: 7, trainName: 'সিলেট মেইল', route: 'ধুনট - সিলেট', departure: 'সন্ধ্যা ৮:০০', arrival: 'ভোর ৪:৩০', fare: 'শোভন ৩৮০, এসি ৭২০' },
    { id: 8, trainName: 'রাজশাহী এক্সপ্রেস', route: 'ধুনট - রাজশাহী', departure: 'সকাল ৭:৪৫', arrival: 'সকাল ১১:০০', fare: 'শোভন ১৫০, এসি ৩০০' },
    { id: 9, trainName: 'যশোর এক্সপ্রেস', route: 'ধুনট - যশোর', departure: 'বিকাল ২:১৫', arrival: 'সন্ধ্যা ৮:৩০', fare: 'শোভন ২৮০, এসি ৫৪০' },
    { id: 10, trainName: 'কুমিল্লা মেইল', route: 'ধুনট - কুমিল্লা', departure: 'সকাল ১১:৩০', arrival: 'বিকাল ৪:১৫', fare: 'শোভন ৩২০, এসি ৬২০' }
  ];

  const filteredSchedules = trainSchedules.filter(schedule => {
    const matchesSearch = schedule.trainName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         schedule.route.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Train className="mr-2" size={20} />
            <h1 className="text-lg font-bold">ট্রেন সময়সূচী</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="ট্রেনের নাম বা রুট খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredSchedules.map((schedule) => (
              <div key={schedule.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{schedule.trainName}</h3>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{schedule.route}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>ছাড়ার সময়: {schedule.departure} | পৌঁছানো: {schedule.arrival}</span>
                  </div>
                  <div className="flex items-center">
                    <Banknote size={14} className="mr-2 text-gray-400" />
                    <span>{schedule.fare}</span>
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

export default TrainSchedule;
