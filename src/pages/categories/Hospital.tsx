
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Building2 } from 'lucide-react';

const Hospital = () => {
  const hospitals = [
    {
      id: 1,
      name: "ধুনট উপজেলা স্বাস্থ্য কমপ্লেক্স",
      phone: "0582-456789",
      address: "হাসপাতাল রোড, ধুনট সদর",
      subcategory: "সরকারি হাসপাতাল"
    },
    {
      id: 2,
      name: "পপুলার হাসপাতাল ধুনট",
      phone: "01719-998888",
      address: "কলেজ রোড, ধুনট",
      subcategory: "বেসরকারি হাসপাতাল"
    },
    {
      id: 3,
      name: "ইসলামী ব্যাংক কমিউনিটি হাসপাতাল",
      phone: "01567-776666",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "কমিউনিটি হাসপাতাল"
    }
  ];

  const subcategories = ["সকল", "সরকারি হাসপাতাল", "বেসরকারি হাসপাতাল", "কমিউনিটি হাসপাতাল"];

  return (
    <CategoryTemplate
      title="হাসপাতাল"
      icon={Building2}
      iconColor="text-red-600"
      services={hospitals}
      subcategories={subcategories}
      emptyStateMessage="কোন হাসপাতাল পাওয়া যায়নি"
    />
  );
};

export default Hospital;
