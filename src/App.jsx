import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Service from './pages/Service';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
return (
<div className="min-h-screen bg-gray-900 text-white relative">
<Navbar />
<main>
<Hero />
<About />
<Service />
<Skills />
<Projects/>
<Contact/>
</main>
</div>
);
}