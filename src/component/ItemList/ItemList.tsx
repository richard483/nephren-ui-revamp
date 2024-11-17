import './ItemList.scss';

function ItemList({ text, className }: { text: string; className?: string }) {
  return (
    <>
      <div className={`item ${className}`}>
        <span className="point" />
        <span className="point-text">{text}</span>
      </div>
    </>
  );
}

export default ItemList;
