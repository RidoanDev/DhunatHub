import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Briefcase, Phone, MapPin, Clock, DollarSign } from 'lucide-react';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const jobs = [
    { id: 1, title: 'সেলস এক্সিকিউটিভ', company: 'আলী ট্রেডিং', location: 'ধুনট সদর', phone: '01711000071', salary: '১৫,০০০-২০,০০০ টাকা', type: 'ফুল টাইম', experience: '১-২ বছর', category: 'বিক্রয়' },
    { id: 2, title: 'অ্যাকাউন্টেন্ট', company: 'রহিম এন্টারপ্রাইজ', location: 'ধুনট বাজার', phone: '01711000072', salary: '১৮,০০০-২৫,০০০ টাকা', type: 'ফুল টাইম', experience: '২-৩ বছর', category: 'হিসাবরক্ষণ' },
    { id: 3, title: 'কম্পিউটার অপারেটর', company: 'ডিজিটাল সলিউশন', location: 'ধুনট পৌরসভা', phone: '01711000073', salary: '১২,০০০-১৮,০০০ টাকা', type: 'ফুল টাইম', experience: 'ফ্রেশার', category: 'তথ্যপ্রযুক্তি' },
    { id: 4, title: 'শিক্ষক (ইংরেজি)', company: 'আদর্শ স্কুল', location: 'ধুনট সদর', phone: '01711000074', salary: '২০,০০০-৩০,০০০ টাকা', type: 'ফুল টাইম', experience: '১-৫ বছর', category: 'শিক্ষা' },
    { id: 5, title: 'মার্কেটিং এক্সিকিউটিভ', company: 'করিম মার্কেটিং', location: 'ধুনট বাজার', phone: '01711000075', salary: '১৪,০০০-২২,০০০ টাকা', type: 'ফুল টাইম', experience: '১-৩ বছর', category: 'বিপণন' },
    { id: 6, title: 'অফিস সহায়ক', company: 'এনজিও সেবা', location: 'ধুনট রেলস্টেশন', phone: '01711000076', salary: '১০,০০০-১৫,০০০ টাকা', type: 'ফুল টাইম', experience: 'ফ্রেশার', category: 'সাধারণ' },
    { id: 7, title: 'ড্রাইভার', company: 'পরিবহন সেবা', location: 'ধুনট সদর', phone: '01711000077', salary: '১৫,০০০-২০,০০০ টাকা', type: 'ফুল টাইম', experience: '৩-৫ বছর', category: 'পরিবহন' },
    { id: 8, title: 'গ্রাফিক্স ডিজাইনার', company: 'ক্রিয়েটিভ এজেন্সি', location: 'ধুনট পৌরসভা', phone: '01711000078', salary: '১৬,০০০-২৪,০০০ টাকা', type: 'পার্ট টাইম', experience: '১-২ বছর', category: 'ডিজাইন' },
    { id: 9, title: 'ফার্মেসি সহায়ক', company: 'পপুলার ফার্মেসি', location: 'ধুনট বাজার', phone: '01711000079', salary: '১২,০০০-১৮,০০০ টাকা', type: 'ফুল টাইম', experience: 'ফ্রেশার', category: 'স্বাস্থ্য' },
    { id: 10, title: 'রেস্টুরেন্ট ম্যানেজার', company: 'স্বাদ রেস্টুরেন্ট', location: 'ধুনট সদর', phone: '01711000080', salary: '২২,০০০-৩৫,০০০ টাকা', type: 'ফুল টাইম', experience: '২-৪ বছর', category: 'খাদ্য' }
  ];

  const jobCategoryOptions = [
    { value: 'তথ্যপ্রযুক্তি', label: 'তথ্যপ্রযুক্তি' },
    { value: 'শিক্ষা', label: 'শিক্ষা' },
    { value: 'স্বাস্থ্য', label: 'স্বাস্থ্য' },
    { value: 'বিক্রয়', label: 'বিক্রয়' },
    { value: 'বিপণন', label: 'বিপণন' },
    { value: 'হিসাবরক্ষণ', label: 'হিসাবরক্ষণ' },
    { value: 'পরিবহন', label: 'পরিবহন' },
    { value: 'ডিজাইন', label: 'ডিজাইন' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || job.category === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Briefcase className="mr-2" size={20} />
            <h1 className="text-lg font-bold">চাকরি</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="চাকরি বা কোম্পানি খুঁজুন..."
          filterOptions={jobCategoryOptions}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{job.title}</h3>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Briefcase size={14} className="mr-2 text-gray-400" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={14} className="mr-2 text-gray-400" />
                    <span className="font-semibold text-green-600">{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>অভিজ্ঞতা: {job.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${job.phone}`} className="text-blue-600">{job.phone}</a>
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

export default Jobs;
