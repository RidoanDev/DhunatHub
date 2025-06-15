
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Train } from 'lucide-react';

const TrainSchedule = () => {
  const trainServices = [
    {
      id: 1,
      name: "ধুনট রেলওয়ে স্টেশন",
      phone: "01712-345678",
      address: "রেলওয়ে স্টেশন, ধুনট",
      subcategory: "স্টেশন সেবা"
    },
    {
      id: 2,
      name: "ট্রেন টিকিট এজেন্ট",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "টিকিট সেবা"
    }
  ];

  const subcategories = ["সকল", "স্টেশন সেবা", "টিকিট সেবা", "ট্রেন তথ্য"];

  return (
    <CategoryTemplate
      title="ট্রেন সময়সূচি"
      icon={Train}
      iconColor="text-yellow-600"
      services={trainServices}
      subcategories={subcategories}
      emptyStateMessage="কোন ট্রেন সেবা পাওয়া যায়নি"
    />
  );
};

export default TrainSchedule;
