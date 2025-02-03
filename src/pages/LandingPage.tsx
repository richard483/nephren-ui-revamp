import HeroSection from '@component/HeroSection/HeroSection.tsx';
import BorderLine from '@component/BorderLine/BorderLine.tsx';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

const configValue: string = import.meta.env.VITE_GOOGLE_TAG as string;

function LandingPage() {
  useEffect(() => {
    ReactGA.initialize(configValue);
    ReactGA.send('pageview');
  });
  return (
    <>
      <BorderLine />
      <HeroSection />
    </>
  );
}

export default LandingPage;
