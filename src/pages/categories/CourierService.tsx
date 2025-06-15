
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Truck } from 'lucide-react';

const CourierService = () => {
  const courierServices = [
    {
      id: 1,
      name: "ধুনট কুরিয়ার সার্ভিস",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "স্থানীয় কুরিয়ার"
    },
    {
      id: 2,
      name: "এক্সপ্রেস ডেলিভারি",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "জাতীয় কুরিয়ার"
    }
  ];

  const subcategories = ["সকল", "স্থানীয় কুরিয়ার", "জাতীয় কুরিয়ার", "দ্রুত সেবা"];

  return (
    <CategoryTemplate
      title="কুরিয়ার"
      icon={Truck}
      iconColor="text-indigo-600"
      services={courierServices}
      subcategories={subcategories}
      emptyStateMessage="কোন কুরিয়ার সেবা পাওয়া যায়নি"
    />
  );
};

export default CourierService;
