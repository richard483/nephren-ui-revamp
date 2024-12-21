import './BorderLine.scss';
import { useEffect, useState } from 'react';
import StrippedLines from '@component/StrippedLines/StrippedLines.tsx';

function BorderLine() {
  const leftLine: number = 5;
  const rightLine: number = 9;

  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [dottedLineStart, setDottedLineStart] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    setTimeout(() => {
      setDottedLineStart(true);
    }, 1000);
    if (visibleLines < Math.max(rightLine, leftLine)) {
      timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 100);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [visibleLines, rightLine]);

  return (
    <>
      <div className="corner-top-left">
        <span className="corner-top-left-H" />
        <span className="corner-top-left-V" />
      </div>
      <span className="top-left" />
      <StrippedLines
        className="cross-lines-left"
        numberOfLines={5}
        itemClassName="cross-line"
      />
      <StrippedLines
        numberOfLines={9}
        className="cross-lines-right"
        itemClassName="cross-line"
      >
        <>
          <span className="cross-line-red" />
          <span className="cross-line-long" />
        </>
      </StrippedLines>
      <div className="corner-bottom-left">
        {dottedLineStart && <span className="dotted-line" />}
        <svg className="svg">
          <path className="path" />
        </svg>
      </div>
    </>
  );
}

export default BorderLine;
