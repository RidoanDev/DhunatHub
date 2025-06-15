
import React, { useState, useEffect } from 'react';
import Header from './Header';
import BottomNavBar from './BottomNavBar';
import AdvancedSearch from './AdvancedSearch';
import ServiceCard from './ServiceCard';
import ServiceDetails from './ServiceDetails';

interface Service {
  id: number;
  name: string;
  phone: string;
  address: string;
  description?: string;
  category?: string;
  subcategory: string;
  rating?: number;
  distance?: string;
  isOpen?: boolean;
  openTime?: string;
  closeTime?: string;
  specialties?: string[];
  experience?: string;
  education?: string;
  languages?: string[];
  emergencyAvailable?: boolean;
  onlineConsultation?: boolean;
  fee?: string;
  website?: string;
  email?: string;
  image?: string;
}

interface CategoryTemplateProps {
  title: string;
  icon: React.ComponentType<any>;
  iconColor?: string;
  services: Service[];
  subcategories: string[];
  description?: string;
  emptyStateMessage?: string;
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  title,
  icon: IconComponent,
  iconColor = "text-blue-600",
  services,
  subcategories,
  description,
  emptyStateMessage = "কোন সেবা পাওয়া যায়নি"
}) => {
  const [filteredServices, setFilteredServices] = useState(services);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleSearch = (filters: { searchTerm: string; subcategory: string }) => {
    let filtered = services;

    if (filters.searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        service.address.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        (service.description && service.description.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      );
    }

    if (filters.subcategory && filters.subcategory !== "সকল") {
      filtered = filtered.filter(service => service.subcategory === filters.subcategory);
    }

    setFilteredServices(filtered);
  };

  useEffect(() => {
    setFilteredServices(services);
  }, [services]);

  return (
    <div className="min-h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
      
      <Header />
      
      <div className="px-4 py-4 pb-20">
        <div className="flex items-center mb-4">
          <IconComponent size={20} className={iconColor + " mr-2"} />
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>

        {description && (
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
        )}

        <AdvancedSearch 
          onSearch={handleSearch}
          subcategories={subcategories}
        />

        <div className="mt-4 space-y-3">
          {filteredServices.length === 0 ? (
            <div className="text-center py-8">
              <IconComponent size={48} className="text-gray-300 mx-auto mb-3" />
              <h3 className="text-base font-medium text-gray-900 mb-1">{emptyStateMessage}</h3>
              <p className="text-gray-600 text-sm">অন্য ক্যাটাগরিতে খুঁজে দেখুন</p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                phone={service.phone}
                address={service.address}
                subcategory={service.subcategory}
                description={service.description}
                website={service.website}
                email={service.email}
                image={service.image}
                onClick={() => setSelectedService(service)}
              />
            ))
          )}
        </div>
      </div>

      <BottomNavBar />

      {selectedService && (
        <ServiceDetails
          name={selectedService.name}
          phone={selectedService.phone}
          address={selectedService.address}
          subcategory={selectedService.subcategory}
          description={selectedService.description}
          website={selectedService.website}
          email={selectedService.email}
          image={selectedService.image}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default CategoryTemplate;
