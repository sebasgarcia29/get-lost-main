// components/Header.tsx
import React from 'react';
import Link from 'next/link'; // Importa el componente Link

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Logo</Link></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
      <h1>Text</h1>
    </header>
  );
};

export default Header;