
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Landmark } from 'lucide-react';

const PlotLand = () => {
  const landServices = [
    {
      id: 1,
      name: "ধুনট জমি ব্রোকার",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "জমি ব্রোকার"
    },
    {
      id: 2,
      name: "রিয়েল এস্টেট সেবা",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "রিয়েল এস্টেট"
    }
  ];

  const subcategories = ["সকল", "জমি ব্রোকার", "রিয়েল এস্টেট", "প্লট বিক্রয়"];

  return (
    <CategoryTemplate
      title="জমি"
      icon={Landmark}
      iconColor="text-purple-600"
      services={landServices}
      subcategories={subcategories}
      emptyStateMessage="কোন জমির সেবা পাওয়া যায়নি"
    />
  );
};

export default PlotLand;
