import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import Footer from './component/Footer/Footer.tsx';
import { HeaderFooterProvider } from './context/UiContext.tsx';
import Header from './component/Header/Header.tsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <HeaderFooterProvider>
        <Header />
        <App />
        <Footer />
      </HeaderFooterProvider>
    </HelmetProvider>
  </StrictMode>,
);
