import './HeroSection.scss';
import './HeroSection.tablet.scss';
import './HeroSection.tablet-portrait.scss';
import './HeroSection.phone.scss';
import TextGrid from '@component/TextGrid/TextGrid.tsx';
import ItemList from '@component/ItemList/ItemList.tsx';

import x_pattern from '@assets/x_pattern.svg';

function HeroSection() {
  return (
    <>
      <div className="hero-wrapper">
        <span id="box-grey" />
        <span id="box-blue" />
        <img id="box-x" src={x_pattern} />
        <TextGrid />
        <h1 className="title">RICHARD WILLIAM</h1>
        <div className="items">
          <ItemList
            text="GITHUB"
            pointColor="dark-grey"
            redirectUrl="https://github.com/richard483"
          />
          <ItemList
            text="LINKEDIN"
            pointColor="sky"
            redirectUrl="https://www.linkedin.com/in/richard--william"
          />
          <ItemList
            text="INSTAGRAM"
            pointColor="red"
            redirectUrl="https://www.instagram.com/richard__uwu/"
          />
          <ItemList
            text="TWITTER"
            pointColor="sky"
            redirectUrl="https://x.com/zeccareva"
          />
          <ItemList
            text="MY BLOGS"
            pointColor="dark-grey"
            redirectUrl="https://nephren.xyz/blogs"
          />
        </div>
        <div className="sub-content">
          <span className="sub-content-desc">Yes, I code</span>
          <div className="sub-content-nephren">
            <span className="sub-content-nephren-bar-code">nephren</span>
            <span className="sub-content-nephren-desc">nephren</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
