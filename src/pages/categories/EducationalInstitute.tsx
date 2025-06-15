
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { School } from 'lucide-react';

const EducationalInstitute = () => {
  const educationServices = [
    {
      id: 1,
      name: "ধুনট সরকারি হাই স্কুল",
      phone: "01712-345678",
      address: "স্কুল পাড়া, ধুনট",
      subcategory: "মাধ্যমিক বিদ্যালয়"
    },
    {
      id: 2,
      name: "ধুনট ডিগ্রি কলেজ",
      phone: "01819-876543",
      address: "কলেজ পাড়া, ধুনট",
      subcategory: "কলেজ"
    }
  ];

  const subcategories = ["সকল", "প্রাথমিক বিদ্যালয়", "মাধ্যমিক বিদ্যালয়", "কলেজ"];

  return (
    <CategoryTemplate
      title="শিক্ষা প্রতিষ্ঠান"
      icon={School}
      iconColor="text-pink-600"
      services={educationServices}
      subcategories={subcategories}
      emptyStateMessage="কোন শিক্ষা প্রতিষ্ঠান পাওয়া যায়নি"
    />
  );
};

export default EducationalInstitute;
