import React, { useState, useEffect } from 'react';
import { useBooking } from '../contexts/BookingContext';
import { useLanguage } from '../contexts/LanguageContext';
import { PHONE_NUMBER, SERVICES } from '../constants';

const BookingModal: React.FC = () => {
  const { isBookingModalOpen, bookingService, closeBookingModal } = useBooking();
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState(bookingService);

  useEffect(() => {
    setService(bookingService);
  }, [bookingService]);

  if (!isBookingModalOpen) {
    return null;
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !service) {
      alert('Please fill out all fields.');
      return;
    }

    const message = [
      t.whatsapp_greeting,
      t.whatsapp_intro,
      `${t.form_label_name} ${name}`,
      `${t.form_label_phone} ${phone}`,
      `${t.form_label_service} ${service}`,
      `${t.form_label_date} ${date}`,
      t.whatsapp_outro,
    ].filter(Boolean).join('\n');
    
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeBookingModal();
    // Reset form
    setName('');
    setPhone('');
    setDate('');
    setService('');
  };
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
        closeBookingModal();
    }
  }

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
        onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-4xl shadow-2xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-95 animate-scale-in">
        <button onClick={closeBookingModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="text-3xl font-serif text-charcoal-gray text-center mb-6">{t.booking_modal_title}</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.form_label_name}</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t.form_placeholder_name} required className="w-full px-4 py-3 bg-soft-beige border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.form_label_phone}</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder={t.form_placeholder_phone} required className="w-full px-4 py-3 bg-soft-beige border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.form_label_service}</label>
            {bookingService ? (
                 <input type="text" value={service} readOnly className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-full cursor-not-allowed" />
            ) : (
                <select value={service} onChange={e => setService(e.target.value)} required className="w-full px-4 py-3 bg-soft-beige border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-gold appearance-none">
                    <option value="">{t.form_select_service}</option>
                    {SERVICES.map(s => (
                        <option key={s.id} value={t[`service_${s.id}_title`]}>{t[`service_${s.id}_title`]}</option>
                    ))}
                </select>
            )}
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.form_label_date}</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full px-4 py-3 bg-soft-beige border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-gold" />
          </div>
          <button type="submit" className="w-full bg-rose-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg mt-4">
            {t.form_submit}
          </button>
        </form>
      </div>
       <style>{`
            @keyframes scale-in {
                from { transform: scale(0.95); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }
       `}</style>
    </div>
  );
};

export default BookingModal;
