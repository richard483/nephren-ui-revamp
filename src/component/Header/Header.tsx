import './Header.scss';
import './Header.tablet.scss';
import './Header.tablet-portrait.scss';
import './Header.phone.scss';
import { HeaderFooterContextProps, useHeaderFooter } from '../context/UiContext';

function Header() {
  const { isHeaderFooterVisible: isFooterVisible } = useHeaderFooter() as HeaderFooterContextProps;
  return (
    <>
      {isFooterVisible && (
        <header>
          <button onClick={() => { window.history.back(); }} className="header__back">
            <img src="/img/back.svg" alt="back" />
          </button>
          <div className="header__content">
            <a href="/blogs" className="header__link sky-text">
              blogs
              <span className="header__link__underline sky" />
            </a>
            <a href="/" className="header__link red-text">
              landing
              <span className="header__link__underline red" />
            </a>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
