import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBooking } from '../contexts/BookingContext';
import { SERVICES } from '../constants';
import Lightbox from '../components/Lightbox';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { openBookingModal } = useBooking();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" />;
  }

  const serviceTitle = t[`service_${service.id}_title`];

  return (
    <>
      <div className="bg-white">
        {/* Banner */}
        <div className="bg-soft-beige py-24 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-6xl font-serif text-rose-gold">{serviceTitle}</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
              {t[`service_${service.id}_desc`]}
            </p>

            {/* Mini Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {service.images.map((img, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-4xl shadow-lg cursor-pointer"
                  onClick={() => setLightboxImage(img)}
                >
                  <img src={img} alt={`${serviceTitle} example ${index + 1}`} loading="lazy" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => openBookingModal(serviceTitle)}
                className="inline-block bg-rose-gold text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t.book_now}
              </button>
            </div>
          </div>
        </div>
      </div>
      {lightboxImage && <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  );
};

export default ServiceDetailPage;