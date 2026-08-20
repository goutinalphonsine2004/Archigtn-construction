{/* cate de  A propos*/}

const propos = [
    {
        titre: "Expertise",
        description: "Des compétences en architecture et en BTP réunies au sein d'une même équipe."
    },
    {
        titre: "Quatilé",
        description: "Un soin apporté à chaque détail, de la conception à la finition."
    },
    {
        titre: "Accompagnement",
        description: "Un interlocuteur présent à chaque étape de votre projet."
    },
    {
        titre: "Professionnalisme",
        description: "Des méthodes de travail rigoureuses et transparentes."
    },
    {
        titre: "Écoute",
        description: "Des solutions construites autour des besoins réels du client."
    },
]

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


function Propos(){
   return(
     <>
    <section className="bg-slate-800 text-white py-24 px-8">
         <div className="max-w-7xl m-auto">
                <div className="flex items-center gap-3 mb-4 text-orange-500 font-semibold uppercase">
                    <span className="w-8 h-px bg-orange-500"></span>
                    À propos
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Votre partenaire pour <br /> des constructions <br />pensées pour durer</h2>
                <p className="flex flex-wrap text-gray-400">Pour la réalisation de vos concepts modernes et l'accomplissement de vos rêves en construction</p>

         </div>
    </section>

    <section className="max-w-7xl m-auto py-24 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <img src="/images/1.jpeg" alt="Chantier de construction" 
                  className="rounded-2xl w-full h-[800px] object-cover"
                  />
                  
                  <div>
                        <p className="text-gray-800 text-lg mb-6">Archigtnconstruction accompagne ses clients dans leurs projets de construction, depuis la conception des plans jusqu'à la réalisation des travaux. Notre objectif est de proposer des solutions modernes, adaptées aux besoins de chaque client et aux exigences de son projet.</p>
                        <p className="text-gray-600 text-sm
                         mb-12">Basée au Bénin, la structure est spécialisée dans la conception et la construction de maisons et d'autres types de bâtiments, depuis l'implantation du projet jusqu'à la remise des clés : plans architecturaux modernes, plans structuraux en BTP, surveillance et contrôle des travaux, réalisation et réfection de travaux, conseils dans le domaine du bâtiment, ainsi que la construction de bâtiments à toiture-terrasse (dalle) ou à toiture légère.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {propos.map((propo) => (
                                <div key={propo} className="rounded-xl border border-transparent bg-gray-100 p-3 hover:bg-gray-200 hover:border-orange-200 hover:shadow-xl">
                                    <h3 className="font-bold mb-4">{propo.titre}</h3>
                                    <p className="text-sm text-gray-600">{propo.description}</p>
                                </div>
                            ))}
                        </div>
                  </div>
         </div>
    </section>

     {/* Methode*/}

        <section className="bg-slate-100 py-24">
                < div className="max-w-7xl m-auto  px-6 ">
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
export default Propos