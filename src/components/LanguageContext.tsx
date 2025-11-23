import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'tr' | 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': {
    tr: 'Ana Sayfa',
    en: 'Home',
    fa: 'صفحه اصلی'
  },
  'nav.about': {
    tr: 'Hakkımızda',
    en: 'About Us',
    fa: 'درباره ما'
  },
  'nav.services': {
    tr: 'Hizmetler',
    en: 'Services',
    fa: 'خدمات'
  },
  'nav.team': {
    tr: 'Ekibimiz',
    en: 'Our Team',
    fa: 'تیم ما'
  },
  'nav.contact': {
    tr: 'İletişim',
    en: 'Contact',
    fa: 'تماس'
  },
  'nav.tracking': {
    tr: 'Kargo Takibi',
    en: 'Tracking',
    fa: 'پیگیری محموله'
  },
  'nav.gallery': {
    tr: 'Galeri',
    en: 'Gallery',
    fa: 'گالری'
  },
  
  // Hero Section
  'hero.title': {
    tr: 'Uluslararası Lojistik Çözümleri',
    en: 'International Logistics Solutions',
    fa: 'راهکارهای لجستیک بین‌المللی'
  },
  'hero.subtitle': {
    tr: 'Dünya çapında güvenilir nakliye ve dış ticaret hizmetleri',
    en: 'Reliable shipping and foreign trade services worldwide',
    fa: 'خدمات قابل اعتماد حمل و نقل و تجارت خارجی در سراسر جهان'
  },
  'hero.cta.quote': {
    tr: 'Fiyat Teklifi Alın',
    en: 'Get a Quote',
    fa: 'دریافت قیمت'
  },
  'hero.cta.contact': {
    tr: 'İletişime Geçin',
    en: 'Contact Us',
    fa: 'تماس با ما'
  },
  
  // Why Choose Us
  'why.title': {
    tr: 'Neden Bizi Seçmelisiniz?',
    en: 'Why Choose Us?',
    fa: 'چرا ما را انتخاب کنید؟'
  },
  'why.experience.title': {
    tr: 'Deneyim ve Uzmanlık',
    en: 'Experience & Expertise',
    fa: 'تجربه و تخصص'
  },
  'why.experience.desc': {
    tr: 'Uluslararası lojistik alanında uzman ekibimizle güvenilir hizmet',
    en: 'Reliable service with our expert team in international logistics',
    fa: 'خدمات قابل اعتماد با تیم متخصص ما در لجستیک بین‌المللی'
  },
  'why.global.title': {
    tr: 'Küresel Ağ',
    en: 'Global Network',
    fa: 'شبکه جهانی'
  },
  'why.global.desc': {
    tr: 'Dünya genelinde geniş partnerlik ağımızla hızlı teslimat',
    en: 'Fast delivery with our extensive partnership network worldwide',
    fa: 'تحویل سریع با شبکه گسترده شراکت ما در سراسر جهان'
  },
  'why.tracking.title': {
    tr: '7/24 Takip',
    en: '24/7 Tracking',
    fa: 'پیگیری ۲۴/۷'
  },
  'why.tracking.desc': {
    tr: 'Kargonuzu anlık olarak takip edin, her zaman haberdar olun',
    en: 'Track your cargo in real-time, stay informed always',
    fa: 'محموله خود را به صورت لحظه‌ای پیگیری کنید'
  },
  'why.competitive.title': {
    tr: 'Rekabetçi Fiyatlar',
    en: 'Competitive Pricing',
    fa: 'قیمت رقابتی'
  },
  'why.competitive.desc': {
    tr: 'En iyi fiyat garantisi ile kaliteli hizmet',
    en: 'Quality service with best price guarantee',
    fa: 'خدمات با کیفیت با تضمین بهترین قیمت'
  },
  'why.customs.title': {
    tr: 'Gümrük Desteği',
    en: 'Customs Support',
    fa: 'پشتیبانی گمرکی'
  },
  'why.customs.desc': {
    tr: 'Tüm gümrük işlemlerinizi profesyonelce yönetiyoruz',
    en: 'We professionally manage all your customs procedures',
    fa: 'ما تمام رویه‌های گمرکی شما را به صورت حرفه‌ای مدیریت می‌کنیم'
  },
  'why.insurance.title': {
    tr: 'Güvenli Taşıma',
    en: 'Safe Transport',
    fa: 'حمل و نقل ایمن'
  },
  'why.insurance.desc': {
    tr: 'Tam sigortalı ve güvenli nakliye garantisi',
    en: 'Fully insured and safe shipping guarantee',
    fa: 'تضمین حمل و نقل کاملاً بیمه شده و ایمن'
  },
  
  // Services
  'services.title': {
    tr: 'Hizmetlerimiz',
    en: 'Our Services',
    fa: 'خدمات ما'
  },
  'services.air.title': {
    tr: 'Hava Kargo',
    en: 'Air Freight',
    fa: 'حمل هوایی'
  },
  'services.air.desc': {
    tr: 'Hızlı ve güvenilir hava kargo taşımacılığı ile dünya çapında teslimat',
    en: 'Fast and reliable air cargo transport with worldwide delivery',
    fa: 'حمل و نقل هوایی سریع و قابل اعتماد با تحویل در سراسر جهان'
  },
  'services.ocean.title': {
    tr: 'Deniz Yolu',
    en: 'Ocean Freight',
    fa: 'حمل دریایی'
  },
  'services.ocean.desc': {
    tr: 'Konteyner ve dökme yük taşımacılığında ekonomik çözümler',
    en: 'Economical solutions for container and bulk cargo transport',
    fa: 'راهکارهای اقتصادی برای حمل کانتینر و محموله‌های فله'
  },
  'services.road.title': {
    tr: 'Kara Yolu',
    en: 'Road Transport',
    fa: 'حمل زمینی'
  },
  'services.road.desc': {
    tr: 'Bölgesel ve uluslararası kara yolu taşımacılık hizmetleri',
    en: 'Regional and international road transport services',
    fa: 'خدمات حمل و نقل زمینی منطقه‌ای و بین‌المللی'
  },
  'services.customs.title': {
    tr: 'Gümrük Müşavirliği',
    en: 'Customs Clearance',
    fa: 'ترخیص گمرکی'
  },
  'services.customs.desc': {
    tr: 'Profesyonel gümrük işlemleri ve danışmanlık hizmetleri',
    en: 'Professional customs procedures and consulting services',
    fa: 'خدمات حرفه‌ای رویه‌های گمرکی و مشاوره'
  },
  'services.warehouse.title': {
    tr: 'Depolama ve Dağıtım',
    en: 'Warehousing & Distribution',
    fa: 'انبارداری و توزیع'
  },
  'services.warehouse.desc': {
    tr: 'Modern depolama tesisleri ve etkin dağıtım çözümleri',
    en: 'Modern warehousing facilities and efficient distribution solutions',
    fa: 'امکانات انبارداری مدرن و راهکارهای توزیع کارآمد'
  },
  'services.consulting.title': {
    tr: 'Dış Ticaret Danışmanlığı',
    en: 'Global Trade Consulting',
    fa: 'مشاوره تجارت جهانی'
  },
  'services.consulting.desc': {
    tr: 'İthalat ve ihracat işlemlerinde uzman destek ve danışmanlık',
    en: 'Expert support and consulting in import and export operations',
    fa: 'پشتیبانی متخصص و مشاوره در عملیات واردات و صادرات'
  },
  
  // Stats
  'stats.experience': {
    tr: 'Yıllık Deneyim',
    en: 'Years Experience',
    fa: 'سال تجربه'
  },
  'stats.shipments': {
    tr: 'Teslim Edilen Gönderi',
    en: 'Shipments Delivered',
    fa: 'محموله تحویل شده'
  },
  'stats.countries': {
    tr: 'Ülke Kapsamı',
    en: 'Countries Covered',
    fa: 'کشور پوشش داده شده'
  },
  'stats.partners': {
    tr: 'İş Ortağı',
    en: 'Partners',
    fa: 'شریک تجاری'
  },
  
  // About
  'about.title': {
    tr: 'Hakkımızda',
    en: 'About Us',
    fa: 'درباره ما'
  },
  'about.story.title': {
    tr: 'Şirket Hikayemiz',
    en: 'Our Story',
    fa: 'داستان ما'
  },
  'about.story.content': {
    tr: 'Yeni Yollar Logistics, uluslararası nakliye ve dış ticaret alanında güvenilir ve profesyonel hizmet sunan önde gelen bir lojistik firmasıdır. Müşterilerimize hava, deniz ve kara yolu taşımacılığında kapsamlı çözümler sunarak, küresel ticaretin vazgeçilmez ortağı olma misyonuyla çalışmaktayız.',
    en: 'Yeni Yollar Logistics is a leading logistics company providing reliable and professional services in international shipping and foreign trade. We work with the mission of becoming an indispensable partner in global trade by offering comprehensive solutions in air, sea, and road transport to our customers.',
    fa: 'یِنی یولار لجستیک یک شرکت پیشرو در زمینه ارائه خدمات قابل اعتماد و حرفه‌ای در حمل و نقل بین‌المللی و تجارت خارجی است. ما با هدف تبدیل شدن به یک شریک ضروری در تجارت جهانی، راهکارهای جامع در حمل و نقل هوایی، دریایی و زمینی به مشتریان خود ارائه می‌دهیم.'
  },
  'about.mission.title': {
    tr: 'Misyonumuz',
    en: 'Our Mission',
    fa: 'ماموریت ما'
  },
  'about.mission.content': {
    tr: 'Müşterilerimize en yüksek kalitede lojistik hizmetler sunarak, uluslararası ticarette güvenilir ve yenilikçi çözümler üretmek.',
    en: 'To provide the highest quality logistics services to our customers and create reliable and innovative solutions in international trade.',
    fa: 'ارائه خدمات لجستیک با بالاترین کیفیت به مشتریان و ایجاد راهکارهای قابل اعتماد و نوآورانه در تجارت بین‌المللی.'
  },
  'about.vision.title': {
    tr: 'Vizyonumuz',
    en: 'Our Vision',
    fa: 'چشم‌انداز ما'
  },
  'about.vision.content': {
    tr: 'Bölgede ve dünyada lider lojistik şirketlerinden biri olmak ve müşteri memnuniyetinde her zaman en üst seviyeyi hedeflemek.',
    en: 'To be one of the leading logistics companies in the region and worldwide, always aiming for the highest level of customer satisfaction.',
    fa: 'یکی از شرکت‌های پیشرو لجستیک در منطقه و جهان بودن و همیشه هدف گذاری بالاترین سطح رضایت مشتری.'
  },
  'about.values.title': {
    tr: 'Değerlerimiz',
    en: 'Our Values',
    fa: 'ارزش‌های ما'
  },
  'about.values.reliability': {
    tr: 'Güvenilirlik',
    en: 'Reliability',
    fa: 'قابلیت اطمینان'
  },
  'about.values.transparency': {
    tr: 'Şeffaflık',
    en: 'Transparency',
    fa: 'شفافیت'
  },
  'about.values.speed': {
    tr: 'Hız',
    en: 'Speed',
    fa: 'سرعت'
  },
  'about.values.innovation': {
    tr: 'Yenilikçilik',
    en: 'Innovation',
    fa: 'نوآوری'
  },
  
  // Team
  'team.title': {
    tr: 'Yönetim Ekibimiz',
    en: 'Our Management Team',
    fa: 'تیم مدیریت ما'
  },
  'team.amir.name': {
    tr: 'Bay Amir Osouli Shojaei',
    en: 'Mr. Amir Osouli Shojaei',
    fa: 'آقای امیر اصولی شجاعی'
  },
  'team.amir.title': {
    tr: 'Kurucu ve CEO',
    en: 'Founder & CEO',
    fa: 'بنیانگذار و مدیرعامل'
  },
  'team.amir.bio': {
    tr: 'Uluslararası lojistik sektöründe geniş deneyime sahip, vizyoner liderlik anlayışıyla şirketi başarıdan başarıya taşıyor.',
    en: 'With extensive experience in the international logistics sector, leading the company from success to success with visionary leadership.',
    fa: 'با تجربه گسترده در بخش لجستیک بین‌المللی، با رهبری آینده‌نگر شرکت را از موفقیتی به موفقیت دیگر می‌برد.'
  },
  'team.kobra.name': {
    tr: 'Bayan Kobra Khosravi',
    en: 'Ms. Kobra Khosravi',
    fa: 'خانم کبری خسروی'
  },
  'team.kobra.title': {
    tr: 'Program Müdürü ve Müdür Yardımcısı',
    en: 'Program Manager & Deputy Director',
    fa: 'مدیر برنامه و معاون مدیریت'
  },
  'team.kobra.bio': {
    tr: 'Operasyonel mükemmellik ve stratejik planlama konusunda uzman, şirket süreçlerini etkin bir şekilde yönetiyor.',
    en: 'Expert in operational excellence and strategic planning, effectively managing company processes.',
    fa: 'متخصص در تعالی عملیاتی و برنامه‌ریزی استراتژیک، مدیریت موثر فرآیندهای شرکت.'
  },
  'team.hamed.name': {
    tr: 'Bay Hamed Mobarhan',
    en: 'Mr. Hamed Mobarhan',
    fa: 'آقای حامد مبارهان'
  },
  'team.hamed.title': {
    tr: 'Muhasebe Müdürü',
    en: 'Accountant',
    fa: 'حسابدار'
  },
  'team.hamed.bio': {
    tr: 'Finansal yönetim ve muhasebe konusunda uzman, şirketin mali sağlığını titizlikle korumaktadır.',
    en: 'Expert in financial management and accounting, meticulously safeguarding the company\'s financial health.',
    fa: 'متخصص در مدیریت مالی و حسابداری، حافظ دقیق سلامت مالی شرکت.'
  },
  
  // Contact
  'contact.title': {
    tr: 'İletişime Geçin',
    en: 'Get in Touch',
    fa: 'تماس با ما'
  },
  'contact.subtitle': {
    tr: 'Sorularınız için bizimle iletişime geçin',
    en: 'Contact us for your inquiries',
    fa: 'برای سوالات خود با ما تماس بگیرید'
  },
  'contact.form.name': {
    tr: 'Adınız Soyadınız',
    en: 'Your Name',
    fa: 'نام شما'
  },
  'contact.form.email': {
    tr: 'E-posta Adresiniz',
    en: 'Your Email',
    fa: 'ایمیل شما'
  },
  'contact.form.phone': {
    tr: 'Telefon Numaranız',
    en: 'Your Phone',
    fa: 'تلفن شما'
  },
  'contact.form.service': {
    tr: 'Hizmet Türü',
    en: 'Service Type',
    fa: 'نوع خدمات'
  },
  'contact.form.message': {
    tr: 'Mesajınız',
    en: 'Your Message',
    fa: 'پیام شما'
  },
  'contact.form.submit': {
    tr: 'Gönder',
    en: 'Submit',
    fa: 'ارسال'
  },
  'contact.info.title': {
    tr: 'İletişim Bilgileri',
    en: 'Contact Information',
    fa: 'اطلاعات تماس'
  },
  'contact.info.address': {
    tr: 'Adres',
    en: 'Address',
    fa: 'آدرس'
  },
  'contact.info.phone': {
    tr: 'Telefon',
    en: 'Phone',
    fa: 'تلفن'
  },
  'contact.info.email': {
    tr: 'E-posta',
    en: 'Email',
    fa: 'ایمیل'
  },
  
  // Tracking
  'tracking.title': {
    tr: 'Kargo Takibi',
    en: 'Shipment Tracking',
    fa: 'پیگیری محموله'
  },
  'tracking.subtitle': {
    tr: 'Kargonuzun konumunu anında öğrenin',
    en: 'Track your shipment location instantly',
    fa: 'موقعیت محموله خود را فوراً پیگیری کنید'
  },
  'tracking.input.placeholder': {
    tr: 'Takip numaranızı girin',
    en: 'Enter your tracking number',
    fa: 'شماره پیگیری خود را وارد کنید'
  },
  'tracking.button': {
    tr: 'Takip Et',
    en: 'Track',
    fa: 'پیگیری'
  },
  
  // Gallery
  'gallery.title': {
    tr: 'Galeri',
    en: 'Gallery',
    fa: 'گالری'
  },
  'gallery.subtitle': {
    tr: 'Lojistik operasyonlarımızdan görüntüler',
    en: 'Images from our logistics operations',
    fa: 'تصاویر از عملیات لجستیک ما'
  },
  
  // Footer
  'footer.about.title': {
    tr: 'Yeni Yollar Logistics',
    en: 'Yeni Yollar Logistics',
    fa: 'یِنی یولار لجستیک'
  },
  'footer.about.desc': {
    tr: 'Uluslararası nakliye ve dış ticaret alanında güvenilir ortağınız.',
    en: 'Your reliable partner in international shipping and foreign trade.',
    fa: 'شریک قابل اعتماد شما در حمل و نقل بین‌المللی و تجارت خارجی.'
  },
  'footer.links.title': {
    tr: 'Hızlı Bağlantılar',
    en: 'Quick Links',
    fa: 'لینک‌های سریع'
  },
  'footer.services.title': {
    tr: 'Hizmetlerimiz',
    en: 'Our Services',
    fa: 'خدمات ما'
  },
  'footer.contact.title': {
    tr: 'İletişim',
    en: 'Contact',
    fa: 'تماس'
  },
  'footer.rights': {
    tr: 'Tüm hakları saklıdır.',
    en: 'All rights reserved.',
    fa: 'تمامی حقوق محفوظ است.'
  },
  'footer.social': {
    tr: 'Sosyal Medya',
    en: 'Social Media',
    fa: 'شبکه‌های اجتماعی'
  },
  
  // Common
  'common.learnMore': {
    tr: 'Daha Fazla Bilgi',
    en: 'Learn More',
    fa: 'اطلاعات بیشتر'
  },
  'common.readMore': {
    tr: 'Devamını Oku',
    en: 'Read More',
    fa: 'ادامه مطلب'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const dir = language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const dir = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
