import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Planning } from './components/Planning';
import { Designs } from './components/Designs';
import { PlanApproval } from './components/PlanApproval';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Planning />
        <Designs />
        <PlanApproval />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;