import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBooking } from '../contexts/BookingContext';
import { SERVICES } from '../constants';
import TestimonialSlider from '../components/TestimonialSlider';
import useOnScreen from '../hooks/useOnScreen';

const AnimatedSection: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-100px');
    return (
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const { openBookingModal } = useBooking();
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // Lazy load the video source to prevent it from blocking initial render
    setVideoSrc("https://assets.mixkit.co/videos/preview/mixkit-cosmetologist-making-a-face-massage-3323-large.mp4");
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          poster="https://picsum.photos/1920/1080?random=100"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
            Fleur de Soie
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light tracking-wider">
            {t.hero_tagline}
          </p>
          <button
            onClick={() => openBookingModal()}
            className="mt-8 inline-block bg-rose-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t.hero_cta}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-soft-beige">
        <div className="container mx-auto px-6 text-center">
            <AnimatedSection>
                <h2 className="text-4xl font-serif mb-12">{t.home_services_title}</h2>
                <div className="grid md:grid-cols-3 gap-10">
                {SERVICES.slice(0, 3).map((service) => (
                    <div key={service.id} className="bg-white p-8 rounded-4xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <service.icon className="w-16 h-16 mx-auto text-rose-gold" />
                    <h3 className="text-2xl font-serif mt-6 mb-3">{t[`service_${service.id}_title`]}</h3>
                    <p className="text-gray-500 mb-6">{t[`service_${service.id}_desc`].substring(0, 70)}...</p>
                    <Link to="/services" className="font-bold text-rose-gold hover:underline">
                        {t.home_services_discover}
                    </Link>
                    </div>
                ))}
                </div>
            </AnimatedSection>
        </div>
      </section>
      
      {/* Gradient Divider */}
      <div className="h-24 bg-gradient-to-b from-soft-beige to-white"></div>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
             <AnimatedSection>
                <h2 className="text-4xl font-serif mb-12">{t.home_testimonials_title}</h2>
                <TestimonialSlider />
            </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;