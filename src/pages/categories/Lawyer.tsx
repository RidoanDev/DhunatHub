
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Scale } from 'lucide-react';

const Lawyer = () => {
  const lawyers = [
    {
      id: 1,
      name: "ব্যারিস্টার মো. রহমান",
      phone: "01712-345678",
      address: "আদালত পাড়া, ধুনট",
      subcategory: "ফৌজদারি আইনজীবী"
    },
    {
      id: 2,
      name: "আইনজীবী ফাতেমা খাতুন",
      phone: "01819-876543",
      address: "আদালত রোড, ধুনট",
      subcategory: "দেওয়ানি আইনজীবী"
    }
  ];

  const subcategories = ["সকল", "ফৌজদারি আইনজীবী", "দেওয়ানি আইনজীবী", "পারিবারিক আইন"];

  return (
    <CategoryTemplate
      title="আইনজীবী"
      icon={Scale}
      iconColor="text-blue-600"
      services={lawyers}
      subcategories={subcategories}
      emptyStateMessage="কোন আইনজীবী পাওয়া যায়নি"
    />
  );
};

export default Lawyer;
