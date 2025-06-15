
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Stethoscope } from 'lucide-react';

const Doctor = () => {
  const doctors = [
    {
      id: 1,
      name: "ডাঃ মোহাম্মদ রহমান",
      phone: "01712-345678",
      address: "ধুনট সদর হাসপাতাল",
      subcategory: "জেনারেল মেডিসিন",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "ডাঃ ফাতেমা খাতুন",
      phone: "01698-765432",
      address: "ধুনট মেডিকেল সেন্টার",
      subcategory: "গাইনোকলজি",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "ডাঃ আব্দুল করিম",
      phone: "01756-789123",
      address: "পপুলার ডায়াগনস্টিক সেন্টার",
      subcategory: "অর্থোপেডিক্স",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const subcategories = ["সকল", "জেনারেল মেডিসিন", "গাইনোকলজি", "অর্থোপেডিক্স", "পেডিয়াট্রিক্স"];

  return (
    <CategoryTemplate
      title="ডাক্তার"
      icon={Stethoscope}
      iconColor="text-red-600"
      services={doctors}
      subcategories={subcategories}
      emptyStateMessage="কোন ডাক্তার পাওয়া যায়নি"
    />
  );
};

export default Doctor;
