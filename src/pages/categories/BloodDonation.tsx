
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Heart, Phone, MapPin, User, Calendar } from 'lucide-react';

const BloodDonation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const donors = [
    { id: 1, name: 'আহমেদ হাসান', bloodGroup: 'A+', location: 'ধুনট সদর', phone: '01711000031', lastDonation: '৩ মাস আগে', availability: 'সহজলভ্য' },
    { id: 2, name: 'ফারুক আহমেদ', bloodGroup: 'B+', location: 'ধুনট বাজার', phone: '01711000032', lastDonation: '৪ মাস আগে', availability: 'সহজলভ্য' },
    { id: 3, name: 'রহিম উদ্দিন', bloodGroup: 'O+', location: 'ধুনট পৌরসভা', phone: '01711000033', lastDonation: '২ মাস আগে', availability: 'সহজলভ্য' },
    { id: 4, name: 'করিম উল্লাহ', bloodGroup: 'AB+', location: 'ধুনট রেলস্টেশন', phone: '01711000034', lastDonation: '৫ মাস আগে', availability: 'সহজলভ্য' },
    { id: 5, name: 'নুরুল আমিন', bloodGroup: 'A-', location: 'ধুনট সদর', phone: '01711000035', lastDonation: '৩ মাস আগে', availability: 'জরুরিতে' },
    { id: 6, name: 'জামাল হোসেন', bloodGroup: 'B-', location: 'ধুনট বাজার', phone: '01711000036', lastDonation: '৬ মাস আগে', availability: 'জরুরিতে' },
    { id: 7, name: 'ইকবাল হুসাইন', bloodGroup: 'O-', location: 'ধুনট পৌরসভা', phone: '01711000037', lastDonation: '৪ মাস আগে', availability: 'সহজলভ্য' },
    { id: 8, name: 'সালাম মিয়া', bloodGroup: 'AB-', location: 'ধুনট সদর', phone: '01711000038', lastDonation: '৩ মাস আগে', availability: 'জরুরিতে' },
    { id: 9, name: 'হাসিব রহমান', bloodGroup: 'A+', location: 'ধুনট রেলস্টেশন', phone: '01711000039', lastDonation: '২ মাস আগে', availability: 'সহজলভ্য' },
    { id: 10, name: 'তানভীর আহমেদ', bloodGroup: 'O+', location: 'ধুনট বাজার', phone: '01711000040', lastDonation: '৫ মাস আগে', availability: 'সহজলভ্য' }
  ];

  const bloodGroupOptions = [
    { value: 'all', label: 'সব গ্রুপ' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' }
  ];

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         donor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || donor.bloodGroup === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleMapClick = (donorName: string, location: string) => {
    const searchQuery = encodeURIComponent(`${location} ধুনট বগুড়া`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Heart className="mr-2" size={20} />
            <h1 className="text-lg font-bold">রক্তদান</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="রক্তদাতা বা এলাকা খুঁজুন..."
          filterOptions={bloodGroupOptions}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredDonors.map((donor) => (
              <div key={donor.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <User size={32} className="text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-base">{donor.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-bold">
                        {donor.bloodGroup}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        donor.availability === 'সহজলভ্য' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {donor.availability}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{donor.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.open(`tel:${donor.phone}`, '_self')}
                      className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                      title="কল করুন"
                    >
                      <Phone size={16} />
                    </button>
                    <button
                      onClick={() => handleMapClick(donor.name, donor.location)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      title="ম্যাপে দেখুন"
                    >
                      <MapPin size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-gray-400" />
                    <span>সর্বশেষ দান: {donor.lastDonation}</span>
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

export default BloodDonation;
