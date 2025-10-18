import React, { createContext, useState, useContext, ReactNode } from 'react';

interface BookingContextType {
  isBookingModalOpen: boolean;
  bookingService: string;
  openBookingModal: (serviceName?: string) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState('');

  const openBookingModal = (serviceName: string = '') => {
    setBookingService(serviceName);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setBookingService('');
  };

  return (
    <BookingContext.Provider value={{ isBookingModalOpen, bookingService, openBookingModal, closeBookingModal }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
