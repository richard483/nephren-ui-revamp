import './ItemList.scss';

function ItemList({
  text,
  className,
  pointColor,
}: {
  text: string;
  className?: string;
  pointColor?: string;
}) {
  return (
    <>
      <div className={`item ${className}`}>
        <span className={`point ${pointColor}`} />
        <span className="point-text">{text}</span>
      </div>
    </>
  );
}

export default ItemList;
