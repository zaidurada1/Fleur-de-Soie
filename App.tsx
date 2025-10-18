import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { BookingProvider } from './contexts/BookingContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import OffersPage from './pages/OffersPage';
import TeamPage from './pages/TeamPage';
import ResultsPage from './pages/ResultsPage';
import TipsPage from './pages/TipsPage';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BookingProvider>
        <HashRouter>
          <div className="bg-soft-beige text-charcoal-gray font-sans">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:id" element={<ServiceDetailPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/tips" element={<TipsPage />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <BookingModal />
          </div>
        </HashRouter>
      </BookingProvider>
    </LanguageProvider>
  );
};

export default App;
