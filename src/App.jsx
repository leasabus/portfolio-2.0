import React from 'react'
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { MyProyects } from './components/MyProyects';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';

export const App = () => {
  return (
    <>
      <div className=' flex flex-col items-center justify-center max-w-[1240px]  mx-auto'>
        <NavBar />

        <Home />

        <MyProyects />

        <Skills />

        <Contact />

      </div>
    </>
  )
}

export default App;