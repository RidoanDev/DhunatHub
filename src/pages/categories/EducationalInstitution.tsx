
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { GraduationCap, Phone, MapPin, Users } from 'lucide-react';

const EducationalInstitution = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const institutions = [
    { id: 1, name: 'ধুনট সরকারি কলেজ', principal: 'ড. মোহাম্মদ হোসেন', location: 'ধুনট সদর', phone: '01711000161', type: 'কলেজ', students: '২৫০০', established: '১৯৮৫' },
    { id: 2, name: 'ধুনট সরকারি উচ্চ বিদ্যালয়', headmaster: 'মোঃ করিম উদ্দিন', location: 'ধুনট বাজার', phone: '01711000162', type: 'উচ্চ বিদ্যালয়', students: '১৮০০', established: '১৯৭২' },
    { id: 3, name: 'রাজা রামমোহন রায় উচ্চ বিদ্যালয়', headmaster: 'নুরুজ্জামান', location: 'ধুনট পৌরসভা', phone: '01711000163', type: 'উচ্চ বিদ্যালয়', students: '১২০০', established: '১৯৮০' },
    { id: 4, name: 'ধুনট বালিকা উচ্চ বিদ্যালয়', headmistress: 'রোকেয়া বেগম', location: 'ধুনট রেলস্টেশন', phone: '01711000164', type: 'বালিকা বিদ্যালয়', students: '৯০০', established: '১৯৯০' },
    { id: 5, name: 'আল-হেরা মাদ্রাসা', principal: 'মাওলানা আব্দুর রহমান', location: 'ধুনট সদর', phone: '01711000165', type: 'মাদ্রাসা', students: '৮০০', established: '১৯৮৮' },
    { id: 6, name: 'ধুনট টেকনিক্যাল ইনস্টিটিউট', director: 'ইঞ্জিনিয়ার সালাম', location: 'ধুনট বাজার', phone: '01711000166', type: 'কারিগরি শিক্ষা', students: '৬০০', established: '২০০৫' },
    { id: 7, name: 'শিশু কল্যাণ প্রাথমিক বিদ্যালয়', headteacher: 'ফরিদা খাতুন', location: 'ধুনট পৌরসভা', phone: '01711000167', type: 'প্রাথমিক বিদ্যালয়', students: '৪৫০', established: '১৯৯৫' },
    { id: 8, name: 'ধুনট ব্যবসায় ব্যবস্থাপনা কলেজ', principal: 'প্রফেসর জামাল', location: 'ধুনট সদর', phone: '01711000168', type: 'ব্যবসায়িক শিক্ষা', students: '৭০০', established: '২০১০' },
    { id: 9, name: 'নার্সিং ইনস্টিটিউট ধুনট', director: 'সিস্টার রহিমা', location: 'ধুনট রেলস্টেশন', phone: '01711000169', type: 'নার্সিং শিক্ষা', students: '৩০০', established: '২০১৫' },
    { id: 10, name: 'কম্পিউটার ট্রেনিং সেন্টার', instructor: 'রফিকুল ইসলাম', location: 'ধুনট বাজার', phone: '01711000170', type: 'কম্পিউটার শিক্ষা', students: '২০০', established: '২০০৮' }
  ];

  const filteredInstitutions = institutions.filter(institution => {
    const matchesSearch = institution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         institution.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center">
            <GraduationCap className="mr-2" size={20} />
            <h1 className="text-lg font-bold">শিক্ষা প্রতিষ্ঠান</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="শিক্ষা প্রতিষ্ঠান খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredInstitutions.map((institution) => (
              <div key={institution.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{institution.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {institution.established}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <GraduationCap size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-blue-600">{institution.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-2 text-gray-400" />
                    <span>শিক্ষার্থী: {institution.students} জন</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{institution.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${institution.phone}`} className="text-blue-600">{institution.phone}</a>
                    </div>
                    <span className="text-xs text-gray-500">
                      {institution.principal || institution.headmaster || institution.headmistress || institution.director || institution.headteacher || institution.instructor}
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

export default EducationalInstitution;
