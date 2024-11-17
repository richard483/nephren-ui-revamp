import '@/App.scss';
import TextGrid from './component/TextGrid/TextGrid.tsx';
import ItemList from './component/ItemList/ItemList.tsx';

function App() {
  return (
    <>
      <span id="box-grey" />
      <span id="box-blue" />
      <TextGrid />
      <div className="content-wrapper">
        <h1>RICHARD WILLIAM</h1>
        <div className="items">
          <ItemList text="BACK END" />
          <ItemList text="FRONT END" />
          <ItemList text="MOBILE PROGRAMMING" />
          <ItemList text="FULL STACK" />
        </div>
      </div>
    </>
  );
}

export default App;
