
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Scissors } from 'lucide-react';

const BeautyParlor = () => {
  const beautyServices = [
    {
      id: 1,
      name: "ধুনট বিউটি পার্লার",
      phone: "01712-345678",
      address: "মহিলা বাজার, ধুনট",
      subcategory: "মহিলা পার্লার"
    },
    {
      id: 2,
      name: "জেন্টস সেলুন",
      phone: "01819-876543",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "পুরুষ সেলুন"
    }
  ];

  const subcategories = ["সকল", "মহিলা পার্লার", "পুরুষ সেলুন", "ব্রাইডাল মেকআপ"];

  return (
    <CategoryTemplate
      title="বিউটি পার্লার"
      icon={Scissors}
      iconColor="text-indigo-600"
      services={beautyServices}
      subcategories={subcategories}
      emptyStateMessage="কোন বিউটি পার্লার পাওয়া যায়নি"
    />
  );
};

export default BeautyParlor;
