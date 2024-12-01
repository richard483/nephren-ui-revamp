import './BorderLine.scss';

function BorderLine() {
  return (
    <>
      <div className="cross-lines-left">
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
      </div>
      <div className="cross-lines-right">
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line"></div>
        <div className="cross-line-red"></div>
        <div className="cross-line-red"></div>
      </div>
    </>
  );
}

export default BorderLine;
