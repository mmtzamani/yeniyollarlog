import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logoImage from 'figma:asset/a301fb88f0a164d2307def1b76b29a3d0dde171e.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1B4C7C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <img src={logoImage} alt="Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <h3 className="mb-3">{t('footer.about.title')}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.about.desc')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4CAF50] flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4CAF50] flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4CAF50] flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4CAF50] flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">{t('services.air.title')}</li>
              <li className="text-gray-300">{t('services.ocean.title')}</li>
              <li className="text-gray-300">{t('services.road.title')}</li>
              <li className="text-gray-300">{t('services.customs.title')}</li>
              <li className="text-gray-300">{t('services.warehouse.title')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Atatürk Mah. Atapark Cad. Atapark Konutları C4 K10 D40, Ataşehir / İstanbul
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#4CAF50] flex-shrink-0" />
                <div className="text-gray-300">
                  <div>+90 539 716 71 14</div>
                  <div>+90 216 999 37 32</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#4CAF50] flex-shrink-0" />
                <span className="text-gray-300">info@yeniyollarlogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© 2025 Yeni Yollar Logistics. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
