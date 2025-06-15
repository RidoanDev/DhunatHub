
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Package } from 'lucide-react';

const BuySell = () => {
  const buySellServices = [
    {
      id: 1,
      name: "ধুনট ক্রয়-বিক্রয় কেন্দ্র",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "সাধারণ পণ্য"
    },
    {
      id: 2,
      name: "হাতের কাজ বিক্রয়",
      phone: "01819-876543",
      address: "মহিলা বাজার, ধুনট",
      subcategory: "হস্তশিল্প"
    }
  ];

  const subcategories = ["সকল", "সাধারণ পণ্য", "হস্তশিল্প", "ইলেকট্রনিক্স"];

  return (
    <CategoryTemplate
      title="কেনাবেচা"
      icon={Package}
      iconColor="text-pink-600"
      services={buySellServices}
      subcategories={subcategories}
      emptyStateMessage="কোন কেনাবেচার সেবা পাওয়া যায়নি"
    />
  );
};

export default BuySell;
