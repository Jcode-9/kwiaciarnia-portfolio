import { useState } from "react"

function Navbar() {

  const [open, setOpen] = useState(false)

  return (

    <nav className="sticky top-0 z-50 relative flex items-center justify-between px-6 py-5 bg-white shadow-sm">


      <h1 className="text-2xl font-bold text-green-800">
        FloraBloom
      </h1>



      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-gray-700">

        <a href="#o-nas" className="hover:text-green-700 transition">
          O nas
        </a>

        <a href="#oferta" className="hover:text-green-700 transition">
          Oferta
        </a>

        <a href="#realizacje" className="hover:text-green-700 transition">
          Realizacje
        </a>

        <a href="#cennik" className="hover:text-green-700 transition">
          Cennik
        </a>

        <a href="#kontakt" className="hover:text-green-700 transition">
          Kontakt
        </a>

      </div>



      <a
        href="#kontakt"
        className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
      >
        Zamów bukiet
      </a>




      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl"
      >
        ☰
      </button>



      {open && (

        <div className="absolute top-full left-0 w-full bg-white md:hidden flex flex-col items-center gap-5 py-6 shadow-md text-gray-700">


          <a 
            href="#o-nas"
            onClick={() => setOpen(false)}
          >
            O nas
          </a>


          <a 
            href="#oferta"
            onClick={() => setOpen(false)}
          >
            Oferta
          </a>


          <a 
            href="#realizacje"
            onClick={() => setOpen(false)}
          >
            Realizacje
          </a>


          <a 
            href="#cennik"
            onClick={() => setOpen(false)}
          >
            Cennik
          </a>


          <a 
            href="#kontakt"
            onClick={() => setOpen(false)}
          >
            Kontakt
          </a>



          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="bg-green-700 text-white px-5 py-2 rounded-full"
          >
            Zamów bukiet
          </a>


        </div>

      )}


    </nav>

  )
}

export default Navbar