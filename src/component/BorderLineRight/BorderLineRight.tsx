import styles from './BorderLineRight.module.scss';
import StrippedLines from '@component/StrippedLines/StrippedLines.tsx';
import { Outlet } from 'react-router-dom';

function BorderLineRight() {
  return (
    <>
      <StrippedLines
        numberOfLines={9}
        className={styles['cross-lines-right']}
        itemClassName="cross-line"
      >
        <>
          <span className={styles['cross-line-red']} />
          <span className={styles['cross-line-long']} />
        </>
      </StrippedLines>
      <Outlet />
    </>
  );
}

export default BorderLineRight;
