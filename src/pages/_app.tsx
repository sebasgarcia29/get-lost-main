// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'; // Ajusta la ruta a src/styles/globals.css

function MyApp({ Component, pageProps }: AppProps) { // Usa AppProps en lugar de un tipo explícito
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;