import { useState } from "react";

{/* cate de  Nos Réalisations*/}

const projets = [
  {
    categorie: "Maisons modernes",
    titre: "Maison contemporaine",
    sousTitre: "Maison à toiture-terrasse",
    description: "Exemple de maison moderne de plain-pied avec dalle accessible et grandes ouvertures.",
    image: "/images/6.jpeg",
  },
  {
    categorie: "Villas",
    titre: "Villa familiale",
    sousTitre: "Villa avec espaces extérieurs",
    description: "Exemple de villa spacieuse organisée autour d'un espace de vie extérieur aménagé.",
    image: "/images/8.jpeg"
  },
  {
    categorie: "Bâtiments résidentiels",
    titre: "Immeuble résidentiel",
    sousTitre: "Bâtiment R+3",
    description: "Exemple de bâtiment résidentiel à plusieurs niveaux avec balcons et terrasses.",
    image: "/images/9.jpeg"
  },
  {
    categorie: "Bâtiments professionnels",
    titre: "Bâtiment professionnel",
    sousTitre: "Bureaux et espaces commerciaux",
    description: "Exemple de bâtiment professionnel aux volumes sobres et à la façade lumineuse.",
    image: "/images/10.jpeg"
  },
  {
    categorie: "Plans architecturaux",
    titre: "Plan architectural",
    sousTitre: "Plan de distribution",
    description: "Exemple de plan d'aménagement intérieur étudié selon les besoins du client.",
    image: "/images/11.jpeg",
  },
  {
    categorie: "Plans structuraux",
    titre: "Plan structural",
    sousTitre: "Structure béton armé",
    description: "Exemple d'étude structurale : poteaux, poutres et dalles d'un bâtiment.",
    image: "/images/12.jpeg",
  },
];



function Realisation(){

        const [filtreActive, setFiltreActive] = useState("Tous")

        const projectfiltre = projets.filter((projet) => filtreActive === "Tous"  ||  projet.categorie ===filtreActive)

    return(
        <>
        <section className="bg-slate-800 text-white py-24 px-8">
           <div className="max-w-7xl m-auto">
                <div className="flex items-center gap-3 mb-4 text-orange-500 font-semibold uppercase">
                    <span className="w-8 h-px bg-orange-500"></span>
                    Portfolio
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Nos réalisations</h2>
                <p className="flex flex-wrap text-gray-400">Filtrez par catégorie pour découvrir les types de projets que nous concevons et construisons.</p>
          </div>
       </section>

       <section className="max-w-7xl m-auto py-24 px-6">
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

        <section className="bg-slate-800 text-white py-24 px-8">
                      <div className="max-w-7xl m-auto">
                          <div className="grid grid-cols-1 md:grid-cols-2 space-x-40 space-y-20">
                              <div className="space-y-3">
                                  <h3 className="text-3xl md:text-4xl font-extrabold">Vous avez un projet <br /> de construction ?</h3>
                                  <p className="text-gray-400">Parlons de votre projet et construisons ensemble une solution adaptée à vos besoins.</p>
                              </div>

                              <div className="flex items-center gap-3">
                                  <button className="bg-orange-500 text-white px-4 py-2 rounded-xl">Demander un devis</button>
                                  <button className="outline outline-gray-400 text-white px-4 py-2 rounded-xl">Demander un devis</button>
                              </div>
                          </div>
                      </div>

          </section>
      

        </>
    )
}
export default Realisation