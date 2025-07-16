
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Building, MapPin, Phone, Star } from 'lucide-react';

const Hotel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const hotels = [
    { id: 1, name: 'ধুনট রেস্ট হাউস', location: 'ধুনট সদর', rating: 4, type: 'রেস্ট হাউস', phone: '01711000001', facilities: 'AC, WiFi, পার্কিং' },
    { id: 2, name: 'হোটেল রয়েল', location: 'বাজার এলাকা', rating: 3, type: 'হোটেল', phone: '01711000002', facilities: 'রেস্টুরেন্ট, রুম সার্ভিস' },
    { id: 3, name: 'গেস্ট হাউস শান্তি', location: 'শান্ত এলাকা', rating: 4, type: 'গেস্ট হাউস', phone: '01711000003', facilities: 'পরিষ্কার রুম, নিরাপত্তা' },
    { id: 4, name: 'হোটেল সোনালী', location: 'কেন্দ্রীয় এলাকা', rating: 3, type: 'হোটেল', phone: '01711000004', facilities: 'লন্ড্রি, জেনারেটর' },
    { id: 5, name: 'ট্রানজিট ইন', location: 'বাস স্ট্যান্ড', rating: 2, type: 'ইন', phone: '01711000005', facilities: 'সাশ্রয়ী, পরিবহন সুবিধা' },
    { id: 6, name: 'হোটেল প্রিমিয়াম', location: 'আবাসিক এলাকা', rating: 5, type: 'হোটেল', phone: '01711000006', facilities: 'লাক্সারি রুম, স্পা' },
    { id: 7, name: 'রেস্ট ইন ধুনট', location: 'নতুন এলাকা', rating: 3, type: 'রেস্ট ইন', phone: '01711000007', facilities: 'ফ্যামিলি রুম, খেলার জায়গা' },
    { id: 8, name: 'হোটেল গার্ডেন', location: 'পার্ক এলাকা', rating: 4, type: 'হোটেল', phone: '01711000008', facilities: 'বাগান দৃশ্য, বারান্দা' },
    { id: 9, name: 'বোর্ডিং হাউস', location: 'কলেজ এলাকা', rating: 2, type: 'বোর্ডিং', phone: '01711000009', facilities: 'ছাত্র/ছাত্রী উপযোগী' },
    { id: 10, name: 'হোটেল দিগন্ত', location: 'মূল রাস্তা', rating: 4, type: 'হোটেল', phone: '01711000010', facilities: 'কনফারেন্স রুম, ইভেন্ট হল' }
  ];

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || hotel.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Building className="mr-2" size={20} />
            <h1 className="text-lg font-bold">হোটেল</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="হোটেল বা এলাকা খুঁজুন..."
          filterOptions={[
            { value: 'all', label: 'সব ধরনের' },
            { value: 'হোটেল', label: 'হোটেল' },
            { value: 'গেস্ট হাউস', label: 'গেস্ট হাউস' },
            { value: 'রেস্ট হাউস', label: 'রেস্ট হাউস' }
          ]}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{hotel.name}</h3>
                  <div className="flex items-center">
                    <Star size={12} className="text-yellow-500 mr-1" />
                    <span className="text-xs text-gray-600">{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Building size={14} className="mr-2 text-gray-400" />
                    <span>{hotel.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${hotel.phone}`} className="text-blue-600">{hotel.phone}</a>
                  </div>
                  <p className="text-gray-500 text-xs">{hotel.facilities}</p>
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

export default Hotel;
