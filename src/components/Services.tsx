const services = [
  {
    title: "Bukiety okolicznościowe",
    description: "Tworzymy wyjątkowe kompozycje kwiatowe na urodziny, rocznice i inne ważne chwile."
  },
  {
    title: "Dekoracje ślubne",
    description: "Przygotowujemy eleganckie dekoracje kwiatowe sal, kościołów oraz miejsc ceremonii."
  },
  {
    title: "Kwiaty premium",
    description: "Wybieramy świeże kwiaty od sprawdzonych dostawców, dbając o najwyższą jakość."
  },
  {
    title: "Dostawa kwiatów",
    description: "Dostarczamy bukiety pod wskazany adres, aby sprawić komuś wyjątkową niespodziankę."
  },
  {
    title: "Flower boxy",
    description: "Tworzymy eleganckie pudełka kwiatowe idealne na prezent dla bliskiej osoby."
  },
  {
    title: "Rośliny doniczkowe",
    description: "Oferujemy rośliny do domu i biura wraz z pomocą w ich wyborze."
  }
]


function Services() {
  return (
    <section id="oferta" className="py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Nasza oferta
        </h2>


        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div 
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >

              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services