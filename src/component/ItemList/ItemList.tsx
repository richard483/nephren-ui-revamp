import './ItemList.scss';
import './ItemList.tablet-portrait.scss';
import './ItemList.phone.scss';

function ItemList({
  text,
  className,
  pointColor,
  redirectUrl,
}: {
  text: string;
  className?: string;
  pointColor?: string;
  redirectUrl?: string;
}) {
  return (
    <>
      <a href={redirectUrl || '/'} target="_blank" rel="noreferrer">
        <div className={`item ${className}`}>
          <span className={`point ${pointColor}`} />
          <span className={`point-text ${pointColor}-txt`}>{text}</span>
        </div>
      </a>
    </>
  );
}

export default ItemList;
