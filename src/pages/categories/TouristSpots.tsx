
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { MapPin } from 'lucide-react';

const TouristSpots = () => {
  const touristServices = [
    {
      id: 1,
      name: "ধুনট নদীর ঘাট",
      phone: "01712-345678",
      address: "নদীর পাড়, ধুনট",
      subcategory: "প্রাকৃতিক স্থান"
    },
    {
      id: 2,
      name: "ঐতিহাসিক মসজিদ",
      phone: "01819-876543",
      address: "পুরাতন বাজার, ধুনট",
      subcategory: "ঐতিহাসিক স্থান"
    }
  ];

  const subcategories = ["সকল", "প্রাকৃতিক স্থান", "ঐতিহাসিক স্থান", "ধর্মীয় স্থান"];

  return (
    <CategoryTemplate
      title="দর্শনীয় স্থান"
      icon={MapPin}
      iconColor="text-purple-600"
      services={touristServices}
      subcategories={subcategories}
      emptyStateMessage="কোন দর্শনীয় স্থান পাওয়া যায়নি"
    />
  );
};

export default TouristSpots;
