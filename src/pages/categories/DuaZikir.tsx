
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { BookOpen } from 'lucide-react';

const DuaZikir = () => {
  const duaServices = [
    {
      id: 1,
      name: "ধুনট জামে মসজিদ",
      phone: "01712-345678",
      address: "কেন্দ্রীয় মসজিদ, ধুনট",
      subcategory: "মসজিদ"
    },
    {
      id: 2,
      name: "ইসলামী শিক্ষা কেন্দ্র",
      phone: "01819-876543",
      address: "মাদ্রাসা পাড়া, ধুনট",
      subcategory: "ইসলামী শিক্ষা"
    }
  ];

  const subcategories = ["সকল", "মসজিদ", "ইসলামী শিক্ষা", "ধর্মীয় অনুষ্ঠান"];

  return (
    <CategoryTemplate
      title="দোয়া ও জিকির"
      icon={BookOpen}
      iconColor="text-orange-600"
      services={duaServices}
      subcategories={subcategories}
      emptyStateMessage="কোন ধর্মীয় সেবা পাওয়া যায়নি"
    />
  );
};

export default DuaZikir;
