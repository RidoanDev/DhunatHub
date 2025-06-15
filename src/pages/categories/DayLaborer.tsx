
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { HardHat } from 'lucide-react';

const DayLaborer = () => {
  const laborServices = [
    {
      id: 1,
      name: "ধুনট শ্রমিক সমিতি",
      phone: "01712-345678",
      address: "শ্রমিক চত্বর, ধুনট",
      subcategory: "নির্মাণ শ্রমিক"
    },
    {
      id: 2,
      name: "কৃষি শ্রমিক দল",
      phone: "01819-876543",
      address: "কৃষি অফিস, ধুনট",
      subcategory: "কৃষি শ্রমিক"
    }
  ];

  const subcategories = ["সকল", "নির্মাণ শ্রমিক", "কৃষি শ্রমিক", "ঘরোয়া কাজ"];

  return (
    <CategoryTemplate
      title="দিনমজুর"
      icon={HardHat}
      iconColor="text-orange-600"
      services={laborServices}
      subcategories={subcategories}
      emptyStateMessage="কোন দিনমজুর পাওয়া যায়নি"
    />
  );
};

export default DayLaborer;
