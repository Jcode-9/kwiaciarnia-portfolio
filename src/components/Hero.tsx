import heroImage from "../assets/hero-generated.webp"

function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden px-6 py-24">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div>

          <p className="eyebrow">Pracownia florystyczna · Wrocław</p>
          <h1 className="mt-4 text-5xl font-bold text-green-900 md:text-7xl">
            FloraBloom
          </h1>

          <h2 className="mb-6 text-3xl font-semibold text-gray-800 md:text-4xl">
            Kwiaty, które mówią więcej niż słowa
          </h2>

          <p className="text-gray-600 text-lg mb-8">
        Komponujemy wyjątkowe bukiety i dekoracje kwiatowe, które dodają piękna ważnym chwilom. Dbamy o każdy detal, wybierając świeże kwiaty i tworząc kompozycje dopasowane do Twoich potrzeb.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a href="#kontakt" className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
              Zamów bukiet
            </a>

            <a href="#realizacje" className="border border-green-700 text-green-700 px-6 py-3 rounded-full hover:bg-green-50 transition">
              Realizacje
            </a>

          </div>

        </div>


        <div>

          <div className="hero-image-wrap">
            <img src={heroImage} alt="Kwiaciarnia FloraBloom pełna świeżych kwiatów" className="w-full rounded-[2rem] shadow-2xl" />
            <span className="hero-sticker">kwiaty z charakterem</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero