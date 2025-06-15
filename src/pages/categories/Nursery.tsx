
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { Baby } from 'lucide-react';

const Nursery = () => {
  const nurseryServices = [
    {
      id: 1,
      name: "ধুনট বাগান নার্সারি",
      phone: "01712-345678",
      address: "সবজি বাজার, ধুনট",
      subcategory: "গাছের নার্সারি"
    },
    {
      id: 2,
      name: "শিশু দেখাশোনা কেন্দ্র",
      phone: "01819-876543",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "শিশু নার্সারি"
    }
  ];

  const subcategories = ["সকল", "গাছের নার্সারি", "শিশু নার্সারি"];

  return (
    <CategoryTemplate
      title="নার্সারি"
      icon={Baby}
      iconColor="text-pink-600"
      services={nurseryServices}
      subcategories={subcategories}
      emptyStateMessage="কোন নার্সারি পাওয়া যায়নি"
    />
  );
};

export default Nursery;
