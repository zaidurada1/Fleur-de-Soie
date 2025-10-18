
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PHONE_NUMBER } from '../constants';
import { InstagramIcon, FacebookIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-charcoal-gray">{t.contact_title}</h1>
          <div className="w-24 h-1 bg-rose-gold mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-soft-beige p-12 rounded-4xl shadow-xl">
          {/* Form */}
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.contact_form_name}</label>
                <input type="text" id="name" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-rose-gold focus:border-rose-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.contact_form_email}</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-rose-gold focus:border-rose-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.contact_form_message}</label>
                <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-rose-gold focus:border-rose-gold"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-rose-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {t.contact_form_send}
                </button>
              </div>
            </form>
          </div>
          
          {/* Info & Map */}
          <div className="lg:w-1/2">
             <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif text-charcoal-gray mb-4">{t.contact_info_title}</h3>
                    <p className="text-gray-700">{t.contact_info_address}</p>
                    <p className="text-gray-700 font-bold mt-2">
                        <a href={`tel:${PHONE_NUMBER}`} className="hover:text-rose-gold">{PHONE_NUMBER}</a>
                    </p>
                </div>
                 <div>
                    <h3 className="text-2xl font-serif text-charcoal-gray mb-4">{t.contact_follow_us}</h3>
                    <div className="flex gap-4">
                        <a href="#" className="text-charcoal-gray hover:text-rose-gold transition-colors duration-300"><InstagramIcon className="w-7 h-7" /></a>
                        <a href="#" className="text-charcoal-gray hover:text-rose-gold transition-colors duration-300"><FacebookIcon className="w-7 h-7" /></a>
                    </div>
                </div>
                 <div className="h-64 rounded-3xl overflow-hidden shadow-md">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625948962!2d2.292292615674384!3d48.85837007928751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1678886938368!5m2!1sen!2sfr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
