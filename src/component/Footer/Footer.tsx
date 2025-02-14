import './Footer.scss';
import './Footer.tablet.scss';
import './Footer.tablet-portrait.scss';
import './Footer.phone.scss';
import { FooterContextProps, useFooter } from '../context/FooterContext';

function Footer() {
  const { isFooterVisible } = useFooter() as FooterContextProps;
  return (
    <>
      {isFooterVisible && (
        <footer className="footer-wrapper">
          <div className="footer-content">
            <div className="footer-content__left">
              <h2 className="footer-content__left__title">Contact Us</h2>
              <p className="footer-content__left__description">
                12345 Little Lonsdale St, Melbourne, Victoria 3000, Australia
              </p>
              <p className="footer-content__left__description">
                <a href="mailto:richard.william483@gmail.com">mail me</a>
              </p>
            </div>
            <div className="footer-content__right">
              <h2 className="footer-content__right__title">Follow Us</h2>
              <div className="footer-content__right__social">
                <a
                  href="https://www.facebook.com"
                  className="footer-content__right__social__icon"
                >
                  <img src="/images/facebook.png" alt="facebook" />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="footer-content__right__social__icon"
                >
                  <img src="/images/twitter.png" alt="twitter" />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="footer-content__right__social__icon"
                >
                  <img src="/images/instagram.png" alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
