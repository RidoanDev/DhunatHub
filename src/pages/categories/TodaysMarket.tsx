
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { ShoppingCart } from 'lucide-react';

const TodaysMarket = () => {
  const marketServices = [
    {
      id: 1,
      name: "ধুনট কৃষি বাজার",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "সবজি বাজার"
    },
    {
      id: 2,
      name: "নিউ মার্কেট কমপ্লেক্স",
      phone: "01819-876543",
      address: "নিউ মার্কেট, ধুনট",
      subcategory: "শপিং মল"
    }
  ];

  const subcategories = ["সকল", "সবজি বাজার", "শপিং মল", "মাছের বাজার"];

  return (
    <CategoryTemplate
      title="আজকের বাজার"
      icon={ShoppingCart}
      iconColor="text-yellow-600"
      services={marketServices}
      subcategories={subcategories}
      emptyStateMessage="কোন বাজার পাওয়া যায়নি"
    />
  );
};

export default TodaysMarket;
