
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { ShoppingCart, Phone, MapPin, Tag } from 'lucide-react';

const BuySell = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buySellings = [
    { id: 1, name: 'নিউ মার্কেট', owner: 'আব্দুল করিম', location: 'ধুনট সদর', phone: '01711000141', type: 'পোশাক ও কাপড়', details: 'সকল ধরনের পোশাক, শাড়ি, লুঙ্গি পাওয়া যায়' },
    { id: 2, name: 'ইলেকট্রনিক্স বাজার', owner: 'মোস্তফা কামাল', location: 'ধুনট বাজার', phone: '01711000142', type: 'ইলেকট্রনিক্স পণ্য', details: 'মোবাইল, ফ্যান, টিভি, ফ্রিজ বিক্রয়' },
    { id: 3, name: 'কৃষি উপকরণ দোকান', owner: 'রফিক উদ্দিন', location: 'ধুনট পৌরসভা', phone: '01711000143', type: 'কৃষি সামগ্রী', details: 'বীজ, সার, কৃষি যন্ত্রপাতি' },
    { id: 4, name: 'বই স্টেশনারি', owner: 'নুরুল আমিন', location: 'ধুনট রেলস্টেশন', phone: '01711000144', type: 'বই ও স্টেশনারি', details: 'পাঠ্যবই, খাতা, কলম সকল শিক্ষা উপকরণ' },
    { id: 5, name: 'ফার্নিচার হাউস', owner: 'জসিম উদ্দিন', location: 'ধুনট সদর', phone: '01711000145', type: 'আসবাবপত্র', details: 'খাট, টেবিল, চেয়ার, আলমারি' },
    { id: 6, name: 'কসমেটিক্স কর্নার', owner: 'রোকেয়া বেগম', location: 'ধুনট বাজার', phone: '01711000146', type: 'প্রসাধনী সামগ্রী', details: 'সকল ধরনের প্রসাধনী ও পারফিউম' },
    { id: 7, name: 'স্পোর্টস গুডস', owner: 'তারেক আহমেদ', location: 'ধুনট পৌরসভা', phone: '01711000147', type: 'খেলাধুলার সামগ্রী', details: 'ফুটবল, ক্রিকেট ব্যাট, শাটলকক' },
    { id: 8, name: 'হার্ডওয়্যার শপ', owner: 'আলম হোসেন', location: 'ধুনট সদর', phone: '01711000148', type: 'নির্মাণ সামগ্রী', details: 'রড, সিমেন্ট, ইট, বালি' },
    { id: 9, name: 'জুয়েলারি শপ', owner: 'নাসির উদ্দিন', location: 'ধুনট রেলস্টেশন', phone: '01711000149', type: 'অলংকার', details: 'সোনা, রুপা, কৃত্রিম অলংকার' },
    { id: 10, name: 'গিফট শপ', owner: 'সাবিনা খাতুন', location: 'ধুনট বাজার', phone: '01711000150', type: 'উপহার সামগ্রী', details: 'জন্মদিন, বিয়ে ও অন্যান্য অনুষ্ঠানের উপহার' }
  ];

  const filterOptions = [
    { value: 'পোশাক ও কাপড়', label: 'পোশাক ও কাপড়' },
    { value: 'ইলেকট্রনিক্স পণ্য', label: 'ইলেকট্রনিক্স' },
    { value: 'কৃষি সামগ্রী', label: 'কৃষি সামগ্রী' },
    { value: 'বই ও স্টেশনারি', label: 'বই ও স্টেশনারি' },
    { value: 'আসবাবপত্র', label: 'আসবাবপত্র' },
    { value: 'প্রসাধনী সামগ্রী', label: 'প্রসাধনী' },
    { value: 'খেলাধুলার সামগ্রী', label: 'খেলাধুলা' },
    { value: 'নির্মাণ সামগ্রী', label: 'নির্মাণ সামগ্রী' },
    { value: 'অলংকার', label: 'অলংকার' },
    { value: 'উপহার সামগ্রী', label: 'উপহার' }
  ];

  const filteredBuySellings = buySellings.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterType === 'all' || item.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-4">
          <div className="flex items-center">
            <ShoppingCart className="mr-2" size={20} />
            <h1 className="text-lg font-bold">কেনাবেচা</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="দোকান, পণ্য বা মালিক খুঁজুন..."
          filterOptions={filterOptions}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredBuySellings.length > 0 ? (
              filteredBuySellings.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 text-base">{item.name}</h3>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Tag size={14} className="mr-2 text-gray-400" />
                      <span>{item.details}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2 text-gray-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Phone size={14} className="mr-2 text-gray-400" />
                        <a href={`tel:${item.phone}`} className="text-blue-600 hover:underline">{item.phone}</a>
                      </div>
                      <span className="text-xs text-gray-500">মালিক: {item.owner}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <ShoppingCart size={48} className="mx-auto mb-4 text-gray-300" />
                <p>কোন ফলাফল পাওয়া যায়নি</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default BuySell;
