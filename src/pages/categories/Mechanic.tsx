
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Wrench } from 'lucide-react';

const Mechanic = () => {
  const mechanicServices = [
    {
      id: 1,
      name: "ধুনট অটো ওয়ার্কশপ",
      phone: "01712-345678",
      address: "বাস স্ট্যান্ড, ধুনট",
      subcategory: "গাড়ি মেকানিক"
    },
    {
      id: 2,
      name: "বাইক সার্ভিস সেন্টার",
      phone: "01819-876543",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "বাইক মেকানিক"
    }
  ];

  const subcategories = ["সকল", "গাড়ি মেকানিক", "বাইক মেকানিক", "সিএনজি মেকানিক"];

  return (
    <CategoryTemplate
      title="মিস্ত্রি"
      icon={Wrench}
      iconColor="text-purple-600"
      services={mechanicServices}
      subcategories={subcategories}
      emptyStateMessage="কোন মিস্ত্রি পাওয়া যায়নি"
    />
  );
};

export default Mechanic;
