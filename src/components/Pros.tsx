const pros = [
  {
    numer: "01",
    tytul: "🌱 Świeże kwiaty",
    opis: "Codziennie wybieramy najlepsze okazy, aby nasze kompozycje zachwycały wyglądem i trwałością."
  },
  {
    numer: "02",
    tytul: "✨ Indywidualne podejście",
    opis: "Każdy bukiet tworzymy specjalnie dla Ciebie, dopasowując go do okazji i oczekiwań."
  },
  {
    numer: "03",
    tytul: "🚚 Szybka dostawa",
    opis: "Dostarczamy kwiaty na czas, aby wyjątkowe chwile mogły wydarzyć się dokładnie wtedy, kiedy trzeba."
  }
]


function Pros() {
  return (
    <section className="py-20 px-6 bg-green-50">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
          Dlaczego warto nam zaufać?
        </h2>


        <div className="space-y-10">

          {pros.map((element) => (

            <div 
              key={element.numer}
              className="flex flex-col md:flex-row items-center gap-8 border-b border-green-200 pb-10"
            >

              <span className="text-5xl font-bold text-green-700">
                {element.numer}
              </span>


              <div className="text-center md:text-left">

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {element.tytul}
                </h3>

                <p className="text-gray-600 text-lg">
                  {element.opis}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Pros