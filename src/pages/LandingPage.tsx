import { HeaderFooterContextProps, useHeaderFooter } from '@/context/UiContext';
import HeroSection from '@component/HeroSection/HeroSection.tsx';

function LandingPage() {
  const { hideHeaderFooter: hideHeaderFooter } =
    useHeaderFooter() as HeaderFooterContextProps;
  hideHeaderFooter();
  return (
    <>
      <HeroSection />
    </>
  );
}

export default LandingPage;
