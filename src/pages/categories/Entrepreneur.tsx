
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Users } from 'lucide-react';

const Entrepreneur = () => {
  const entrepreneurServices = [
    {
      id: 1,
      name: "ধুনট ব্যবসায়ী সমিতি",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "ব্যবসায়ী সংগঠন"
    },
    {
      id: 2,
      name: "যুব উদ্যোক্তা কেন্দ্র",
      phone: "01819-876543",
      address: "উপজেলা কমপ্লেক্স, ধুনট",
      subcategory: "যুব উদ্যোক্তা"
    }
  ];

  const subcategories = ["সকল", "ব্যবসায়ী সংগঠন", "যুব উদ্যোক্তা", "স্টার্টআপ"];

  return (
    <CategoryTemplate
      title="উদ্যোক্তা"
      icon={Users}
      iconColor="text-green-600"
      services={entrepreneurServices}
      subcategories={subcategories}
      emptyStateMessage="কোন উদ্যোক্তা সেবা পাওয়া যায়নি"
    />
  );
};

export default Entrepreneur;
