import './Footer.scss';
import './Footer.tablet.scss';
import './Footer.tablet-portrait.scss';
import './Footer.phone.scss';
import { FooterContextProps, useFooter } from '../context/FooterContext';
import { useState } from 'react';

function Footer() {
  const { isFooterVisible } = useFooter() as FooterContextProps;
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const getMailToLink = () => {
    const subject = encodeURIComponent("Suggestions for Nephren.xyz");
    const body = encodeURIComponent(message);
    return `mailto:richard.william483@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <>
      {isFooterVisible && (
        <footer>
          <div className="footer-wrapper">
            <div className="footer-content">
              <div className="footer-content__left">
                <h2 className="footer-content__left__title">Contact Me</h2>
                <p className="footer-content__left__mail">
                  <textarea placeholder="Write me a mail" value={message} onChange={handleChange} />
                  <a href={getMailToLink()}>Mail me</a>
                </p>
              </div>
              <div className="footer-content__right">
                <h2 className="footer-content__right__title">Follow Me on the other social media!</h2>
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
            <div className="footer-tech">
              <p className="footer-tech__description">
                This website is built using React, TypeScript, and SCSS. The
                source code is available on{' '}
                <a
                  href="https://github.com/richard483/nephren-ui-revamp">
                  GitHub
                </a>.
                This site and all of it's infrastructure is hosted on{' '}
                <a href="https://x.com/zeccareva/status/1863449989458128953">this laptop</a>.
              </p>
            </div>
            <div>
              <p className="footer-copy-right">
                2025 Nephren.xyz
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
