import hero1 from "../assets/hero1.jpg"

function Hero() {
  return (
    <section id="home" className="py-20 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-5xl font-bold text-green-800 mb-4">
            FloraBloom
          </h1>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
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

          <img src={hero1} alt="Budynek kwiaciarni FloraBloom" className="rounded-3xl shadow-xl w-full" />

        </div>

      </div>

    </section>
  )
}

export default Hero