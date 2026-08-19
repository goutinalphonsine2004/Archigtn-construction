import { useState } from "react"

function Contact(){

const [formulaire, setFormulaire] = useState({
    nom: "",
    telephone: "",
    email: "",
    message: "",
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
          nom: formulaire.nom,
          telephone: formulaire.telephone,
          email: formulaire.email,
          message: formulaire.message,
        }),
      });

      const resultat = await reponse.json();

      if (resultat.success) {
        setStatutEnvoi("succes");
        setFormulaire({ nom: "", telephone: "", email: "", message: "" });
      } else {
        setStatutEnvoi("erreur");
      }
    } catch (erreur) {
      setStatutEnvoi("erreur");
    } finally {
      setEnvoiEnCours(false);
    }
  }


    return(
        <>
        <section className="bg-slate-800 text-white py-24 px-8">
          <div className="max-w-7xl m-auto">
                <div className="flex items-center gap-3 mb-4 text-orange-500 font-semibold uppercase">
                    <span className="w-8 h-px bg-orange-500"></span>
                    Contact
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Parlons de votre projet</h2>
                <p className="flex flex-wrap text-gray-400">Nous sommes à votre disposition 24h/24 et 7j/7 avec une équipe dynamique et efficace.</p>
          </div>
        </section>

        {/* ... HERO inchangé ... */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Colonne gauche : cartes de contact */}

          <div className="space-y-4">
                <div>
                    <div className="border rounded-xl p-6">
                        <p className="flex items-center gap-2 font-bold mb-4">💬 WhatsApp</p>
                        <p className="text-gray-600 text-sm mb-4">+229 01 67 03 49 44</p>
                        <p className="text-gray-600 text-sm mb-4">+229 01 65 67 26 15</p>
                        <a href="https://wa.me/22967034944"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block text-center bg-orange-500 text-white p-3 font-medium hover:bg-orange-600 rounded-lg"
                        >
                            Discuter sur WhatsApp
                        </a>
                    </div>
                </div>

                <div className="border rounded-xl p-6">
                        <p className="flex items-center text-lg font-bold mb-4">📞 Téléphone</p>
                        <div className="grid grid-cols-2 gap-3">
                            {["+229 65 67 26 15", "+229 67 03 49 44", "+229 44 61 10 48", "+229 91 42 04 92"].map((num) => (
                               <a
                                key={num}
                                href="/contact"
                                className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm text-gray-700 hover:border-orange-500"
                                >
                                   📞 {num}
                                </a>
                            ))}
                        </div>
                </div>

                <div className="border rounded-xl p-6">
                        <p className="flex items-center gap-2 text-lg font-bold mb-4">✉️ E-mail</p>
                        <p className="text-gray-600 text-sm mb-4">archigtnconstruction@yahoo.com</p>
                        <a 
                        href="mailto:archigtnconstruction@yahoo.com"
                        className="block text-center bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg"
                        >
                            Envoyer un e-mail
                        </a>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 p-6 rounded-lg text-gray-700 shadow-xl">
                    🕒 Nous sommes à votre disposition 24h/24 et 7j/7 avec une équipe dynamique et efficace.
                </div>

          </div>

        {/* colonne gauche: Formulaire*/}

        <div className="border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-2">Écrivez-nous</h2>
          <p className="text-gray-600 text-sm mb-6">
            Une question, une demande d'information ou un projet à présenter ? Laissez-nous un message.
          </p>

          <form onSubmit={gererEnvoi} className="space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom complet *</label>
                <input
                  type="text"
                  name="nom"
                  value={formulaire.nom}
                  onChange={gererChangement}
                  placeholder="Votre nom"
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Téléphone</label>
                <input
                  type="text"
                  name="telephone"
                  value={formulaire.telephone}
                  onChange={gererChangement}
                  placeholder="+229 ..."
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

            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                name="message"
                value={formulaire.message}
                onChange={gererChangement}
                placeholder="Comment pouvons-nous vous aider ?"
                required
                rows={5}
                className="w-full border rounded-lg px-4 py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={envoiEnCours}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium py-3 rounded-lg"
            >
              {envoiEnCours ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {statutEnvoi === "succes" && (
              <p className="text-green-600 text-sm text-center">✅ Message envoyé avec succès !</p>
            )}
            {statutEnvoi === "erreur" && (
              <p className="text-red-600 text-sm text-center">❌ Une erreur est survenue, réessayez.</p>
            )}

          </form>
        </div>

      </section>

        </>
    )
}
export default Contact