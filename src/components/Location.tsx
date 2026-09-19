import { motion } from "framer-motion"

function Location() {
  return (
    <section id="lokalizacja" className="location-section px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow">Odwiedź nas</p>
          <h2 className="mt-3 text-4xl font-bold text-green-900">Kwiaty czekają na Ciebie</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">Wpadnij po świeży bukiet, wybierz coś z naszej pracowni albo porozmawiajmy o dekoracji Twojego wydarzenia.</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-green-900">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">ul. Kwiatowa 15</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Wrocław</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.1 }} className="map-frame">
          <iframe title="Mapa do FloraBloom we Wrocławiu" src="https://www.google.com/maps?q=Wroc%C5%82aw%20Rynek&z=14&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </motion.div>
      </div>
    </section>
  )
}

export default Location