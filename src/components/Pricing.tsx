
const prices = [
  {
    name: "Bukiet klasyczny",
    description: "Delikatna kompozycja kwiatowa idealna na codzienne okazje.",
    price: "80 zł"
  },
  {
    name: "Bukiet premium",
    description: "Wyjątkowy bukiet z najlepszych i starannie wybranych kwiatów.",
    price: "150 zł"
  },
  {
    name: "Flower box",
    description: "Eleganckie pudełko kwiatowe będące idealnym prezentem.",
    price: "120 zł"
  },
  {
    name: "Dekoracje ślubne",
    description: "Kompleksowa oprawa kwiatowa sali oraz ceremonii ślubnej.",
    price: "od 500 zł"
  },
  {
    name: "Wieńce i kompozycje",
    description: "Starannie przygotowane kompozycje na wyjątkowe uroczystości.",
    price: "od 200 zł"
  },
  {
    name: "Dostawa kwiatów",
    description: "Dostarczenie zamówienia pod wskazany adres.",
    price: "od 20 zł"
  }
]


function Pricing() {
  return (

   <section id="cennik" className="pricing-section relative overflow-hidden px-3 py-20 min-[500px]:px-6">

      <div className="relative z-10 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Cennik
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow-lg">


         <table className="w-full bg-white table-fixed">


            <thead className="bg-green-700 text-white">

              <tr>

             <th className="p-2 max-[300px]:p-1 min-[500px]:p-5 text-center text-xs max-[300px]:text-[10px] min-[500px]:text-base">
                  Usługa
                </th>

             <th className="p-2 max-[300px]:p-1 min-[500px]:p-5 text-center text-xs max-[300px]:text-[10px] min-[500px]:text-base">
                  Opis
                </th>

            <th className="p-2 max-[300px]:p-1 min-[500px]:p-5 text-center text-xs max-[300px]:text-[10px] min-[500px]:text-base">
                  Cena
                </th>

              </tr>

            </thead>



            <tbody>

              {prices.map((item) => (

                <tr key={item.name} className="border-b hover:bg-green-50 transition">
                 <td className="p-2 max-[300px]:p-1 min-[500px]:p-5 font-bold text-gray-800 text-xs max-[300px]:text-[10px] min-[500px]:text-base">
                    {item.name}
                  </td>
                <td className="p-2 max-[300px]:p-1 min-[500px]:p-5 text-gray-600 text-xs max-[300px]:text-[9px] min-[500px]:text-base">
                    {item.description}
                  </td>


               <td className="p-2 max-[300px]:p-1 min-[500px]:p-5 text-center font-bold text-green-700 text-xs max-[300px]:text-[10px] min-[500px]:text-base whitespace-nowrap">
                    {item.price}
                  </td>


                </tr>

              ))}

            </tbody>


          </table>


        </div>


      </div>


    </section>

  )
}


export default Pricing