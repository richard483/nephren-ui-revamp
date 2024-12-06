import './BorderLine.scss';

function BorderLine() {
  return (
    <>
      <div className="corner-top-left">
        <span className="corner-top-left-H" />
        <span className="corner-top-left-V" />
      </div>
      <span className="top-left" />
      <div className="cross-lines-left">
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
      </div>
      <div className="cross-lines-right">
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line" />
        <span className="cross-line-red" />
        <span className="cross-line-long" />
      </div>
      <div className="corner-bottom-left">
        <span className="dotted-line" />
        <svg className="svg">
          <path className="path" />
        </svg>
      </div>
    </>
  );
}

export default BorderLine;
