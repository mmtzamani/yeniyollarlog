import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { 
  Plane, 
  Ship, 
  Truck, 
  FileCheck, 
  Warehouse, 
  Globe,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Plane className="w-12 h-12" />,
      title: t('services.air.title'),
      description: t('services.air.desc'),
      image: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvJTIwZnJlaWdodHxlbnwxfHx8fDE3NjM2NjExNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Express Delivery',
        'Temperature Controlled',
        'Dangerous Goods',
        'Customs Clearance'
      ]
    },
    {
      icon: <Ship className="w-12 h-12" />,
      title: t('services.ocean.title'),
      description: t('services.ocean.desc'),
      image: 'https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NjM3NDc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'FCL & LCL',
        'Door to Door',
        'Port to Port',
        'Insurance Coverage'
      ]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: t('services.road.title'),
      description: t('services.road.desc'),
      image: 'https://images.unsplash.com/photo-1758224388408-b060b4e0f2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NjM3NDc0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'FTL & LTL',
        'Cross Border',
        'Real-time Tracking',
        'Flexible Scheduling'
      ]
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: t('services.customs.title'),
      description: t('services.customs.desc'),
      image: 'https://images.unsplash.com/photo-1760001554934-51e7d61f7427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwYm9yZGVyJTIwdHJhZGV8ZW58MXx8fHwxNzYzNzQ3NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Import/Export',
        'Documentation',
        'Compliance',
        'Duty Management'
      ]
    },
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: t('services.warehouse.title'),
      description: t('services.warehouse.desc'),
      image: 'https://images.unsplash.com/photo-1758910076068-e503d97572bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYzNjc2MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Storage Solutions',
        'Inventory Management',
        'Order Fulfillment',
        'Distribution'
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
      image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBkaXN0cmlidXRpb258ZW58MXx8fHwxNzYzNjc0MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Market Analysis',
        'Trade Strategy',
        'Supply Chain',
        'Cost Optimization'
      ]
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
            <h1 className="text-white mb-6">{t('services.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-[#1B4C7C] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="text-[#4CAF50] hover:text-[#45a049] inline-flex items-center gap-2 transition-colors"
                  >
                    {t('hero.cta.quote')}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F1F6F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#1B4C7C] mb-6">
              {t('hero.cta.quote')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('contact.subtitle')}
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#1B4C7C] hover:bg-[#143a5e] text-white rounded-lg transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
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
