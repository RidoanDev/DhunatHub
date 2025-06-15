
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Droplets } from 'lucide-react';

const Blood = () => {
  const bloodDonors = [
    {
      id: 1,
      name: "মোহাম্মদ রাসেল",
      phone: "01712-345678",
      address: "কলেজ পাড়া, ধুনট",
      subcategory: "A+"
    },
    {
      id: 2,
      name: "ফাতেমা খাতুন",
      phone: "01819-876543",
      address: "মহিলা কলেজ রোড",
      subcategory: "B+"
    },
    {
      id: 3,
      name: "আব্দুল করিম",
      phone: "01567-891234",
      address: "কেন্দ্রীয় বাজার",
      subcategory: "O+"
    }
  ];

  const subcategories = ["সকল", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <CategoryTemplate
      title="রক্ত সেবা"
      icon={Droplets}
      iconColor="text-red-600"
      services={bloodDonors}
      subcategories={subcategories}
      emptyStateMessage="কোন রক্তদাতা পাওয়া যায়নি"
    />
  );
};

export default Blood;
