import { useState } from "react"
import { Link } from "react-router-dom"



function Header(){

    const [menuOuvert, setMenuOuvert] = useState(false)

    return(
       <header className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl m-auto flex items-center justify-between px-6 py-7">

                <div className="flex items-center gap-3">
                    <div className="bg-slate-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                            AC
                    </div>
                    <div>
                        <p className="font-bold text-lg">
                             Archigtn <span className="text-orange-500"> construction</span>
                        </p>
                        <p className="text-gray-700 text-xs">Architecture · Conception · Construction</p>
                    </div>
                </div>

                {/* Menu normal, caché sur mobile/tablette */}

                <nav className="hidden md:hidden lg:flex gap-8 font-medium ">
                    <Link to="/" className="text-gray-700 hover:text-orange-500">Accueil</Link>
                    <Link to="/a-propos" className="text-gray-700 hover:text-orange-500">À propos</Link>
                    <Link to="/service" className="text-gray-700 hover:text-orange-500">Service</Link>
                    <Link to="/realisation" className="text-gray-700 hover:text-orange-500">Réalisation</Link>
                    <Link to="/pourquoi-nous" className="text-gray-700 hover:text-orange-500">Pourquoi nous ?</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>     
                </nav>

                 {/* Bouton Découvrir un devis, caché sur mobile/tablette */}

                <button className="hidden lg:block bg-orange-500 text-white font-medium px-4 py-2 hover:bg-orange-600"><a href="/devis">Demander un devis</a></button>

                {/* Bouton hamburger, visible seulement en dessous de lg */}

                <button onClick={() => setMenuOuvert(!menuOuvert)}
                    className="lg:hidden text-2xl font-bold"
                    >
                    ☰
                </button>

                {/* Menu déroulant mobile */}

                {menuOuvert && (
                    <nav className="lg:hidden flex flex-col gap-4 px-5 pb-5">
                        <Link to="/" onClick={() => setMenuOuvert(false)}  className="text-gray-700 hover:text-orange-500">Accueil</Link>
                        <Link to="/a-propos" onClick={() => setMenuOuvert(false)}  className="text-gray-700 hover:text-orange-500">À propos</Link>
                        <Link to="/service" onClick={() => setMenuOuvert(false)}  className="text-gray-700 hover:text-orange-500">Service</Link>
                        <Link to="/realisation" onClick={() => setMenuOuvert(false)}  className="text-gray-700 hover:text-orange-500">Réalisation</Link>
                        <Link to="/pourquoi-nous" onClick={() => setMenuOuvert(false)}  className="text-gray-700 hover:text-orange-500">Pourquoi nous ?</Link>
                        <Link to="/contact" onClick={() => setMenuOuvert(false)}  className="text-gray-700 hover:text-orange-500">Contact</Link> 
                    </nav>
                )}

            </div>

        </header>
    )
}
export default Header