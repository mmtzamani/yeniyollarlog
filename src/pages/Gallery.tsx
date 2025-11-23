import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Gallery() {
  const { t } = useLanguage();

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NjM3NDc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Ocean Freight',
      category: 'Sea Transport'
    },
    {
      url: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvJTIwZnJlaWdodHxlbnwxfHx8fDE3NjM2NjExNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Air Freight',
      category: 'Air Transport'
    },
    {
      url: 'https://images.unsplash.com/photo-1758224388408-b060b4e0f2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NjM3NDc0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Road Transport',
      category: 'Land Transport'
    },
    {
      url: 'https://images.unsplash.com/photo-1673714697436-da13c8087c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0JTIwY29udGFpbmVycyUyMGNyYW5lfGVufDF8fHx8MTc2Mzc0NzQwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Port Operations',
      category: 'Container Handling'
    },
    {
      url: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBkaXN0cmlidXRpb258ZW58MXx8fHwxNzYzNjc0MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Warehouse',
      category: 'Storage Solutions'
    },
    {
      url: 'https://images.unsplash.com/photo-1758910076068-e503d97572bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYzNjc2MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Warehouse Operations',
      category: 'Distribution'
    },
    {
      url: 'https://images.unsplash.com/photo-1760001554934-51e7d61f7427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwYm9yZGVyJTIwdHJhZGV8ZW58MXx8fHwxNzYzNzQ3NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Customs & Border',
      category: 'Trade Services'
    },
    {
      url: 'https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NjM3NDc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Container Ships',
      category: 'Ocean Freight'
    },
    {
      url: 'https://images.unsplash.com/photo-1673714697436-da13c8087c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0JTIwY29udGFpbmVycyUyMGNyYW5lfGVufDF8fHx8MTc2Mzc0NzQwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Loading Operations',
      category: 'Port Services'
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
            <h1 className="text-white mb-6">{t('gallery.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all aspect-[4/3]"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white mb-1">{image.title}</div>
                    <div className="text-sm text-white/80">{image.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F1F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-md"
            >
              <div className="text-[#1B4C7C] mb-2">15+</div>
              <div className="text-gray-600">{t('stats.experience')}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center bg-white rounded-xl p-8 shadow-md"
            >
              <div className="text-[#1B4C7C] mb-2">50K+</div>
              <div className="text-gray-600">{t('stats.shipments')}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center bg-white rounded-xl p-8 shadow-md"
            >
              <div className="text-[#1B4C7C] mb-2">80+</div>
              <div className="text-gray-600">{t('stats.countries')}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center bg-white rounded-xl p-8 shadow-md"
            >
              <div className="text-[#1B4C7C] mb-2">200+</div>
              <div className="text-gray-600">{t('stats.partners')}</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
