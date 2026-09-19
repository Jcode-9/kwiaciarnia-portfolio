import { useState } from "react"
import gallery1 from "../assets/gallery1.webp"
import gallery2 from "../assets/gallery2.webp"
import gallery3 from "../assets/gallery3.webp"
import gallery4 from "../assets/gallery4.webp"
import gallery5 from "../assets/gallery5.webp"
import { motion } from "framer-motion"


type Image = {
  src: string
  alt: string
}


const gallery: Image[] = [
  { src: gallery1, alt: "Bukiet różany" },
  { src: gallery2, alt: "Bukiet ślubny" },
  { src: gallery3, alt: "Kompozycja kwiatowa" },
  { src: gallery4, alt: "Flower box" },
  { src: gallery5, alt: "Dekoracja ślubna" }
]


function Gallery() {

  const [selectedImage, setSelectedImage] = useState<Image | null>(null)


  return (

    <section id="realizacje" className="py-20 px-6">

      <div className="max-w-6xl mx-auto">


        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3 }}
          className="text-4xl font-bold text-center text-green-800 mb-12"
        >
          Nasze realizacje
        </motion.h2>



        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-6 mb-6">


          {gallery.slice(0, 2).map((image, index) => (

            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: index * 0.2
              }}
              className="h-[350px] overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >

              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />

            </motion.div>

          ))}


        </div>




        <div className="grid grid-cols-1 min-[500px]:grid-cols-3 gap-6">


          {gallery.slice(2, 5).map((image, index) => (

            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: index * 0.2
              }}
              className="h-[250px] overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >

              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />

            </motion.div>

          ))}


        </div>


      </div>




      {selectedImage && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >


          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >


            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              ×
            </button>



            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] rounded-2xl shadow-2xl"
            />


          </motion.div>


        </motion.div>

      )}



    </section>

  )
}


export default Gallery