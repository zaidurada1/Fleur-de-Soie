import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BEAUTY_TIPS } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const TipCard: React.FC<{ tip: typeof BEAUTY_TIPS[0] }> = ({ tip }) => {
    const { t } = useLanguage();
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-100px');

    return (
        <div ref={ref} className={`bg-white rounded-4xl shadow-lg overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img src={tip.image} alt={t[`tip_${tip.id}_title`]} loading="lazy" className="w-full h-64 object-cover" />
            <div className="p-8">
                <h3 className="text-2xl font-serif text-charcoal-gray mb-3">{t[`tip_${tip.id}_title`]}</h3>
                <p className="text-gray-600 mb-6">{t[`tip_${tip.id}_excerpt`]}</p>
                <a href="#" className="font-bold text-rose-gold hover:underline">{t.read_more}</a>
            </div>
        </div>
    );
};


const TipsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-soft-beige py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-charcoal-gray">{t.tips_title}</h1>
          <div className="w-24 h-1 bg-rose-gold mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
            {BEAUTY_TIPS.map(tip => <TipCard key={tip.id} tip={tip} />)}
        </div>
      </div>
    </div>
  );
};

export default TipsPage;