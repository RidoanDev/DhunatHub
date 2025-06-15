
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Globe } from 'lucide-react';

const Website = () => {
  const websiteServices = [
    {
      id: 1,
      name: "ধুনট ওয়েব ডিজাইন",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "ওয়েব ডেভেলপমেন্ট"
    },
    {
      id: 2,
      name: "ডিজিটাল মার্কেটিং সেবা",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "ডিজিটাল মার্কেটিং"
    }
  ];

  const subcategories = ["সকল", "ওয়েব ডেভেলপমেন্ট", "ডিজিটাল মার্কেটিং", "গ্রাফিক্স ডিজাইন"];

  return (
    <CategoryTemplate
      title="ওয়েবসাইট"
      icon={Globe}
      iconColor="text-indigo-600"
      services={websiteServices}
      subcategories={subcategories}
      emptyStateMessage="কোন ওয়েবসাইট সেবা পাওয়া যায়নি"
    />
  );
};

export default Website;
