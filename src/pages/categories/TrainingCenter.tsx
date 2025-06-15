
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Building } from 'lucide-react';

const TrainingCenter = () => {
  const trainingServices = [
    {
      id: 1,
      name: "ধুনট কম্পিউটার ট্রেনিং সেন্টার",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "কম্পিউটার ট্রেনিং"
    },
    {
      id: 2,
      name: "কারিগরি প্রশিক্ষণ কেন্দ্র",
      phone: "01819-876543",
      address: "উপজেলা কমপ্লেক্স, ধুনট",
      subcategory: "কারিগরি প্রশিক্ষণ"
    }
  ];

  const subcategories = ["সকল", "কম্পিউটার ট্রেনিং", "কারিগরি প্রশিক্ষণ", "ভাষা শিক্ষা"];

  return (
    <CategoryTemplate
      title="প্রশিক্ষণ কেন্দ্র"
      icon={Building}
      iconColor="text-green-600"
      services={trainingServices}
      subcategories={subcategories}
      emptyStateMessage="কোন প্রশিক্ষণ কেন্দ্র পাওয়া যায়নি"
    />
  );
};

export default TrainingCenter;
