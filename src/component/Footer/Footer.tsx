import styles from './Footer.module.scss';
import {
  HeaderFooterContextProps,
  useHeaderFooter,
} from '../../context/UiContext';
import { useState } from 'react';

function Footer() {
  const { isHeaderFooterVisible: isHeaderFooterVisible } =
    useHeaderFooter() as HeaderFooterContextProps;
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const getMailToLink = () => {
    const subject = encodeURIComponent('Suggestions for Nephren.xyz');
    const body = encodeURIComponent(message);
    return `mailto:richard.william483@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <>
      {isHeaderFooterVisible && (
        <footer className={styles.footer}>
          <div className={styles['footer-wrapper']}>
            <div className={styles['footer-content']}>
              <div className={styles['footer-content__left']}>
                <h2 className={styles['footer-content__left']}>Contact Me</h2>
                <p className={styles['footer-content__left__mail']}>
                  <textarea
                    placeholder="Write me a mail"
                    value={message}
                    onChange={handleChange}
                  />
                  <a href={getMailToLink()}>Mail me</a>
                </p>
              </div>
              <div className={styles['footer-content__right']}>
                <h2 className={styles['footer-content__right__title']}>
                  Follow Me on the other social media!
                </h2>
                <div className={styles['footer-content__right__social']}>
                  <a
                    href="https://github.com/richard483"
                    className={styles['footer-content__right__social__icon']}
                    target="_blank"
                    rel="noreferrer"
                  >
                    richard483
                    <img src="/img/github.svg" alt="github" />
                  </a>
                  <a
                    href="https://twitter.com/zeccareva"
                    className={styles['footer-content__right__social__icon']}
                    target="_blank"
                    rel="noreferrer"
                  >
                    zeccareva
                    <img src="/img/twitter.svg" alt="twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/richard__uwu/"
                    className={styles['footer-content__right__social__icon']}
                    target="_blank"
                    rel="noreferrer"
                  >
                    richard__uwu
                    <img src="/img/instagram.svg" alt="instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/richard--william/"
                    className={styles['footer-content__right__social__icon']}
                    target="_blank"
                    rel="noreferrer"
                  >
                    richard--william
                    <img
                      className="linkedin"
                      src="/img/linkedin.svg"
                      alt="instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles['footer-tech']}>
              <p className={styles['footer-tech__description']}>
                This website is built using React, TypeScript, and SCSS. The
                source code is available on{' '}
                <a href="https://github.com/richard483/nephren-ui-revamp">
                  GitHub
                </a>
                . This site and all of it&apos;s infrastructure is hosted on{' '}
                <a href="https://x.com/zeccareva/status/1863449989458128953">
                  this laptop
                </a>
                .
              </p>
            </div>
            <div>
              <p className={styles['footer-copy-right']}>2025 nephren.xyz</p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
