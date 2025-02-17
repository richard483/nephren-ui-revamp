import './BorderLineRight.scss';
import './BorderLineRight.tablet.scss';
import './BorderLineRight.phone.scss';
import StrippedLines from '@component/StrippedLines/StrippedLines.tsx';
import { Outlet } from 'react-router-dom';

function BorderLineRight() {
  return (
    <>
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
      <Outlet />
    </>
  );
}

export default BorderLineRight;
