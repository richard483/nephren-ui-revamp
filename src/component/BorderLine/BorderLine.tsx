import styles from './BorderLine.module.scss';
import { useState } from 'react';
import StrippedLines from '@component/StrippedLines/StrippedLines.tsx';
import { Outlet } from 'react-router-dom';

function BorderLine() {
  const [crossLineLStart, setCrossLineLStart] = useState<boolean>(false);
  const [topLeftLineStart, setTopLeftLineStart] = useState<boolean>(false);
  const [crossLineRStart, setCrossLineRStart] = useState<boolean>(false);
  const [cornerBottomLStart, setCornerBottomLStart] = useState<boolean>(false);
  const [dottedLineStart, setDottedLineStart] = useState<boolean>(false);

  return (
    <>
      <div className={styles['corner-top-left']}>
        <span className={styles['corner-top-left-H']} />
        <span
          className={styles['corner-top-left-V']}
          onAnimationEndCapture={() => {
            setCrossLineLStart(true);
          }}
        />
      </div>
      {crossLineLStart && (
        <StrippedLines
          className={styles['cross-lines-left']}
          numberOfLines={5}
          itemClassName="cross-line"
          onAnimationEndCapture={() => {
            setTopLeftLineStart(true);
          }}
        />
      )}
      {topLeftLineStart && (
        <span
          className={styles['top-left']}
          onAnimationEndCapture={() => {
            setCrossLineRStart(true);
          }}
        />
      )}
      {crossLineRStart && (
        <StrippedLines
          numberOfLines={9}
          className={styles['cross-lines-right']}
          itemClassName="cross-line"
          onAnimationEndCapture={() => {
            setCornerBottomLStart(true);
          }}
        >
          <>
            <span className={styles['cross-line-red']} />
            <span className={styles['cross-line-long']} />
          </>
        </StrippedLines>
      )}
      {cornerBottomLStart && (
        <div className={styles['corner-bottom-left']}>
          {dottedLineStart && <span className={styles['dotted-line']} />}
          <svg className={styles['svg']}>
            <path
              className={styles['corner-bottom-left-path']}
              onAnimationEndCapture={() => {
                setDottedLineStart(true);
              }}
            />
          </svg>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default BorderLine;
