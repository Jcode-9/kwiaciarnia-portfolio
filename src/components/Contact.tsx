import { useState } from "react"
import type { FormEvent } from "react"

const contactInfo = [
  {
    title: "Adres",
    value: "ul. Kwiatowa 15, Wrocław"
  },
  {
    title: "Telefon",
    value: "+48 123 456 789"
  },
  {
    title: "Email",
    value: "kontakt@florabloom.pl"
  }
]

function Contact() {

  const [status, setStatus] = useState("")


  async function handleSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault()

    const form = e.currentTarget

    const data = new FormData(form)


    const response = await fetch("https://formspree.io/f/mvkpzopl", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    })


    if (response.ok) {
      setStatus("Wiadomość została wysłana!")
      form.reset()
    } 
    else {
      setStatus("Wystąpił błąd. Spróbuj ponownie.")
    }

  }


  return (

    <section id="kontakt" className="py-20 px-6">

      <div className="max-w-6xl mx-auto">


        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Kontakt
        </h2>



        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-10">



          <div className="space-y-6">


            {contactInfo.map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >

                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {item.title}
                </h3>


                <p className="text-gray-600">
                  {item.value}
                </p>


              </div>

            ))}


          </div>





          <div className="bg-white rounded-2xl shadow-md p-8">


            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Napisz do nas
            </h3>




            <form onSubmit={handleSubmit} className="space-y-5">


              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                required
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />



              <input
                type="email"
                name="email"
                placeholder="Adres email"
                required
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />



              <textarea
                name="message"
                placeholder="Twoja wiadomość"
                rows={5}
                required
                className="w-full border rounded-xl p-4 outline-none resize-none focus:ring-2 focus:ring-green-500"
              />



              <button
                type="submit"
                className="w-full bg-green-700 text-white py-4 rounded-xl font-bold hover:bg-green-800 transition"
              >
                Wyślij wiadomość
              </button>


            </form>




            {status && (

              <p className="mt-5 text-center text-green-700 font-semibold">
                {status}
              </p>

            )}


          </div>


        </div>


      </div>


    </section>

  )

}


export default Contact