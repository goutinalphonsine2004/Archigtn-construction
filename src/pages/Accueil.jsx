import { useState } from "react";


   {/* carte de Service*/}

  const services = [
  {
    categorie: "Plans architecturaux",
    titre: "Plans architecturaux modernes et personnalisés",
    description: "Conception de plans adaptés au terrain, aux besoins du client et au style de bâtiment souhaité.",
    icone: "🖊",
  },
  {
    categorie: "Plans structuraux",
    titre: "Plans structuraux en BTP",
    description: "Conception des plans nécessaires à la structure et à la solidité des bâtiments.",
    icone: "✏️",
  },
  {
    categorie: "Construction",
    titre: "Construction de bâtiments",
    description: "Accompagnement et réalisation de projets de construction, de l'implantation jusqu'à la remise des clés.",
    icone: "🏢",
  },
  {
    categorie: "Surveillance & contrôle",
    titre: "Surveillance et contrôle des travaux",
    description: "Suivi des travaux afin de veiller au bon déroulement du chantier et au respect des exigences du projet.",
    icone: "📋",
  },
  {
    categorie: "Réfection",
    titre: "Réfection et rénovation",
    description: "Intervention pour les travaux de réfection, rénovation et amélioration des bâtiments existants.",
    icone: "🔧",
  },
  {
    categorie: "Conseil",
    titre: "Conseils en BTP",
    description: "Accompagnement et conseils pour aider les clients à prendre de bonnes décisions concernant leurs projets de construction.",
    icone: "💡",
  },
];


 {/* cate de  Nos Réalisations*/}

const projets = [
  {
    categorie: "Maisons modernes",
    titre: "Maison contemporaine",
    sousTitre: "Maison à toiture-terrasse",
    description: "Exemple de maison moderne de plain-pied avec dalle accessible et grandes ouvertures.",
    image: "/images/2.jpeg",
  },
  {
    categorie: "Villas",
    titre: "Villa familiale",
    sousTitre: "Villa avec espaces extérieurs",
    description: "Exemple de villa spacieuse organisée autour d'un espace de vie extérieur aménagé.",
    image: "/images/3.jpeg"
  },
  {
    categorie: "Bâtiments résidentiels",
    titre: "Immeuble résidentiel",
    sousTitre: "Bâtiment R+3",
    description: "Exemple de bâtiment résidentiel à plusieurs niveaux avec balcons et terrasses.",
    image: "/images/4.jpeg"
  },
  {
    categorie: "Bâtiments professionnels",
    titre: "Bâtiment professionnel",
    sousTitre: "Bureaux et espaces commerciaux",
    description: "Exemple de bâtiment professionnel aux volumes sobres et à la façade lumineuse.",
    image: "/images/5.jpeg"
  },
  {
    categorie: "Plans architecturaux",
    titre: "Plan architectural",
    sousTitre: "Plan de distribution",
    description: "Exemple de plan d'aménagement intérieur étudié selon les besoins du client.",
    image: "/images/6.jpeg",
  },
  {
    categorie: "Plans structuraux",
    titre: "Plan structural",
    sousTitre: "Structure béton armé",
    description: "Exemple d'étude structurale : poteaux, poutres et dalles d'un bâtiment.",
    image: "/images/7.jpeg",
  },
];

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

{/* cate de  Méthode*/}

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

function Accueil() {

 {/* usestate de Nos réalisation*/}

const [filtreActive, setFiltreActive] = useState("Tous")

const projectfiltre = projets.filter((projet) => filtreActive ==="Tous" || projet.categorie === filtreActive)



  return (
    <>
      {/* HERO */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-wrap items-center gap-3 text-orange-500 text-sm font-semibold mb-6">
            <span className="w-8 h-px bg-orange-500"></span>
            ARCHITECTURE · CONCEPTION · CONSTRUCTION — BÉNIN
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-3xl">
            Concevez. Construisez.
            <br />
            <span className="text-orange-500">Réalisez vos rêves.</span>
          </h1>

          <p className="text-gray-300 max-w-xl mb-8">
            Archigtnconstruction vous accompagne dans la conception, la construction et
            le suivi de vos projets immobiliers, de l'implantation jusqu'à la remise des clés.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2">
              <a href="/devis">Demander un devis→</a>
            </button>
            <button className="border border-white/30 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2">
                <a 
                    href="https://wa.me/22967034944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500"
                >
                    💬 Nous contacter sur WhatsApp
                </a> 
            </button>
          </div>
        </div>

        {/* Bandeau des 4 points forts */}
        <div className="relative bg-slate-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-orange-500">🖊</span> Conception architecturale
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-500">🏢</span> Plans structuraux
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-500">📋</span> Suivi de chantier
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-500">🔧</span> Construction & rénovation
            </div>
          </div>
        </div>
      </section>

        <section className="max-w-7xl m-auto py-24 px-10 grid grid-cols-1 lg:grid-cols-2 gap-11 items-center">

            {/* À PROPOS */}

            <div>
                <div className="flex items-center gap-3 text-orange-500 text-sm font-semibold mb-4">
                    <span className="w-8 h-px bg-orange-500"></span>
                     À PROPOS
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Votre partenaire pour des constructions pensées pour durer</h2>

                <p className="text-gray-600 mb-8">
                      Archigtnconstruction accompagne ses clients dans leurs projets de
                      construction, depuis la conception des plans jusqu'à la réalisation des travaux.
                      Notre objectif est de proposer des solutions modernes, adaptées aux besoins de
                      chaque client et aux exigences de son projet.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                      {["Expertise", "Qualité", "Accompagnement", "Professionnalisme", "Respect des besoins du client"].map((point)=>(
                        <div key={point} className="flex items-center gap-2 text-sm">
                          <span className="w-6 h-px bg-orange-500"></span>
                          {point}
                        </div>
                      ))}
                </div>

                <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium"> <a href="/a-propos">En savoir plus sur nous</a></button>

            </div>

            <div className="relative">
                  <img src="/images/1.jpeg" alt="Chantier de construction" 
                  className="rounded-2xl w-full h-[450px] object-cover"
                  />

                  <div className="absolute  left-6 right-6 bg-orange-500 text-white p-5 w-80 rounded-lg italic text-sm">
                      « Pour la réalisation de vos concepts modernes et l'accomplissement de vos rêves en construction »
                  </div>
            </div>
        </section>

        {/* SERVICES */}

        <section className="bg-slate-100 py-24">
            <div className="max-w-7xl m-auto px-6">
                  <div className="flex items-center text-orange-500 gap-3 mb-3 font-semibold uppercase">
                      <span className="w-8 h-px bg-orange-500"></span>
                      Nos services
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Nos services</h2>

                  <p className="text-gray-600 max-w-2xl mb-12">
                     De l'étude du terrain à la remise des clés, nous couvrons 
                     l'ensemble des besoins de votre projet de construction.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.map((service) => (
                        <div 
                        key={service.titre}
                        className="group bg-white rounded-xl p-8 border border-transparent hover:border-orange-500 transition-colors hover:shadow-2xl"
                        >

                        <div  className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-5 bg-slate-900 text-white group-hover:bg-orange-500 transition-colors">
                              {service.icone}
                        </div>

                        <p className="text-orange-500 text-xs font-semibold mb-2 uppercase">{service.categorie}</p>

                          <h3 className="font-bold text-lg mb-3">{service.titre}</h3>

                          <p className="text-gray-600 text-sm mb-4 ">{service.description}</p>

                          <a href="/service" className="text-slate-900 font-medium text-sm inline-flex items-center gap-1">  En savoir plus →</a>

                        </div>
                      ))}
                  </div>
            </div>
        </section>

         {/* Nos Réalisations*/}

         <section className="max-w-7xl m-auto py-24 px-6">
                  
                      <div className="flex items-center text-orange-500 gap-3 mb-4 font-semibold uppercase">
                          <span className="w-8 h-px bg-orange-500"></span>
                          Portfolio
                      </div>

                      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Nos réalisations</h1>

                      <p className=" flex flex-wrap text-gray-600 mb-7">Un aperçu des types de projets que nous concevons et réalisons : maisons modernes, villas, bâtiments résidentiels et professionnels.</p>

                      <div className="flex flex-wrap gap-4 mb-10">
                          {["Tous", "Maisons modernes", "Villas", "Bâtiments résidentiels", "Bâtiments proffectionnels", "Plans architecturaux", "Plans structuraux"].map((cat)=>(
                            <button
                            key={cat}
                            onClick={() => setFiltreActive(cat)}
                            className={`py-2 px-4 font-medium text-sm rounded-lg border ${filtreActive == cat ? `bg-slate-900 text-white border-slate-900` 
                              : `bg-white text-gray-700 border-gray-200`}`}
                            >
                              {cat}
                            </button>
                          ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                          {projectfiltre.map((projet) => (
                            <div key={projet.titre} className="rounded-xl overflow-hidden border border-gray-200 shadow-2xl">
                                <div className="relative">
                                      <img src={projet.image} alt={projet.titre} className="w-full h-[450px] object-cover"/>
                                      <span className="absolute top-3 left-3 bg-slate-900 text-white px-4 py-2 text-xs rounded">{projet.categorie}</span>
                                </div>

                                <div className="p-5">
                                    <h3 className="font-bold text-lg mb-1">{projet.titre}</h3>
                                    <p className="text-orange-500 text-sm mb-2 uppercase">{projet.sousTitre}</p>
                                    <p className="text-gray-700 text-xs">{projet.description}</p>
                                </div>
                            </div>

                          
                          ))}
                      </div>
         </section>

         {/* Pourquoi nous*/}

         <section className="bg-slate-100 py-24">
              <div className="max-w-7xl m-auto px-6">
                      <div className="flex items-center gap-3 text-orange-500 font-semibold uppercase mb-4">
                            <span className="w-8 h-px bg-orange-500"></span>
                            Nos atouts
                      </div>

                      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Pourquoi nous ?</h1>

                      <p className="flex flex-wrap text-gray-600 mb-10">Un aperçu des types de projets que nous concevons et réalisons : maisons modernes, villas, bâtiments résidentiels et professionnels.</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                          {atouts.map((atout) => (
                            <div key={atout.titre} className="rounded-xl bg-white p-10 border border-transparent hover:border-orange-500 transition-colors hover:shadow-2xl hover:rounded-2xl">
                                <div className="text-orange-500 text-2xl mb-4">{atout.icone}</div>
                                <h3 className="text-lg font-bold">{atout.titre}</h3>
                                <p className="text-gray-700 text-sm">{atout.description}</p>
                            </div>
                          ))}
                      </div>
              </div>
         </section>

          {/* Methode*/}

          <section className="max-w-7xl m-auto py-24 px-6">
                      <div className="flex items-center gap-3 mb-4 text-orange-500 font-semibold uppercase">
                          <span className="w-8 h-px bg-orange-500"></span>
                          Methode
                      </div>

                      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Comment se déroule votre projet ?</h1>

                      <p className="text-gray-600 flex flex-wrap mb-10">Un déroulement clair, en cinq étapes, pour avancer sereinement de la première rencontre à la remise des clés.</p>

                      <div className="grid grid-cols-1 md:grid-cols-5 space-x-20 space-y-5">
                          {methode.map((met) => (
                            <div key={met.titre} className="space-y-3 border-t hover:border-t-orange-500">
                                <div className="text-3xl text-orange-500 font-semibold">{met.num}</div>
                                <h2 className="font-semibold text-lg">{met.titre}</h2>
                                <p className="text-gray-600 ">{met.description}</p>
                            </div>
                          ))}
                      </div>
          </section>

          <section className="bg-slate-800 text-white py-24 px-8">
                      <div className="max-w-7xl m-auto">
                          <div className="grid grid-cols-1 md:grid-cols-2 space-x-40 space-y-20">
                              <div className="space-y-3">
                                  <h3 className="text-3xl md:text-4xl font-extrabold">Vous avez un projet <br /> de construction ?</h3>
                                  <p className="text-gray-400">Parlons de votre projet et construisons ensemble une solution adaptée à vos besoins.</p>
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
export default Accueil