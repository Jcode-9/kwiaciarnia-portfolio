import { motion } from "framer-motion"

function Footer() {
return (

<motion.footer
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1.2 }}
  className="bg-green-800 text-white py-10 px-6"
>


  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">


    <div>

      <h2 className="text-2xl font-bold mb-3">
        FloraBloom
      </h2>

      <p className="text-green-100">
        Kwiaciarnia tworzona z pasją do natury i pięknych kompozycji.
      </p>

    </div>




    <div>

      <h3 className="font-bold text-lg mb-3">
        Menu
      </h3>


      <div className="flex flex-col gap-2 text-green-100">

        <a href="#o-nas" className="hover:text-white transition">
          O nas
        </a>

        <a href="#oferta" className="hover:text-white transition">
          Oferta
        </a>

        <a href="#realizacje" className="hover:text-white transition">
          Realizacje
        </a>

        <a href="#kontakt" className="hover:text-white transition">
          Kontakt
        </a>

        <a href="#lokalizacja" className="hover:text-white transition">
          Lokalizacja
        </a>

      </div>

    </div>





    <div>

      <h3 className="font-bold text-lg mb-3">
        Kontakt
      </h3>


      <p className="text-green-100">
        📞 +48 123 456 789
      </p>

      <p className="text-green-100">
        ✉ kontakt@florabloom.pl
      </p>


    </div>



  </div>





  <div className="border-t border-green-600 mt-8 pt-6 text-center text-green-100">


    <p>
      © 2026 FloraBloom. Wszystkie prawa zastrzeżone.
    </p>


    <p className="mt-2">
      Strona wykonana przez <span className="font-bold text-white">JKstudio</span>
    </p>


  </div>



</motion.footer>

)
}

export default Footer