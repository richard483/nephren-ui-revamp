import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import Footer from './component/Footer/Footer.tsx';
import { FooterProvider } from './component/context/UiContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FooterProvider>
      <App />
      <Footer />
    </FooterProvider>
  </StrictMode>,
);
