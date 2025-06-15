
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { GraduationCap } from 'lucide-react';

const Teacher = () => {
  const teachers = [
    {
      id: 1,
      name: "প্রফেসর আব্দুল করিম",
      phone: "01712-345678",
      address: "ধুনট সরকারি কলেজ",
      subcategory: "গণিত শিক্ষক"
    },
    {
      id: 2,
      name: "মিসেস রাশিদা বেগম",
      phone: "01819-876543",
      address: "ধুনট উচ্চ বিদ্যালয়",
      subcategory: "ইংরেজি শিক্ষক"
    }
  ];

  const subcategories = ["সকল", "গণিত শিক্ষক", "ইংরেজি শিক্ষক", "বিজ্ঞান শিক্ষক"];

  return (
    <CategoryTemplate
      title="শিক্ষক"
      icon={GraduationCap}
      iconColor="text-green-600"
      services={teachers}
      subcategories={subcategories}
      emptyStateMessage="কোন শিক্ষক পাওয়া যায়নি"
    />
  );
};

export default Teacher;
