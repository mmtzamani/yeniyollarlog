import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Globe2, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: <Award className="w-8 h-8" />, label: t('about.values.reliability') },
    { icon: <Users className="w-8 h-8" />, label: t('about.values.transparency') },
    { icon: <TrendingUp className="w-8 h-8" />, label: t('about.values.speed') },
    { icon: <Globe2 className="w-8 h-8" />, label: t('about.values.innovation') }
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
            <h1 className="text-white mb-6">{t('about.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Yeni Yollar Logistics - {t('footer.about.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#1B4C7C] mb-6">{t('about.story.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('about.story.content')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F1F6F8] p-6 rounded-lg">
                  <div className="text-[#1B4C7C] mb-2">15+</div>
                  <div className="text-gray-600">{t('stats.experience')}</div>
                </div>
                <div className="bg-[#F1F6F8] p-6 rounded-lg">
                  <div className="text-[#1B4C7C] mb-2">80+</div>
                  <div className="text-gray-600">{t('stats.countries')}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBkaXN0cmlidXRpb258ZW58MXx8fHwxNzYzNjc0MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="About Us"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#4CAF50] rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F1F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E9EFF2] rounded-xl flex items-center justify-center text-[#1B4C7C] mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-[#1B4C7C] mb-4">{t('about.mission.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.mission.content')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E9EFF2] rounded-xl flex items-center justify-center text-[#1B4C7C] mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-[#1B4C7C] mb-4">{t('about.vision.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.vision.content')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[#1B4C7C] mb-4">{t('about.values.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#E9EFF2] rounded-full flex items-center justify-center text-[#1B4C7C] mx-auto mb-4 hover:bg-[#4CAF50] hover:text-white transition-colors">
                  {value.icon}
                </div>
                <div className="text-gray-700">{value.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B4C7C] to-[#2a6ba8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-white mb-12">{t('why.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-white mb-3">{t('why.global.title')}</h3>
                <p className="text-white/90">{t('why.global.desc')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-white mb-3">{t('about.values.speed')}</h3>
                <p className="text-white/90">{t('why.tracking.desc')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-white mb-3">{t('about.values.reliability')}</h3>
                <p className="text-white/90">{t('why.experience.desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
