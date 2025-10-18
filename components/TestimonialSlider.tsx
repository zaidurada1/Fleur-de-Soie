
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TESTIMONIALS } from '../constants';

const TestimonialSlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center text-center">
      {TESTIMONIALS.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl italic max-w-2xl">
              "{t[`testimonial_${testimonial.id}_text`]}"
            </p>
            <p className="mt-4 font-bold text-rose-gold text-lg">
              - {t[`testimonial_${testimonial.id}_author`]}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 flex gap-2">
        {TESTIMONIALS.map((_, index) => (
             <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? 'bg-rose-gold' : 'bg-gray-300'
                }`}
            />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
