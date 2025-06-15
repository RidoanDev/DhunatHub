
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Zap } from 'lucide-react';

const ElectricOffice = () => {
  const electricServices = [
    {
      id: 1,
      name: "পল্লী বিদ্যুৎ সমিতি",
      phone: "01712-345678",
      address: "উপজেলা কমপ্লেক্স, ধুনট",
      subcategory: "বিদ্যুৎ অফিস"
    },
    {
      id: 2,
      name: "ইলেকট্রিশিয়ান সেবা",
      phone: "01819-876543",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "ইলেকট্রিশিয়ান"
    }
  ];

  const subcategories = ["সকল", "বিদ্যুৎ অফিস", "ইলেকট্রিশিয়ান", "বিল পরিশোধ"];

  return (
    <CategoryTemplate
      title="বিদ্যুৎ অফিস"
      icon={Zap}
      iconColor="text-pink-600"
      services={electricServices}
      subcategories={subcategories}
      emptyStateMessage="কোন বিদ্যুৎ সেবা পাওয়া যায়নি"
    />
  );
};

export default ElectricOffice;
