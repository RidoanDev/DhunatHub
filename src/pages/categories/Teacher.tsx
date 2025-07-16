
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { GraduationCap, Phone, MapPin, BookOpen } from 'lucide-react';

const Teacher = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const teachers = [
    { id: 1, name: 'প্রফেসর মোহাম্মদ আলী', subject: 'গণিত', institution: 'ধুনট কলেজ', phone: '01711000081', experience: '২০ বছর', education: 'এমএসসি (গণিত)', fee: '৫০০ টাকা/ঘন্টা' },
    { id: 2, name: 'মিসেস রহিমা খানম', subject: 'ইংরেজি', institution: 'আদর্শ স্কুল', phone: '01711000082', experience: '১৫ বছর', education: 'এমএ (ইংরেজি)', fee: '৪০০ টাকা/ঘন্টা' },
    { id: 3, name: 'শ্রী করিম উদ্দিন', subject: 'পদার্থবিজ্ঞান', institution: 'সরকারি কলেজ', phone: '01711000083', experience: '১৮ বছর', education: 'এমএসসি (পদার্থবিজ্ঞান)', fee: '৬০০ টাকা/ঘন্টা' },
    { id: 4, name: 'মিসেস ফারিদা বেগম', subject: 'রসায়ন', institution: 'বিজ্ঞান কলেজ', phone: '01711000084', experience: '১২ বছর', education: 'এমএসসি (রসায়ন)', fee: '৫৫০ টাকা/ঘন্টা' },
    { id: 5, name: 'জনাব নুরুল ইসলাম', subject: 'জীববিজ্ঞান', institution: 'মেডিকেল কলেজ', phone: '01711000085', experience: '২২ বছর', education: 'এমএসসি (জীববিজ্ঞান)', fee: '৭০০ টাকা/ঘন্টা' },
    { id: 6, name: 'মিসেস সালমা আক্তার', subject: 'বাংলা', institution: 'উচ্চ বিদ্যালয়', phone: '01711000086', experience: '১০ বছর', education: 'এমএ (বাংলা)', fee: '৩৫০ টাকা/ঘন্টা' },
    { id: 7, name: 'প্রফেসর জামাল হোসেন', subject: 'ইতিহাস', institution: 'ইতিহাস বিভাগ', phone: '01711000087', experience: '২৫ বছর', education: 'পিএইচডি (ইতিহাস)', fee: '৮০০ টাকা/ঘন্টা' },
    { id: 8, name: 'মিসেস রোকেয়া খাতুন', subject: 'ভূগোল', institution: 'ভূগোল কলেজ', phone: '01711000088', experience: '৮ বছর', education: 'এমএ (ভূগোল)', fee: '৩০০ টাকা/ঘন্টা' },
    { id: 9, name: 'জনাব ইকবাল হুসাইন', subject: 'কম্পিউটার সায়েন্স', institution: 'টেকনোলজি ইনস্টিটিউট', phone: '01711000089', experience: '৬ বছর', education: 'এমএসসি (কম্পিউটার)', fee: '৯০০ টাকা/ঘন্টা' },
    { id: 10, name: 'মিসেস হাসিনা বেগম', subject: 'অর্থনীতি', institution: 'বিবিএ কলেজ', phone: '01711000090', experience: '১৪ বছর', education: 'এমএ (অর্থনীতি)', fee: '৪৫০ টাকা/ঘন্টা' }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center">
            <GraduationCap className="mr-2" size={20} />
            <h1 className="text-lg font-bold">শিক্ষক</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="শিক্ষক বা বিষয় খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{teacher.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {teacher.experience}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <BookOpen size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium text-purple-600">{teacher.subject}</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap size={14} className="mr-2 text-gray-400" />
                    <span>{teacher.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{teacher.education}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      <a href={`tel:${teacher.phone}`} className="text-blue-600">{teacher.phone}</a>
                    </div>
                    <span className="font-semibold text-green-600 text-xs">{teacher.fee}</span>
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

export default Teacher;
