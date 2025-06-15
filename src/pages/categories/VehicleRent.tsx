
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Car } from 'lucide-react';

const VehicleRent = () => {
  const vehicleServices = [
    {
      id: 1,
      name: "ধুনট কার রেন্টাল",
      phone: "01712-345678",
      address: "বাস স্ট্যান্ড, ধুনট",
      subcategory: "গাড়ি ভাড়া"
    },
    {
      id: 2,
      name: "সফল ট্রান্সপোর্ট",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "বাস ভাড়া"
    }
  ];

  const subcategories = ["সকল", "গাড়ি ভাড়া", "বাস ভাড়া", "মোটরসাইকেল"];

  return (
    <CategoryTemplate
      title="গাড়ি ভাড়া"
      icon={Car}
      iconColor="text-blue-600"
      services={vehicleServices}
      subcategories={subcategories}
      emptyStateMessage="কোন গাড়ি ভাড়ার সেবা পাওয়া যায়নি"
    />
  );
};

export default VehicleRent;
