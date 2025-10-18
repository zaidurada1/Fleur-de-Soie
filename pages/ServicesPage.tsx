
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-charcoal-gray">{t.nav_services}</h1>
          <div className="w-24 h-1 bg-rose-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id} 
              className="group block bg-soft-beige p-8 rounded-4xl shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <service.icon className="w-20 h-20 mx-auto text-rose-gold transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-2xl font-serif mt-6 mb-3 text-charcoal-gray">{t[`service_${service.id}_title`]}</h3>
                <p className="text-gray-600 mb-6 h-16">{t[`service_${service.id}_desc`]}</p>
                <span className="font-bold text-rose-gold group-hover:underline">
                    {t.home_services_discover} &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
