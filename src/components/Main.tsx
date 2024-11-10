// components/Main.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/globals.css'

const Main: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      
      <main>

      </main>
      
      <Footer />
    </div>
  );
};

export default Main;