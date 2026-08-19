import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl m-auto py-16 px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     {/* Colonne 1 : Logo + description */}

                     <div>
                        <h3 className="text-lg font-bold mb-4">
                            Archigtn<span className="text-orange-500">construction</span>
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm">Spécialiste de la conception et de la construction de vos projets.</p>
                        <p className="flex items-center gap-3 italic text-sm text-gray-400">
                            <span className="w-2 h-10 bg-orange-500"></span>
                            « Pour la réalisation de vos concepts modernes et l'accomplissement de vos rêves en construction »
                        </p>
                     </div>


                         {/* Colonne 2 : Navigation */}

                     <div>
                        <h2 className="font-bold text-lg">Navigation</h2>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <Link to="/" className="hover:text-orange-500">Accueil</Link>
                            <Link to="/a-propos" className=" hover:text-orange-500">À propos</Link>
                            <Link to="/service" className=" hover:text-orange-500">Service</Link>
                            <Link to="/realisation" className=" hover:text-orange-500">Réalisation</Link>
                            <Link to="/pourquoi-nous" className=" hover:text-orange-500">Pourquoi nous ?</Link>
                            <Link to="/contact" className=" hover:text-orange-500">Contact</Link>     
                        </div>
                     </div>

                        {/* Colonne 3 : Contacts */}

                    <div>
                        <p className="font-semibold mb-4">CONTACTS</p>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <a 
                             href="https://wa.me/22967034944"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="hover:text-orange-500"
                            >
                                 💬 WhatsApp : +229 67 03 49 44
                            </a>

                            <Link to="/contact" className="hover:text-orange-500">
                                 📞 +229 65 67 26 15
                             </Link>

                            <Link to="/contact" className="hover:text-orange-500">
                                     📞 +229 67 03 49 44
                            </Link>

                             <a href="mailto:archigtnconstruction@yahoo.com" className="hover:text-orange-500">
                                    ✉️ archigtnconstruction@yahoo.com
                            </a>

                            <p className="text-gray-500 text-xs mt-2">
                                 Nous sommes à votre disposition 24h/24 et 7j/7 avec une équipe dynamique et efficace.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

             <div className="border-t border-white/10 text-center py-6 text-xs text-gray-500">
                 © 2026 Archigtnconstruction. Tous droits réservés.
             </div>
        </footer>
    )
}
export default Footer