
{/* cate de  Pourquoi nous*/}

const atouts = [
  {
    icone: "🏅",
    titre: "Expertise",
    description: "Une équipe spécialisée dans la conception et la construction.",
  },
  {
    icone: "🤝",
    titre: "Accompagnement",
    description: "Un accompagnement du projet de l'implantation jusqu'à la remise des clés.",
  },
  {
    icone: "🧩",
    titre: "Solutions personnalisées",
    description: "Des conceptions adaptées aux besoins et aux contraintes de chaque projet.",
  },
  {
    icone: "🛡️",
    titre: "Qualité",
    description: "Une attention particulière portée à la qualité des travaux et des conceptions.",
  },
  {
    icone: "💬",
    titre: "Conseils professionnels",
    description: "Un accompagnement dans les différentes étapes du projet.",
  },
  {
    icone: "🕒",
    titre: "Disponibilité",
    description: "Une équipe disponible pour répondre aux demandes des clients.",
  },
];

const methode = [
  {
    num: "01",
    titre: "Consultation",
    description: "Le client présente son projet et ses besoins."
  },
  {
    num: "02",
    titre: "Étude",
    description: "Analyse du terrain, des besoins et des contraintes du projet."
  },
  {
    num: "03",
    titre: "Conception",
    description: "Réalisation des plans architecturaux et structuraux."
  },
  {
    num: "04",
    titre: "Construction",
    description: "Réalisation et suivi des travaux."
  },
  {
    num: "05",
    titre: "Livraison",
    description: "Finalisation du projet et remise des clés."
  },
]



function PourquoiNous(){
    return(
        <>
        <section className="bg-slate-800 text-white py-24 px-8">
           <div className="max-w-7xl m-auto">
                <div className="flex items-center gap-3 mb-4 text-orange-500 font-semibold uppercase">
                    <span className="w-8 h-px bg-orange-500"></span>
                    Nos atouts
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Pourquoi nous choisir ?</h2>
                <p className="flex flex-wrap text-gray-400">Une équipe engagée, des méthodes claires et des solutions adaptées à chaque projet.</p>
          </div>
       </section>

        {/* Pourquoi nous*/}

         <section className="py-24">
              <div className="max-w-7xl m-auto px-6">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                          {atouts.map((atout) => (
                            <div key={atout.titre} className="rounded-xl bg-white p-10 border border-gray-200 hover:border-orange-500 transition-colors hover:shadow-2xl hover:rounded-2xl">
                                <div className="text-orange-500 text-2xl mb-4">{atout.icone}</div>
                                <h3 className="text-lg font-bold">{atout.titre}</h3>
                                <p className="text-gray-700 text-sm">{atout.description}</p>
                            </div>
                          ))}
                      </div>
              </div>
         </section>

         {/* Methode*/}
        
        <section className="bg-slate-100 py-24">
                < div className="max-w-7xl m-auto px-6 ">
                      <div className="flex items-center gap-3 mb-4 text-orange-500 font-semibold uppercase">
                          <span className="w-8 h-px bg-orange-500"></span>
                          Methode
                      </div>

                      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Comment se déroule votre projet ?</h1>

                      <p className="text-gray-600 flex flex-wrap mb-10">Un déroulement clair, en cinq étapes, pour avancer sereinement de la première rencontre à la remise des clés.</p>

                      <div className="grid grid-cols-1 md:grid-cols-5 space-x-20 space-y-5">
                          {methode.map((met) => (
                            <div key={met.titre} className="space-y-3 border-t hover:border-t-orange-500 ">
                                <div className="text-3xl text-orange-500 font-semibold">{met.num}</div>
                                <h2 className="font-semibold text-lg">{met.titre}</h2>
                                <p className="text-gray-600 ">{met.description}</p>
                            </div>
                          ))}
                      </div>
               </ div>
        </section>


          <section className="bg-slate-800 text-white py-24 px-8">
                      <div className="max-w-7xl m-auto">
                          <div className="grid grid-cols-1 md:grid-cols-2 space-x-40 space-y-20">
                              <div className="space-y-3">
                                  <h3 className="text-2xl md:text-4xl font-extrabold">Vous avez un projet <br /> de construction ?</h3>
                                  <p className="text-gray-400 text-sm">Parlons de votre projet et construisons ensemble une solution adaptée à vos besoins.</p>
                              </div>

                              <div className="flex items-center gap-3">
                                  <button className="bg-orange-500 text-white px-4 py-2 rounded-xl"><a href="/devis">Demander un devis </a></button>
                                  <button className="outline outline-gray-400 text-white px-4 py-2 rounded-xl">
                                    <a 
                                        href="https://wa.me/22967034944"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-orange-500"
                                    >
                                        💬 WhatsApp
                                    </a> 
                                    </button>
                              </div>
                          </div>
                      </div>

          </section>
      

        </>
    )
}
export default PourquoiNous