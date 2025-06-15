
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { University } from 'lucide-react';

const Municipality = () => {
  const municipalServices = [
    {
      id: 1,
      name: "ধুনট উপজেলা পরিষদ",
      phone: "01712-345678",
      address: "উপজেলা কমপ্লেক্স, ধুনট",
      subcategory: "উপজেলা অফিস"
    },
    {
      id: 2,
      name: "ইউনিয়ন পরিষদ অফিস",
      phone: "01819-876543",
      address: "ইউনিয়ন কমপ্লেক্স, ধুনট",
      subcategory: "ইউনিয়ন অফিস"
    }
  ];

  const subcategories = ["সকল", "উপজেলা অফিস", "ইউনিয়ন অফিস", "পৌর অফিস"];

  return (
    <CategoryTemplate
      title="পৌরসভা"
      icon={University}
      iconColor="text-teal-600"
      services={municipalServices}
      subcategories={subcategories}
      emptyStateMessage="কোন পৌরসভা সেবা পাওয়া যায়নি"
    />
  );
};

export default Municipality;
