import { useLanguage } from '../components/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  Globe, 
  Shield, 
  Clock, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: '15+', label: t('stats.experience') },
    { value: '50K+', label: t('stats.shipments') },
    { value: '80+', label: t('stats.countries') },
    { value: '200+', label: t('stats.partners') }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('why.experience.title'),
      description: t('why.experience.desc')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('why.global.title'),
      description: t('why.global.desc')
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('why.tracking.title'),
      description: t('why.tracking.desc')
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('why.competitive.title'),
      description: t('why.competitive.desc')
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t('why.customs.title'),
      description: t('why.customs.desc')
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: t('why.insurance.title'),
      description: t('why.insurance.desc')
    }
  ];

  const services = [
    {
      icon: <Plane className="w-10 h-10" />,
      title: t('services.air.title'),
      description: t('services.air.desc'),
      image: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvJTIwZnJlaWdodHxlbnwxfHx8fDE3NjM2NjExNDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Ship className="w-10 h-10" />,
      title: t('services.ocean.title'),
      description: t('services.ocean.desc'),
      image: 'https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NjM3NDc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: t('services.road.title'),
      description: t('services.road.desc'),
      image: 'https://images.unsplash.com/photo-1758224388408-b060b4e0f2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NjM3NDc0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1673714697436-da13c8087c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0JTIwY29udGFpbmVycyUyMGNyYW5lfGVufDF8fHx8MTc2Mzc0NzQwMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4C7C]/95 via-[#1B4C7C]/80 to-[#1B4C7C]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-lg transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {t('hero.cta.quote')}
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 bg-white hover:bg-gray-100 text-[#1B4C7C] rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                {t('hero.cta.contact')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[#1B4C7C] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F1F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[#1B4C7C] mb-4">{t('why.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#E9EFF2] rounded-lg flex items-center justify-center text-[#1B4C7C] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[#1B4C7C] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[#1B4C7C] mb-4">{t('services.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#1B4C7C] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-[#4CAF50] hover:text-[#45a049] inline-flex items-center gap-2 transition-colors"
                  >
                    {t('common.learnMore')}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="px-8 py-3 bg-[#1B4C7C] hover:bg-[#143a5e] text-white rounded-lg transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              {t('nav.services')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B4C7C] to-[#2a6ba8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">
              {t('hero.cta.quote')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-lg transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {t('nav.contact')}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
