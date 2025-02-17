import styles from './ItemList.module.scss';

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
      <a
        className={styles.anchor}
        href={redirectUrl || '/'}
        target="_blank"
        rel="noreferrer"
      >
        <div className={`${styles['item']} ${styles[className as string]}`}>
          <span
            className={`${styles['point']} ${styles[pointColor as string]}`}
          />
          <span
            className={`${styles['point-text']} ${styles[(pointColor as string) + '-txt']}`}
          >
            {text}
          </span>
        </div>
      </a>
    </>
  );
}

export default ItemList;
