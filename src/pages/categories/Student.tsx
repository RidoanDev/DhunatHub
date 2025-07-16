
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { GraduationCap, MapPin, Phone, BookOpen } from 'lucide-react';

const Student = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const students = [
    { id: 1, name: 'আবু সাইদ', institution: 'ধুনট কলেজ', subject: 'বিজ্ঞান', year: 'HSC 2nd Year', phone: '01711000001', area: 'ধুনট সদর' },
    { id: 2, name: 'ফাতেমা খাতুন', institution: 'ধুনট বালিকা উচ্চ বিদ্যালয়', subject: 'কলা', year: 'SSC 1st Year', phone: '01711000002', area: 'নতুন এলাকা' },
    { id: 3, name: 'মোহাম্মদ রফিক', institution: 'ধুনট সরকারি কলেজ', subject: 'ব্যবসায়', year: 'HSC 1st Year', phone: '01711000003', area: 'কলেজ এলাকা' },
    { id: 4, name: 'সাদিয়া আক্তার', institution: 'ধুনট টেকনিক্যাল ইনস্টিটিউট', subject: 'কম্পিউটার', year: 'Diploma 2nd Year', phone: '01711000004', area: 'টেকনিক্যাল এলাকা' },
    { id: 5, name: 'তানভীর হাসান', institution: 'ইসলামিয়া দাখিল মাদ্রাসা', subject: 'দ্বীনি শিক্ষা', year: 'Dakhil 2nd Year', phone: '01711000005', area: 'মাদ্রাসা এলাকা' },
    { id: 6, name: 'সুমাইয়া বেগম', institution: 'ধুনট বিজনেস কলেজ', subject: 'একাউন্টিং', year: 'HSC 2nd Year', phone: '01711000006', area: 'ব্যবসায়িক এলাকা' },
    { id: 7, name: 'মাহমুদুল হাসান', institution: 'ধুনট পলিটেকনিক', subject: 'ইলেকট্রিক্যাল', year: 'Diploma 3rd Year', phone: '01711000007', area: 'পলিটেকনিক এলাকা' },
    { id: 8, name: 'আয়েশা সিদ্দিকা', institution: 'ধুনট মহিলা কলেজ', subject: 'সমাজবিজ্ঞান', year: 'Degree 1st Year', phone: '01711000008', area: 'মহিলা কলেজ এলাকা' },
    { id: 9, name: 'আব্দুল করিম', institution: 'ধুনট কৃষি কলেজ', subject: 'কৃষিবিজ্ঞান', year: 'HSC 1st Year', phone: '01711000009', area: 'কৃষি এলাকা' },
    { id: 10, name: 'নুসরাত জাহান', institution: 'ধুনট নার্সিং ইনস্টিটিউট', subject: 'নার্সিং', year: 'Diploma 1st Year', phone: '01711000010', area: 'হাসপাতাল এলাকা' }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || student.subject.includes(filterType);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-4">
          <div className="flex items-center">
            <GraduationCap className="mr-2" size={20} />
            <h1 className="text-lg font-bold">শিক্ষার্থী</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="শিক্ষার্থী বা প্রতিষ্ঠান খুঁজুন..."
          filterOptions={[
            { value: 'all', label: 'সব বিষয়' },
            { value: 'বিজ্ঞান', label: 'বিজ্ঞান' },
            { value: 'কলা', label: 'কলা' },
            { value: 'ব্যবসায়', label: 'ব্যবসায়' }
          ]}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredStudents.map((student) => (
              <div key={student.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{student.name}</h3>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                    {student.year}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <BookOpen size={14} className="mr-2 text-gray-400" />
                    <span>{student.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap size={14} className="mr-2 text-gray-400" />
                    <span>{student.subject}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{student.area}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${student.phone}`} className="text-blue-600">{student.phone}</a>
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

export default Student;
