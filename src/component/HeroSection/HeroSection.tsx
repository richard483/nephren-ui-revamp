import './HeroSection.scss';
import TextGrid from '@component/TextGrid/TextGrid.tsx';
import ItemList from '@component/ItemList/ItemList.tsx';

import x_pattern from '@assets/x_pattern.svg';

function HeroSection() {
  return (
    <>
      <div className="content-wrapper">
        <span id="box-grey" />
        <span id="box-blue" />
        <img id="box-x" src={x_pattern} />
        <TextGrid />
        <h1 className="title">RICHARD WILLIAM</h1>
        <div className="items">
          <ItemList text="GITHUB" pointColor="dark-grey" />
          <ItemList text="LINKEDIN" pointColor="sky" />
          <ItemList text="INSTAGRAM" pointColor="red" />
          <ItemList text="TWITTER" pointColor="sky" />
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
