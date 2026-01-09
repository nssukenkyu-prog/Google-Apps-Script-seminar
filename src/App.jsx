import { useState } from 'react'
import './App.css'

import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Overview from './components/Overview';
import Flow from './components/Flow';
import Checklist from './components/Checklist';
import Scope from './components/Scope';
import Program from './components/Program';
import Lecturers from './components/Lecturers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <main>
        <Introduction />
        <Overview />
        <Flow />
        <Checklist />
        <Scope />
        <Program />
        <Lecturers />
      </main>
      <Footer />
    </div>
  )
}

export default App
