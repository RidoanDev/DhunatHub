
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Video } from 'lucide-react';

const WatchVideo = () => {
  const videoServices = [
    {
      id: 1,
      name: "ধুনট ভিডিও হল",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "সিনেমা হল"
    },
    {
      id: 2,
      name: "ইউটিউব ক্যাফে",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "ভিডিও ক্যাফে"
    }
  ];

  const subcategories = ["সকল", "সিনেমা হল", "ভিডিও ক্যাফে", "স্ট্রিমিং সেবা"];

  return (
    <CategoryTemplate
      title="ভিডিও"
      icon={Video}
      iconColor="text-indigo-600"
      services={videoServices}
      subcategories={subcategories}
      emptyStateMessage="কোন ভিডিও সেবা পাওয়া যায়নি"
    />
  );
};

export default WatchVideo;
