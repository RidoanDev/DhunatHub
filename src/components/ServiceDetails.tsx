
import React from 'react';
import { Phone, MapPin, Mail, Clock, Globe, Star, X } from 'lucide-react';

interface ServiceDetailsProps {
  name: string;
  phone?: string;
  address?: string;
  email?: string;
  website?: string;
  image?: string;
  description?: string;
  subcategory?: string;
  openingHours?: string;
  rating?: number;
  mapEmbed?: string;
  services?: string[];
  onClose?: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ 
  name, 
  phone, 
  address, 
  email, 
  website,
  image, 
  description = "এই সেবা প্রদানকারী সম্পর্কে আরও তথ্যের জন্য যোগাযোগ করুন।",
  subcategory,
  openingHours = "সকাল ৯টা - সন্ধ্যা ৬টা",
  rating,
  mapEmbed,
  services = ["গুণগত সেবা", "দ্রুত সেবা", "বিশ্বস্ত সেবা"],
  onClose
}) => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = (emailAddress: string) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleWebsite = (url: string) => {
    window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
  };

  const openMap = () => {
    if (address) {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + ', ধুনট')}`;
      window.open(mapUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-sm w-full max-h-[80vh] overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {image && (
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          )}
          
          <div className="flex items-start justify-between mb-3">
            <div>
              {subcategory && (
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-2">
                  {subcategory}
                </span>
              )}
            </div>
            {rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{rating}</span>
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-4">{description}</p>

          {services.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">সেবাসমূহ:</h4>
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="space-y-3 mb-4">
            {phone && (
              <button
                onClick={() => handlePhoneCall(phone)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full text-left"
              >
                <Phone size={16} className="mr-3 flex-shrink-0" />
                <span>{phone}</span>
              </button>
            )}
            
            {address && (
              <button
                onClick={openMap}
                className="flex items-start text-sm text-gray-600 w-full text-left"
              >
                <MapPin size={16} className="mr-3 flex-shrink-0 mt-0.5" />
                <span>{address}</span>
              </button>
            )}

            <div className="flex items-center text-sm text-gray-600">
              <Clock size={16} className="mr-3 flex-shrink-0" />
              <span>{openingHours}</span>
            </div>
            
            {email && (
              <button
                onClick={() => handleEmail(email)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full text-left"
              >
                <Mail size={16} className="mr-3 flex-shrink-0" />
                <span>{email}</span>
              </button>
            )}

            {website && (
              <button
                onClick={() => handleWebsite(website)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 w-full text-left"
              >
                <Globe size={16} className="mr-3 flex-shrink-0" />
                <span>{website}</span>
              </button>
            )}
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

          {mapEmbed && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">অবস্থান:</h4>
              <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src={mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map location for ${name}`}
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
