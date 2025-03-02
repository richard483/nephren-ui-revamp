import styles from './Header.module.scss';
import {
  HeaderFooterContextProps,
  useHeaderFooter,
} from '../../context/UiContext';

function Header() {
  const { isHeaderVisible: isHeaderVisible } =
    useHeaderFooter() as HeaderFooterContextProps;
  return (
    <>
      {isHeaderVisible && (
        <header className={styles.header}>
          <button
            onClick={() => {
              window.history.back();
            }}
            className={styles.header__back}
          >
            <img src="/img/back.svg" alt="back" />
          </button>
          <div className={styles.header__content}>
            <a
              href="/blogs"
              className={`${styles.header__link} ${styles['sky-text']}`}
            >
              blogs
              <span
                className={`${styles.header__link__underline} ${styles.sky}`}
              />
            </a>
            <a
              href="/"
              className={`${styles.header__link} ${styles['red-text']}`}
            >
              landing
              <span
                className={`${styles.header__link__underline} ${styles.red}`}
              />
            </a>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
