
import React from 'react';
import { Search, Filter } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
  placeholder?: string;
  filterOptions?: FilterOption[];
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  onSearch,
  onFilter,
  placeholder = "খুঁজুন...",
  filterOptions = []
}) => {
  return (
    <div className="px-4 py-3 bg-white border-b border-gray-100">
      <div className="flex gap-2">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bengali"
          />
        </div>

        {/* Filter Dropdown */}
        {filterOptions.length > 0 && (
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={16} />
            <select
              onChange={(e) => onFilter(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bengali bg-white appearance-none min-w-[120px]"
            >
              <option value="all">সকল</option>
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Quick Filter Buttons for specific categories */}
      {filterOptions.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          <button
            onClick={() => onFilter('all')}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bengali hover:bg-gray-200 transition-colors"
          >
            সকল
          </button>
          {filterOptions.slice(0, 6).map((option) => (
            <button
              key={option.value}
              onClick={() => onFilter(option.value)}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bengali hover:bg-blue-100 transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
