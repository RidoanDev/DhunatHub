
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Fuel } from 'lucide-react';

const GasStation = () => {
  const gasServices = [
    {
      id: 1,
      name: "ধুনট গ্যাস স্টেশন",
      phone: "01712-345678",
      address: "মেইন রোড, ধুনট",
      subcategory: "এলপিজি গ্যাস"
    },
    {
      id: 2,
      name: "বিজিবি গ্যাস পয়েন্ট",
      phone: "01819-876543",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "প্রাকৃতিক গ্যাস"
    }
  ];

  const subcategories = ["সকল", "এলপিজি গ্যাস", "প্রাকৃতিক গ্যাস", "গ্যাস কানেকশন"];

  return (
    <CategoryTemplate
      title="গ্যাস স্টেশন"
      icon={Fuel}
      iconColor="text-orange-600"
      services={gasServices}
      subcategories={subcategories}
      emptyStateMessage="কোন গ্যাস স্টেশন পাওয়া যায়নি"
    />
  );
};

export default GasStation;
