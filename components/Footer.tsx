import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { InstagramIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white py-12">
            <div className="container mx-auto px-6 text-center text-charcoal-gray">
                <h3 className="text-3xl font-serif font-bold">
                    Fleur <span className="text-rose-gold">de Soie</span>
                </h3>
                <p className="mt-4 text-sm max-w-md mx-auto">{t.hero_tagline}</p>
                <div className="flex justify-center gap-6 mt-8">
                    <a href="#" className="text-charcoal-gray hover:text-rose-gold transition-colors duration-300">
                        <InstagramIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-charcoal-gray hover:text-rose-gold transition-colors duration-300">
                        <FacebookIcon className="w-6 h-6" />
                    </a>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Fleur de Soie. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;