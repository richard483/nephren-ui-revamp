import './ItemList.scss';
import 'src/component/ItemList/ItemList.tablet-portrait.scss';

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
          <span className="point-text">{text}</span>
        </div>
      </a>
    </>
  );
}

export default ItemList;
