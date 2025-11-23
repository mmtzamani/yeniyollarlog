import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Search, Package, MapPin, CheckCircle, Clock, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export default function Tracking() {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      // Simulate tracking result
      setTrackingResult({
        trackingNumber: trackingNumber,
        status: 'in_transit',
        origin: 'Istanbul, Turkey',
        destination: 'Dubai, UAE',
        estimatedDelivery: '2025-11-25',
        currentLocation: 'Abu Dhabi International Airport',
        timeline: [
          {
            status: 'picked_up',
            location: 'Istanbul, Turkey',
            date: '2025-11-20',
            time: '10:30',
            completed: true
          },
          {
            status: 'in_transit',
            location: 'Abu Dhabi, UAE',
            date: '2025-11-22',
            time: '14:45',
            completed: true
          },
          {
            status: 'out_for_delivery',
            location: 'Dubai, UAE',
            date: '2025-11-25',
            time: '09:00',
            completed: false
          },
          {
            status: 'delivered',
            location: 'Dubai, UAE',
            date: '2025-11-25',
            time: '16:00',
            completed: false
          }
        ]
      });
    }
  };

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
            <h1 className="text-white mb-6">{t('tracking.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('tracking.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F1F6F8] rounded-2xl p-8 mb-12"
          >
            <form onSubmit={handleTrack} className="flex gap-4">
              <Input
                type="text"
                placeholder={t('tracking.input.placeholder')}
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 h-14 text-lg"
                required
              />
              <Button
                type="submit"
                className="bg-[#1B4C7C] hover:bg-[#143a5e] text-white px-8 h-14"
              >
                <Search className="w-5 h-5 me-2" />
                {t('tracking.button')}
              </Button>
            </form>
          </motion.div>

          {/* Tracking Results */}
          {trackingResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Status Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Tracking Number</div>
                    <div className="text-[#1B4C7C]">{trackingResult.trackingNumber}</div>
                  </div>
                  <div className="px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] rounded-lg">
                    In Transit
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#E9EFF2] rounded-lg flex items-center justify-center text-[#1B4C7C] flex-shrink-0">
                      <Package size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Origin</div>
                      <div className="text-gray-900">{trackingResult.origin}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#E9EFF2] rounded-lg flex items-center justify-center text-[#1B4C7C] flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Destination</div>
                      <div className="text-gray-900">{trackingResult.destination}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#E9EFF2] rounded-lg flex items-center justify-center text-[#1B4C7C] flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Estimated Delivery</div>
                      <div className="text-gray-900">{trackingResult.estimatedDelivery}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#F1F6F8] rounded-lg flex items-center gap-3">
                  <Truck className="text-[#4CAF50]" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Current Location</div>
                    <div className="text-gray-900">{trackingResult.currentLocation}</div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-[#1B4C7C] mb-8">Shipment Timeline</h3>
                
                <div className="relative">
                  {trackingResult.timeline.map((event: any, index: number) => (
                    <div key={index} className="relative flex gap-6 pb-8 last:pb-0">
                      {/* Timeline Line */}
                      {index < trackingResult.timeline.length - 1 && (
                        <div
                          className={`absolute left-6 top-12 bottom-0 w-0.5 ${
                            event.completed ? 'bg-[#4CAF50]' : 'bg-gray-300'
                          }`}
                        />
                      )}

                      {/* Timeline Icon */}
                      <div
                        className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          event.completed
                            ? 'bg-[#4CAF50] text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {event.completed ? (
                          <CheckCircle size={24} />
                        ) : (
                          <Clock size={24} />
                        )}
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-gray-900 capitalize">
                            {event.status.replace('_', ' ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            {event.date} {event.time}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">{event.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Info Cards */}
          {!trackingResult && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[#E9EFF2] rounded-full flex items-center justify-center text-[#1B4C7C] mx-auto mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-[#1B4C7C] mb-2">{t('why.tracking.title')}</h3>
                <p className="text-sm text-gray-600">{t('why.tracking.desc')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[#E9EFF2] rounded-full flex items-center justify-center text-[#1B4C7C] mx-auto mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-[#1B4C7C] mb-2">{t('why.global.title')}</h3>
                <p className="text-sm text-gray-600">{t('why.global.desc')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[#E9EFF2] rounded-full flex items-center justify-center text-[#1B4C7C] mx-auto mb-4">
                  <Package size={24} />
                </div>
                <h3 className="text-[#1B4C7C] mb-2">{t('why.insurance.title')}</h3>
                <p className="text-sm text-gray-600">{t('why.insurance.desc')}</p>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
