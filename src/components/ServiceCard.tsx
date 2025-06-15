
import React, { useState } from 'react';
import { Phone, MapPin, X, Clock, Globe, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface ServiceCardProps {
  name: string;
  phone?: string;
  address?: string;
  subcategory?: string;
  description?: string;
  website?: string;
  email?: string;
  openingHours?: string;
  services?: string[];
  image?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  name, 
  phone, 
  address, 
  subcategory,
  description = "এই সেবা প্রদানকারী সম্পর্কে আরও তথ্যের জন্য যোগাযোগ করুন।",
  website,
  email,
  openingHours = "সকাল ৯টা - সন্ধ্যা ৬টা",
  services = ["গুণগত সেবা", "দ্রুত সেবা", "বিশ্বস্ত সেবা"],
  image,
  onClick
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const openMap = () => {
    if (address) {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + ', ধুনট')}`;
      window.open(mapUrl, '_blank');
    }
  };

  const handleEmail = (emailAddress: string) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleWebsite = (url: string) => {
    window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      setShowDetails(true);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (showDetails) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg max-w-sm w-full max-h-[80vh] overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                    {getInitials(name)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold text-gray-900">{name}</h3>
              </div>
              <button
                onClick={() => setShowDetails(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={16} />
              </button>
            </div>

            {subcategory && (
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-3">
                {subcategory}
              </span>
            )}

            <p className="text-sm text-gray-600 mb-4">{description}</p>

            <div className="space-y-3 mb-4">
              {phone && (
                <button
                  onClick={() => handlePhoneCall(phone)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full"
                >
                  <Phone size={16} className="mr-3" />
                  <span>{phone}</span>
                </button>
              )}
              
              {address && (
                <button
                  onClick={openMap}
                  className="flex items-start text-sm text-gray-600 w-full text-left"
                >
                  <MapPin size={16} className="mr-3 mt-0.5" />
                  <span>{address}</span>
                </button>
              )}

              <div className="flex items-center text-sm text-gray-600">
                <Clock size={16} className="mr-3" />
                <span>{openingHours}</span>
              </div>

              {email && (
                <button
                  onClick={() => handleEmail(email)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full"
                >
                  <Mail size={16} className="mr-3" />
                  <span>{email}</span>
                </button>
              )}

              {website && (
                <button
                  onClick={() => handleWebsite(website)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full"
                >
                  <Globe size={16} className="mr-3" />
                  <span>{website}</span>
                </button>
              )}
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2 text-sm">সেবাসমূহ:</h4>
              <div className="flex flex-wrap gap-1">
                {services.map((service, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              {phone && (
                <button
                  onClick={() => handlePhoneCall(phone)}
                  className="flex-1 bg-green-500 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-600"
                >
                  কল করুন
                </button>
              )}
              {address && (
                <button
                  onClick={openMap}
                  className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-600"
                >
                  ম্যাপ দেখুন
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 mb-2 cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1 min-w-0">
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-xs">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">{name}</h3>
            
            {subcategory && (
              <p className="text-xs text-blue-600 mb-2">{subcategory}</p>
            )}
            
            {address && (
              <div className="flex items-start text-xs text-gray-500 mb-1">
                <MapPin size={10} className="mr-1 mt-0.5 flex-shrink-0" />
                <span className="truncate">{address}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex gap-1 ml-2">
          {phone && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePhoneCall(phone);
              }}
              className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 flex-shrink-0"
            >
              <Phone size={10} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
