import aboutImg from "../assets/about1.webp"
import { motion } from "framer-motion"

const stats = [
  {
    number: "15+",
    text: "Lat doświadczenia"
  },
  {
    number: "5000+",
    text: "Stworzonych bukietów"
  },
  {
    number: "100%",
    text: "Świeżych kwiatów"
  }
]

function About() {
  return (

    <section id="o-nas" className="py-20 px-6">

      <div className="max-w-7xl mx-auto">


        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="text-4xl font-bold text-center text-green-800 mb-12"
        >
          Nasza historia zaczęła się od pasji do kwiatów
        </motion.h2>



        <div className="flex flex-col md:flex-row items-center gap-12">


          <motion.img
            src={aboutImg}
            alt="Wnętrze kwiaciarni FloraBloom"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          />



          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="md:w-1/2 text-center md:text-left"
          >


            <p className="text-gray-600 text-base min-[400px]:text-lg leading-relaxed mb-8">
              FloraBloom powstało z pasji do kwiatów i potrzeby tworzenia wyjątkowych
              miejsc, w których natura spotyka się z kreatywnością. Od początku naszej
              działalności wierzymy, że kwiaty potrafią wyrażać emocje lepiej niż słowa —
              dlatego każdy bukiet traktujemy jako osobną historię.
              <br /><br />
              Nasza kwiacarnia to miejsce, gdzie doświadczenie florystyczne łączy się
              z indywidualnym podejściem do każdego klienta. Tworzymy zarówno klasyczne
              bukiety, jak i niepowtarzalne kompozycje dopasowane do wyjątkowych okazji.
              <br /><br />
              Współpracujemy z zaufanymi dostawcami, wybierając kwiaty starannie pod
              względem jakości i świeżości. Dzięki temu możemy każdego dnia dostarczać
              piękne aranżacje, które zachwycają wyglądem i trwałością.
            </p>



            <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-6 text-center">


              {stats.map((item, index) => (

                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.3
                  }}
                >

                  <h3 className="text-xl min-[400px]:text-3xl font-bold text-green-700">
                    {item.number}
                  </h3>

                  <p className="text-gray-600">
                    {item.text}
                  </p>

                </motion.div>

              ))}


            </div>


          </motion.div>


        </div>


      </div>


    </section>

  )
}

export default About