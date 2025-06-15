
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { TestTube } from 'lucide-react';

const Diagnostic = () => {
  const diagnosticServices = [
    {
      id: 1,
      name: "পপুলার ডায়াগনস্টিক সেন্টার",
      phone: "01712-345678",
      address: "কলেজ রোড, ধুনট",
      subcategory: "সম্পূর্ণ ল্যাব"
    },
    {
      id: 2,
      name: "ইবনে সিনা ডায়াগনস্টিক",
      phone: "01819-876543",
      address: "হাসপাতাল রোড, ধুনট",
      subcategory: "ইমেজিং সেন্টার"
    },
    {
      id: 3,
      name: "কমিউনিটি ল্যাব",
      phone: "01561-112222",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "প্যাথলজি ল্যাব"
    }
  ];

  const subcategories = ["সকল", "সম্পূর্ণ ল্যাব", "ইমেজিং সেন্টার", "প্যাথলজি ল্যাব"];

  return (
    <CategoryTemplate
      title="ডায়াগনস্টিক"
      icon={TestTube}
      iconColor="text-blue-600"
      services={diagnosticServices}
      subcategories={subcategories}
      emptyStateMessage="কোন ডায়াগনস্টিক সেবা পাওয়া যায়নি"
    />
  );
};

export default Diagnostic;
