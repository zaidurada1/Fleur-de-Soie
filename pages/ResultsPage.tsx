import React, {useState} from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { BEFORE_AFTER_IMAGES } from '../constants';
import Lightbox from '../components/Lightbox';

const ResultsPage: React.FC = () => {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <div className="bg-soft-beige py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif text-charcoal-gray">{t.results_title}</h1>
            <div className="w-24 h-1 bg-rose-gold mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BEFORE_AFTER_IMAGES.map((img) => (
              <div 
                key={img.id} 
                className="cursor-pointer" 
                onClick={() => setLightboxImage(img.after)}
              >
                <BeforeAfterSlider before={img.before} after={img.after} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {lightboxImage && <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  );
};

export default ResultsPage;
