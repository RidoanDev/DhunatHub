
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Bus } from 'lucide-react';

const BusSchedule = () => {
  const busServices = [
    {
      id: 1,
      name: "ধুনট-ঢাকা বাস সার্ভিস",
      phone: "01712-345678",
      address: "ধুনট বাস স্ট্যান্ড",
      subcategory: "ঢাকা রুট"
    },
    {
      id: 2,
      name: "স্থানীয় বাস সেবা",
      phone: "01819-876543",
      address: "কেন্দ্রীয় বাজার",
      subcategory: "স্থানীয় রুট"
    }
  ];

  const subcategories = ["সকল", "ঢাকা রুট", "স্থানীয় রুট", "চট্টগ্রাম রুট"];

  return (
    <CategoryTemplate
      title="বাস সূচি"
      icon={Bus}
      iconColor="text-blue-600"
      services={busServices}
      subcategories={subcategories}
      emptyStateMessage="কোন বাস সার্ভিস পাওয়া যায়নি"
    />
  );
};

export default BusSchedule;
