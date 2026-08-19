import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Accueil from './pages/Accueil'
import { Routes, Route } from 'react-router-dom'
import Propos from './pages/Propos'
import Services from './pages/Services'
import Realisation from './pages/Realisation'
import PourquoiNous from './pages/PourquoiNous'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Devis from './pages/Devis'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    <Header />
     <div className="overflow-x-hidden">  
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<Propos />} />
            <Route path="/service" element={<Services />} />
            <Route path="/realisation" element={<Realisation />} />
            <Route path="/pourquoi-nous" element={<PourquoiNous />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Devis />} />
          </Routes>
     </div>
     <Footer />
    </>
  )
}

export default App
