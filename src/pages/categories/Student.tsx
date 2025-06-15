
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { UserCheck } from 'lucide-react';

const Student = () => {
  const studentServices = [
    {
      id: 1,
      name: "ধুনট শিক্ষার্থী সহায়তা কেন্দ্র",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "শিক্ষার্থী সহায়তা"
    },
    {
      id: 2,
      name: "পড়াশোনা সাহায্য গ্রুপ",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "অধ্যয়ন গ্রুপ"
    }
  ];

  const subcategories = ["সকল", "শিক্ষার্থী সহায়তা", "অধ্যয়ন গ্রুপ", "টিউটোরিয়াল"];

  return (
    <CategoryTemplate
      title="শিক্ষার্থী"
      icon={UserCheck}
      iconColor="text-purple-600"
      services={studentServices}
      subcategories={subcategories}
      emptyStateMessage="কোন শিক্ষার্থী সেবা পাওয়া যায়নি"
    />
  );
};

export default Student;
