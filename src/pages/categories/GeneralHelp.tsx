
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { HelpCircle } from 'lucide-react';

const GeneralHelp = () => {
  const helpServices = [
    {
      id: 1,
      name: "ধুনট সাহায্য কেন্দ্র",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "সাধারণ সাহায্য"
    },
    {
      id: 2,
      name: "কমিউনিটি সাপোর্ট সেন্টার",
      phone: "01819-876543",
      address: "উপজেলা কমপ্লেক্স, ধুনট",
      subcategory: "কমিউনিটি সেবা"
    }
  ];

  const subcategories = ["সকল", "সাধারণ সাহায্য", "কমিউনিটি সেবা", "জরুরি সাহায্য"];

  return (
    <CategoryTemplate
      title="সাধারণ সাহায্য"
      icon={HelpCircle}
      iconColor="text-blue-600"
      services={helpServices}
      subcategories={subcategories}
      emptyStateMessage="কোন সাহায্য সেবা পাওয়া যায়নি"
    />
  );
};

export default GeneralHelp;
