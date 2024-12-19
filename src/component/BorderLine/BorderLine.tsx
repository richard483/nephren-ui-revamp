import './BorderLine.scss';
import { useEffect, useState } from 'react';

function BorderLine() {
  const leftLine: number = 5;
  const rightLine: number = 9;

  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [longAnimationStart, setLongAnimationStart] = useState<boolean>(false);
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
      <div className="cross-lines-left">
        {Array.from({ length: leftLine }, (_, i) => (
          <span
            key={i}
            className="cross-line"
            style={{
              opacity: i < visibleLines ? 1 : 0,
              transition: 'opacity 0.1s ease-in-out',
            }}
          />
        ))}
      </div>
      <div className="cross-lines-right">
        {Array.from({ length: rightLine }, (_, i) => {
          if (i === rightLine - 1 && !longAnimationStart) {
            setTimeout(() => {
              setLongAnimationStart(true);
            }, 1000);
          }
          return (
            <span
              key={i}
              className="cross-line"
              style={{
                opacity: i < visibleLines ? 1 : 0,
                transition: 'opacity 0.1s ease-in-out',
              }}
            />
          );
        })}
        {longAnimationStart && (
          <>
            <span className="cross-line-red" />
            <span className="cross-line-long" />
          </>
        )}
      </div>
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
