import './BorderLine.scss';
import './BorderLine.tablet.scss';
import { useState } from 'react';
import StrippedLines from '@component/StrippedLines/StrippedLines.tsx';

function BorderLine() {
  const [crossLineLStart, setCrossLineLStart] = useState<boolean>(false);
  const [topLeftLineStart, setTopLeftLineStart] = useState<boolean>(false);
  const [crossLineRStart, setCrossLineRStart] = useState<boolean>(false);
  const [cornerBottomLStart, setCornerBottomLStart] = useState<boolean>(false);
  const [dottedLineStart, setDottedLineStart] = useState<boolean>(false);

  return (
    <>
      <div className="corner-top-left">
        <span className="corner-top-left-H" />
        <span
          className="corner-top-left-V"
          onAnimationEndCapture={() => {
            setCrossLineLStart(true);
          }}
        />
      </div>
      {crossLineLStart && (
        <StrippedLines
          className="cross-lines-left"
          numberOfLines={5}
          itemClassName="cross-line"
          onAnimationEndCapture={() => {
            setTopLeftLineStart(true);
          }}
        />
      )}
      {topLeftLineStart && (
        <span
          className="top-left"
          onAnimationEndCapture={() => {
            setCrossLineRStart(true);
          }}
        />
      )}
      {crossLineRStart && (
        <StrippedLines
          numberOfLines={9}
          className="cross-lines-right"
          itemClassName="cross-line"
          onAnimationEndCapture={() => {
            setCornerBottomLStart(true);
          }}
        >
          <>
            <span className="cross-line-red" />
            <span className="cross-line-long" />
          </>
        </StrippedLines>
      )}
      {cornerBottomLStart && (
        <div className="corner-bottom-left">
          {dottedLineStart && <span className="dotted-line" />}
          <svg className="svg">
            <path
              className="corner-bottom-left-path"
              onAnimationEndCapture={() => {
                setDottedLineStart(true);
              }}
            />
          </svg>
        </div>
      )}
    </>
  );
}

export default BorderLine;
