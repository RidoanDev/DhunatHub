
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Home } from 'lucide-react';

const HouseRent = () => {
  const houseServices = [
    {
      id: 1,
      name: "ধুনট হাউজ রেন্ট এজেন্সি",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "ভাড়া এজেন্সি"
    },
    {
      id: 2,
      name: "হোম রেন্ট সলিউশন",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "প্রপার্টি ডিলার"
    }
  ];

  const subcategories = ["সকল", "ভাড়া এজেন্সি", "প্রপার্টি ডিলার", "বাড়ি ভাড়া"];

  return (
    <CategoryTemplate
      title="বাড়ি ভাড়া"
      icon={Home}
      iconColor="text-green-600"
      services={houseServices}
      subcategories={subcategories}
      emptyStateMessage="কোন বাড়ি ভাড়ার সেবা পাওয়া যায়নি"
    />
  );
};

export default HouseRent;
