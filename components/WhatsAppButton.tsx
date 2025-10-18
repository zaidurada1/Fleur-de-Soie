import React from 'react';
import { useBooking } from '../contexts/BookingContext';
import { WhatsAppIcon } from './icons';

const WhatsAppButton: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <button
      onClick={() => openBookingModal()}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition-transform duration-300 z-40"
      aria-label="Book an appointment via WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppButton;
