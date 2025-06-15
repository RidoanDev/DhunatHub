
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface AdvancedSearchProps {
  onSearch: (filters: { searchTerm: string; subcategory: string }) => void;
  subcategories: string[];
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ onSearch, subcategories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const handleSearch = (newSearchTerm?: string, newSubcategory?: string) => {
    onSearch({
      searchTerm: newSearchTerm !== undefined ? newSearchTerm : searchTerm,
      subcategory: newSubcategory !== undefined ? newSubcategory : subcategory
    });
  };

  const handleFilterClick = (category: string) => {
    const newCategory = category === "সকল" ? "" : category;
    setSubcategory(newCategory);
    handleSearch(undefined, newCategory);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="খুঁজুন..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
          }}
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
        {subcategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterClick(cat)}
            className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
              (subcategory === "" && cat === "সকল") || subcategory === cat
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdvancedSearch;
