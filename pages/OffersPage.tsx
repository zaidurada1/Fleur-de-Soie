import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBooking } from '../contexts/BookingContext';
import { OFFERS } from '../constants';

const CountdownTimer: React.FC<{ endDate: string }> = ({ endDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(endDate) - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="text-center">
            <span className="text-4xl font-bold">{value < 10 ? `0${value}` : value}</span>
            <span className="block text-xs uppercase">{interval}</span>
        </div>
    ));

    return <div className="flex gap-4">{timerComponents}</div>;
}

const OffersPage: React.FC = () => {
  const { t } = useLanguage();
  const { openBookingModal } = useBooking();

  return (
    <div className="bg-soft-beige py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-charcoal-gray">{t.offers_title}</h1>
          <div className="w-24 h-1 bg-rose-gold mx-auto mt-4"></div>
        </div>

        <div className="space-y-12">
          {OFFERS.map(offer => {
            const offerTitle = t[`offer_${offer.id}_title`];
            return (
                <div key={offer.id} className="relative w-full h-auto md:h-[500px] rounded-4xl overflow-hidden shadow-2xl flex items-end p-8 md:p-12 text-white">
                <img src={offer.image} alt={offerTitle} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10 w-full flex flex-col gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-4xl font-serif font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{offerTitle}</h2>
                        <p className="mt-2 text-lg" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{t[`offer_${offer.id}_desc`]}</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/20 shadow-lg">
                        <div>
                            <h3 className="text-center text-sm uppercase tracking-widest mb-2">{t.offers_limited_time}</h3>
                            <CountdownTimer endDate={offer.endDate} />
                        </div>
                        <button 
                            onClick={() => openBookingModal(offerTitle)}
                            className="bg-rose-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto"
                        >
                            {t.book_now}
                        </button>
                    </div>
                </div>
                </div>
            );
        })}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;