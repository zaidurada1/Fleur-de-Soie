import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TEAM_MEMBERS } from '../constants';

const TeamPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-charcoal-gray">{t.team_title}</h1>
          <div className="w-24 h-1 bg-rose-gold mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={member.id} className="group relative text-center" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-105">
                <img src={member.image} alt={t[`team_member_${member.id}_name`]} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4">
                  <p className="text-white text-lg italic">"{t.team_quote}"</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-serif text-charcoal-gray">{t[`team_member_${member.id}_name`]}</h3>
                <p className="text-rose-gold">{t[`team_member_${member.id}_role`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;