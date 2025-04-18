import styles from './LandingPage.module.scss';
import PortofolioSection from '@/component/PortofolioSection/PortofolioSection';
import { HeaderFooterContextProps, useHeaderFooter } from '@/context/UiContext';
import HeroSection from '@component/HeroSection/HeroSection.tsx';

function LandingPage() {
  const { hideHeader: hideHeader } =
    useHeaderFooter() as HeaderFooterContextProps;
  hideHeader();

  return (
    <div className={styles['landing-page']}>
      <div className={styles['snap-container']}>
        <section className={styles['snap-section']}>
          <HeroSection />
        </section>
        <section
          className={`${styles['snap-section']} ${styles['hide-on-mobile']}`}
        >
          <PortofolioSection />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
