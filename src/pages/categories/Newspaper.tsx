
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Newspaper as NewspaperIcon, Phone, MapPin, Globe } from 'lucide-react';

const Newspaper = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const newspapers = [
    { id: 1, name: 'ধুনট দর্পণ', editor: 'সাংবাদিক আব্দুর রহিম', location: 'ধুনট সদর', phone: '01711000241', type: 'স্থানীয় দৈনিক', circulation: '৫০০০', established: '২০১০' },
    { id: 2, name: 'বগুড়া প্রতিদিন', correspondent: 'জহিরুল ইসলাম', location: 'ধুনট বাজার', phone: '01711000242', type: 'জেলা সংস্করণ', circulation: '১৫০০০', established: '২০০৫' },
    { id: 3, name: 'করতোয়া টাইমস', reporter: 'নুরুল হক', location: 'ধুনট পৌরসভা', phone: '01711000243', type: 'অনলাইন পত্রিকা', website: 'www.karotoatimes.com', established: '২০১৫' },
    { id: 4, name: 'উত্তরবঙ্গ প্রতিবেদন', chief_reporter: 'মোহাম্মদ আলম', location: 'ধুনট রেলস্টেশন', phone: '01711000244', type: 'সাপ্তাহিক', circulation: '৩০০০', established: '২০০৮' },
    { id: 5, name: 'ধুনট নিউজ২৪', editor: 'তানভীর আহমেদ', location: 'ধুনট সদর', phone: '01711000245', type: 'অনলাইন নিউজ', website: 'www.dhunatnews24.com', established: '২০১৮' },
    { id: 6, name: 'গ্রাম বাংলার কাগজ', publisher: 'হাজী সালাম উদ্দিন', location: 'ধুনট বাজার', phone: '01711000246', type: 'পাক্ষিক', circulation: '২০০০', established: '২০১২' },
    { id: 7, name: 'বগুড়া জার্নাল', stringer: 'ফারুক আহমেদ', location: 'ধুনট পৌরসভা', phone: '01711000247', type: 'মাসিক ম্যাগাজিন', circulation: '১৫০০', established: '২০১৪' },
    { id: 8, name: 'দৈনিক সংবাদ', local_correspondent: 'জামাল হোসেন', location: 'ধুনট সদর', phone: '01711000248', type: 'জাতীয় দৈনিক', circulation: '১০০০০', established: '১৯৮৫' },
    { id: 9, name: 'ইত্তেফাক', area_correspondent: 'রেজাউল করিম', location: 'ধুনট রেলস্টেশন', phone: '01711000249', type: 'জাতীয় দৈনিক', circulation: '৮০০০', established: '১৯৮০' },
    { id: 10, name: 'প্রথম আলো', local_reporter: 'সাকিব আহমেদ', location: 'ধুনট বাজার', phone: '01711000250', type: 'জাতীয় দৈনিক', circulation: '১২০০০', established: '১৯৯৮' }
  ];

  const filteredNewspapers = newspapers.filter(newspaper => {
    const matchesSearch = newspaper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         newspaper.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-4">
          <div className="flex items-center">
            <NewspaperIcon className="mr-2" size={20} />
            <h1 className="text-lg font-bold">সংবাদপত্র</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="সংবাদপত্র বা ম্যাগাজিন খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredNewspapers.map((newspaper) => (
              <div key={newspaper.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{newspaper.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {newspaper.established}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <NewspaperIcon size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-gray-600">{newspaper.type}</span>
                  </div>
                  {newspaper.circulation && (
                    <div className="flex items-center">
                      <Globe size={14} className="mr-2 text-gray-400" />
                      <span>প্রচার: {newspaper.circulation} কপি</span>
                    </div>
                  )}
                  {newspaper.website && (
                    <div className="flex items-center">
                      <Globe size={14} className="mr-2 text-gray-400" />
                      <a href={`https://${newspaper.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {newspaper.website}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{newspaper.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${newspaper.phone}`} className="text-blue-600">{newspaper.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {newspaper.editor || newspaper.correspondent || newspaper.reporter || newspaper.chief_reporter || newspaper.publisher || newspaper.stringer || newspaper.local_correspondent || newspaper.area_correspondent || newspaper.local_reporter}
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

export default Newspaper;
