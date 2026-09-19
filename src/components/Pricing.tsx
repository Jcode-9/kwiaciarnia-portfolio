import bg1 from "../assets/bg1.webp"
import bg2 from "../assets/bg2.webp"

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

   <section id="cennik" className="relative overflow-hidden py-20 px-3 min-[500px]:px-6">

      <img src={bg1} alt="" className="absolute right-0 top-0 w-72 opacity-60 pointer-events-none"/>

      <img src={bg2} alt="" className="absolute left-0 bottom-0 w-72 opacity-60 pointer-events-none"/>

      <div className="absolute inset-0 bg-white/70"></div>

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