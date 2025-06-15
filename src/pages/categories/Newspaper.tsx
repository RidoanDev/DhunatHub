
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Newspaper } from 'lucide-react';

const NewspaperPage = () => {
  const newspaperServices = [
    {
      id: 1,
      name: "ধুনট সংবাদ বিতরণ",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "পত্রিকা বিতরণ"
    },
    {
      id: 2,
      name: "স্থানীয় সংবাদ কেন্দ্র",
      phone: "01819-876543",
      address: "প্রেস ক্লাব, ধুনট",
      subcategory: "সংবাদ সংস্থা"
    }
  ];

  const subcategories = ["সকল", "পত্রিকা বিতরণ", "সংবাদ সংস্থা", "অনলাইন মিডিয়া"];

  return (
    <CategoryTemplate
      title="পত্রিকা"
      icon={Newspaper}
      iconColor="text-teal-600"
      services={newspaperServices}
      subcategories={subcategories}
      emptyStateMessage="কোন পত্রিকা সেবা পাওয়া যায়নি"
    />
  );
};

export default NewspaperPage;
