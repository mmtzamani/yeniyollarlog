import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Team() {
  const { t } = useLanguage();

  const team = [
    {
      name: t('team.amir.name'),
      title: t('team.amir.title'),
      bio: t('team.amir.bio'),
      image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczMTk3Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('team.kobra.name'),
      title: t('team.kobra.title'),
      bio: t('team.kobra.bio'),
      image: 'https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNzE2ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080'
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
            <h1 className="text-white mb-6">{t('team.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('why.experience.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative h-96 overflow-hidden bg-[#E9EFF2]">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Social Links - Show on hover */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1B4C7C] hover:bg-[#4CAF50] hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1B4C7C] hover:bg-[#4CAF50] hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-[#1B4C7C] mb-2">{member.name}</h3>
                    <div className="text-[#4CAF50] mb-4">{member.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-[#F1F6F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <h2 className="text-[#1B4C7C] mb-6">
                {t('about.values.innovation')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('why.experience.desc')}
              </p>
              <a
                href="mailto:info@yeniyollarlogistics.com"
                className="px-8 py-4 bg-[#1B4C7C] hover:bg-[#143a5e] text-white rounded-lg transition-colors shadow-lg hover:shadow-xl inline-block"
              >
                {t('nav.contact')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}