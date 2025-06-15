
import React from 'react';
import CategoryTemplate from '../../components/CategoryTemplate';
import { CreditCard } from 'lucide-react';

const BankInsurance = () => {
  const bankServices = [
    {
      id: 1,
      name: "সোনালী ব্যাংক ধুনট শাখা",
      phone: "01712-345678",
      address: "কেন্দ্রীয় বাজার, ধুনট",
      subcategory: "সরকারি ব্যাংক"
    },
    {
      id: 2,
      name: "ইসলামী বীমা কোম্পানি",
      phone: "01819-876543",
      address: "স্টেশন রোড, ধুনট",
      subcategory: "বীমা কোম্পানি"
    }
  ];

  const subcategories = ["সকল", "সরকারি ব্যাংক", "বেসরকারি ব্যাংক", "বীমা কোম্পানি"];

  return (
    <CategoryTemplate
      title="ব্যাংক ও বীমা"
      icon={CreditCard}
      iconColor="text-teal-600"
      services={bankServices}
      subcategories={subcategories}
      emptyStateMessage="কোন ব্যাংক বা বীমা সেবা পাওয়া যায়নি"
    />
  );
};

export default BankInsurance;
