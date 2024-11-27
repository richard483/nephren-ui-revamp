import '@/App.scss';
import TextGrid from './component/TextGrid/TextGrid.tsx';
import ItemList from './component/ItemList/ItemList.tsx';

import x_pattern from '@assets/x_pattern.svg';

function App() {
  return (
    <>
      <span id="box-grey" />
      <span id="box-blue" />
      <img id="box-x" src={x_pattern} />
      <TextGrid />
      <div className="content-wrapper">
        <div className="title">
          <h1>RICHARD WILLIAM</h1>
          <div className="items">
            <ItemList text="BACK END" />
            <ItemList text="FRONT END" />
            <ItemList text="MOBILE PROGRAMMING" />
            <ItemList text="FULL STACK" />
          </div>
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

export default App;
