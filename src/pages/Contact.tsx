import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner@2.0.3';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Message sent successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.info.phone'),
      details: ['+90 539 716 71 14', '+90 216 999 37 32']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.info.email'),
      details: ['info@yeniyollarlogistics.com']
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.info.address'),
      details: ['Atatürk Mah. Atapark Cad. Atapark Konutları C4 K10 D40, Ataşehir / İstanbul']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#1B4C7C] to-[#2a6ba8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-white mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-[#1B4C7C] mb-6">{t('contact.form.submit')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {t('contact.form.service')}
                    </label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t('contact.form.service')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="air">{t('services.air.title')}</SelectItem>
                        <SelectItem value="ocean">{t('services.ocean.title')}</SelectItem>
                        <SelectItem value="road">{t('services.road.title')}</SelectItem>
                        <SelectItem value="customs">{t('services.customs.title')}</SelectItem>
                        <SelectItem value="warehouse">{t('services.warehouse.title')}</SelectItem>
                        <SelectItem value="consulting">{t('services.consulting.title')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#1B4C7C] hover:bg-[#143a5e] text-white py-6"
                  >
                    <Send className="w-5 h-5 me-2" />
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-[#F1F6F8] rounded-2xl p-8">
                  <h3 className="text-[#1B4C7C] mb-6">{t('contact.info.title')}</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#4CAF50] flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-gray-900 mb-2">{info.title}</div>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-[#1B4C7C] mb-6">{t('footer.social')}</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#E9EFF2] hover:bg-[#4CAF50] rounded-lg flex items-center justify-center text-[#1B4C7C] hover:text-white transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#E9EFF2] hover:bg-[#4CAF50] rounded-lg flex items-center justify-center text-[#1B4C7C] hover:text-white transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#E9EFF2] hover:bg-[#4CAF50] rounded-lg flex items-center justify-center text-[#1B4C7C] hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#E9EFF2] hover:bg-[#4CAF50] rounded-lg flex items-center justify-center text-[#1B4C7C] hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-64 bg-[#E9EFF2] flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.247944674267!2d29.123456!3d40.9976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzUxLjQiTiAyOcKwMDcnMjQuNCJF!5e0!3m2!1sen!2str!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Yeni Yollar Logistics Location"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
