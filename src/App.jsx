import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Logo from './Component/Logo'
import Team from './Component/Team'
import Work from './Component/Work'
import Pricing  from './Component/Price'
import Contact from './Component/Contact'
const App = () => {
  return (
    <>
    
  <Navbar/>
  
  <div>
  <Routes>
      <Route path="/logo" element={<Logo />} />
      <Route path="/team" element={<Team />}/>
      <Route path="/work"  element={<Work />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
    </>
  )
}

export default App