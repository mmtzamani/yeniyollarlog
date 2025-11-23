import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/a301fb88f0a164d2307def1b76b29a3d0dde171e.png';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/team', label: t('nav.team') },
    { path: '/tracking', label: t('nav.tracking') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="Yeni Yollar Logistics" className="h-12 w-auto" />
            <div className="hidden lg:block">
              <div className="text-[#1B4C7C]">Yeni Yollar Logistics</div>
              <div className="text-xs text-[#889DB0]">International Shipping</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#1B4C7C] bg-[#E9EFF2]'
                    : 'text-gray-700 hover:text-[#1B4C7C] hover:bg-[#F1F6F8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#F1F6F8] rounded-lg p-1">
              {(['tr', 'en', 'fa'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                    language === lang
                      ? 'bg-white text-[#1B4C7C] shadow-sm'
                      : 'text-gray-600 hover:text-[#1B4C7C]'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#1B4C7C]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#1B4C7C] bg-[#E9EFF2]'
                    : 'text-gray-700 hover:text-[#1B4C7C] hover:bg-[#F1F6F8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
