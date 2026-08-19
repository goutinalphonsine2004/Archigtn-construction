import { useState } from "react"

function Devis() {
  const [formulaire, setFormulaire] = useState({
    nom: "",
    telephone: "",
    email: "",
    typeProjet: "",
    typePrestation: "",
    localisation: "",
    budget: "",
    description: "",
  });

  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [statutEnvoi, setStatutEnvoi] = useState(null);

  function gererChangement(e) {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value,
    });
  }

  async function gererEnvoi(e) {
    e.preventDefault();
    setEnvoiEnCours(true);
    setStatutEnvoi(null);

    try {
      const reponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e172697e-f308-402d-981c-c46a3b99f531",
          ...formulaire,
        }),
      });

      const resultat = await reponse.json();

      if (resultat.success) {
        setStatutEnvoi("succes");
        setFormulaire({
          nom: "", telephone: "", email: "", typeProjet: "",
          typePrestation: "", localisation: "", budget: "", description: "",
        });
      } else {
        setStatutEnvoi("erreur");
      }
    } catch (erreur) {
      setStatutEnvoi("erreur");
    } finally {
      setEnvoiEnCours(false);
    }
  }

  return (
    <>
      <section className="bg-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 text-orange-500 text-sm font-semibold mb-4">
            <span className="w-8 h-px bg-orange-500"></span>
            DEMANDER UN DEVIS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Parlez-nous de votre projet</h1>
          <p className="text-gray-300 max-w-xl">
            Remplissez ce formulaire, notre équipe reviendra vers vous rapidement avec une proposition adaptée.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

        <form onSubmit={gererEnvoi} className="lg:col-span-2 border rounded-xl p-8 space-y-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom complet *</label>
              <input
                type="text"
                name="nom"
                value={formulaire.nom}
                onChange={gererChangement}
                placeholder="Votre nom et prénom"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Numéro de téléphone *</label>
              <input
                type="text"
                name="telephone"
                value={formulaire.telephone}
                onChange={gererChangement}
                placeholder="+229 ..."
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Adresse e-mail *</label>
            <input
              type="email"
              name="email"
              value={formulaire.email}
              onChange={gererChangement}
              placeholder="vous@exemple.com"
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Type de projet *</label>
              <select
                name="typeProjet"
                value={formulaire.typeProjet}
                onChange={gererChangement}
                required
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Sélectionnez un type</option>
                <option value="Maison moderne">Maison moderne</option>
                <option value="Villa">Villa</option>
                <option value="Bâtiment résidentiel">Bâtiment résidentiel</option>
                <option value="Bâtiment professionnel">Bâtiment professionnel</option>
                <option value="Rénovation">Rénovation</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Type de prestation souhaitée *</label>
              <select
                name="typePrestation"
                value={formulaire.typePrestation}
                onChange={gererChangement}
                required
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Sélectionnez une prestation</option>
                <option value="Plans architecturaux">Plans architecturaux</option>
                <option value="Plans structuraux (BTP)">Plans structuraux (BTP)</option>
                <option value="Construction de bâtiment">Construction de bâtiment</option>
                <option value="Surveillance et contrôle des travaux">Surveillance et contrôle des travaux</option>
                <option value="Réfection / rénovation">Réfection / rénovation</option>
                <option value="Conseils en BTP">Conseils en BTP</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Localisation du projet *</label>
              <input
                type="text"
                name="localisation"
                value={formulaire.localisation}
                onChange={gererChangement}
                placeholder="Ville, quartier"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Budget estimatif (facultatif)</label>
              <input
                type="text"
                name="budget"
                value={formulaire.budget}
                onChange={gererChangement}
                placeholder="Ex : 15 000 000 FCFA"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description du projet *</label>
            <textarea
              name="description"
              value={formulaire.description}
              onChange={gererChangement}
              placeholder="Surface, nombre de pièces, type de toiture, délais souhaités..."
              required
              rows={5}
              className="w-full border rounded-lg px-4 py-2"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={envoiEnCours}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-medium py-3 rounded-lg"
          >
            {envoiEnCours ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>

          {statutEnvoi === "succes" && (
            <p className="text-green-600 text-sm text-center">✅ Votre demande a bien été envoyée !</p>
          )}
          {statutEnvoi === "erreur" && (
            <p className="text-red-600 text-sm text-center">❌ Une erreur est survenue, réessayez.</p>
          )}

        </form>

        {/* Colonne droite */}
        <div className="space-y-6">

          <div className="border rounded-xl p-6">
            <p className="font-bold mb-4">Besoin d'une réponse immédiate ?</p>
            <p className="text-gray-600 text-sm mb-4">
              Nous sommes à votre disposition 24h/24 et 7j/7 avec une équipe dynamique et efficace.
            </p>
            <div className="space-y-2">
              <a href="https://wa.me/22967034944" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border rounded-lg px-4 py-3 text-sm hover:border-orange-500">
                💬 WhatsApp +229 67 03 49 44
              </a>
              {["+229 65 67 26 15", "+229 67 03 49 44", "+229 44 61 10 48", "+229 91 42 04 92"].map((numero) => (
                <a key={numero} href="/contact"
                  className="flex items-center gap-2 border rounded-lg px-4 py-3 text-sm hover:border-orange-500">
                  📞 {numero}
                </a>
              ))}
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <p className="font-bold mb-4">Les étapes suivantes</p>
            <div className="space-y-4 text-sm">
              {[
                { num: "01", titre: "Consultation", texte: "Le client présente son projet et ses besoins." },
                { num: "02", titre: "Étude", texte: "Analyse du terrain, des besoins et des contraintes du projet." },
                { num: "03", titre: "Conception", texte: "Réalisation des plans architecturaux et structuraux." },
                { num: "04", titre: "Construction", texte: "Réalisation et suivi des travaux." },
                { num: "05", titre: "Livraison", texte: "Finalisation du projet et remise des clés." },
              ].map((etape) => (
                <div key={etape.num} className="flex gap-3">
                  <span className="text-orange-500 font-bold">{etape.num}</span>
                  <div>
                    <p className="font-semibold">{etape.titre}</p>
                    <p className="text-gray-500">{etape.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>
    </>
  )
}
export default Devis