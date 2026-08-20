
const services = [
  {
    categorie: "Plans architecturaux",
    titre: "Plans architecturaux modernes et personnalisés",
    description: "Conception de plans adaptés au terrain, aux besoins du client et au style de bâtiment souhaité.",
    icone: "🖊",
    p1: "Étude d'implantation et analyse du terrain",
    p2: "Plans de masse, de niveaux, façades et coupes",
    p3: "Adaptation du style au budget et aux usages"         
  },
  {
    categorie: "Plans structuraux",
    titre: "Plans structuraux en BTP",
    description: "Conception des plans nécessaires à la structure et à la solidité des bâtiments.",
    icone: "✏️",
    p1: "Plans de fondations, poteaux, poutres et dalles",
    p2: "Dimensionnement adapté au type de bâtiment",
    p3: "Coordination avec les plans architecturaux"       
  },
  {
    categorie: "Construction",
    titre: "Construction de bâtiments",
    description: "Accompagnement et réalisation de projets de construction, de l'implantation jusqu'à la remise des clés.",
    icone: "🏢",
    p1: "Toiture-terrasse (dalle) ou toiture légère",
    p2: "Maisons, villas et bâtiments professionnels",
    p3: "Suivi complet jusqu'à la remise des clés"  
  },
  {
    categorie: "Surveillance & contrôle",
    titre: "Surveillance et contrôle des travaux",
    description: "Suivi des travaux afin de veiller au bon déroulement du chantier et au respect des exigences du projet.",
    icone: "📋",
    p1: "Contrôle de la conformité aux plans",
    p2: "Suivi de l'avancement du chantier",
    p3: "Rapports et conseils réguliers au client"   
  },
  {
    categorie: "Réfection",
    titre: "Réfection et rénovation",
    description: "Intervention pour les travaux de réfection, rénovation et amélioration des bâtiments existants.",
    icone: "🔧",
    p1: "Diagnostic du bâtiment existant",
    p2: "Travaux de reprise et de modernisation",
    p3: "Amélioration du confort et de l'esthétique"   
  },
  {
    categorie: "Conseil",
    titre: "Conseils en BTP",
    description: "Accompagnement et conseils pour aider les clients à prendre de bonnes décisions concernant leurs projets de construction.",
    icone: "💡",
    p1: " Orientation technique et budgétaire",
    p2: "Choix des matériaux et des solutions",
    p3: "Accompagnement à chaque étape du projet" 
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


function Services(){
    return(
        <>
        <section className="bg-slate-800 text-white py-24 px-8">
           <div className="max-w-7xl m-auto">
                <div className="flex items-center gap-3 mb-4 text-orange-500 font-semibold uppercase">
                    <span className="w-8 h-px bg-orange-500"></span>
                    Service
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Nos Services</h2>
                <p className="flex flex-wrap text-gray-400">De l'étude du terrain à la remise des clés, nous couvrons l'ensemble des besoins de votre projet de construction.</p>

          </div>
       </section>

        <section className="max-w-7xl m-auto py-24 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) =>(
                        <div key={service} className="rounded-xl p-8 border border-gray-200 hover:border-orange-500 transition-colors hover:shadow-2xl">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-5 bg-slate-900 text-white group-hover:bg-orange-500 transition-colors">
                                {service.icone}
                            </div>

                            <p className="text-orange-500 text-xs font-semibold mb-2 uppercase">{service.categorie}</p>

                            <h3 className="font-bold text-lg mb-3">{service.titre}</h3>

                            <p className="text-gray-600 text-sm mb-4 ">{service.description}</p>

                            <p className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 bg-orange-500"></span>
                                {service.p1}
                            </p>
                            <p className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 bg-orange-500"></span>
                                {service.p2}
                            </p>
                            <p className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 bg-orange-500"></span>
                                {service.p3}
                            </p>

                           <a href="#" className="text-slate-900 font-medium text-sm inline-flex items-center gap-1">  En savoir plus →</a>
                        </div>
                    ))}
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
                                  <h3 className="text-2xl md:text-4xl font-extrabold text-nowrap">Vous avez un projet <br /> de construction ?</h3>
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
export default Services