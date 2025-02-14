import {
  FooterContextProps,
  useFooter,
} from '@/component/context/FooterContext';
import HeroSection from '@component/HeroSection/HeroSection.tsx';

function LandingPage() {
  const { hideFooter } = useFooter() as FooterContextProps;
  hideFooter();
  return (
    <>
      <HeroSection />
    </>
  );
}

export default LandingPage;
