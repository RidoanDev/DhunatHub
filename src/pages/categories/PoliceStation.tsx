
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Shield } from 'lucide-react';

const PoliceStation = () => {
  const policeServices = [
    {
      id: 1,
      name: "ধুনট থানা",
      phone: "0582-456789",
      address: "থানা রোড, ধুনট সদর",
      subcategory: "মূল থানা"
    },
    {
      id: 2,
      name: "ধুনট ট্রাফিক পুলিশ",
      phone: "01719-998888",
      address: "মেইন রোড, ধুনট বাজার",
      subcategory: "ট্রাফিক পুলিশ"
    }
  ];

  const subcategories = ["সকল", "মূল থানা", "ট্রাফিক পুলিশ", "ওসি অফিস"];

  return (
    <CategoryTemplate
      title="থানা"
      icon={Shield}
      iconColor="text-blue-600"
      services={policeServices}
      subcategories={subcategories}
      emptyStateMessage="কোন থানা সেবা পাওয়া যায়নি"
    />
  );
};

export default PoliceStation;
