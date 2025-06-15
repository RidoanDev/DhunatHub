
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Briefcase } from 'lucide-react';

const Jobs = () => {
  const jobServices = [
    {
      id: 1,
      name: "ধুনট জব সেন্টার",
      phone: "01712-345678",
      address: "কলেজ রোড, ধুনট",
      subcategory: "চাকরির তথ্য"
    },
    {
      id: 2,
      name: "স্কিল ডেভেলপমেন্ট সেন্টার",
      phone: "01819-876543",
      address: "ট্রেনিং সেন্টার, ধুনট",
      subcategory: "দক্ষতা উন্নয়ন"
    }
  ];

  const subcategories = ["সকল", "চাকরির তথ্য", "দক্ষতা উন্নয়ন", "সরকারি চাকরি"];

  return (
    <CategoryTemplate
      title="চাকরি"
      icon={Briefcase}
      iconColor="text-green-600"
      services={jobServices}
      subcategories={subcategories}
      emptyStateMessage="কোন চাকরির সেবা পাওয়া যায়নি"
    />
  );
};

export default Jobs;
