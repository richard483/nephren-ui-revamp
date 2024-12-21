import React, { useEffect, useState } from 'react';

type StrippedLinesProps = {
  readonly numberOfLines: number;
  readonly className?: string;
  readonly itemClassName?: string;
  readonly children?: React.ReactNode;
};

function StrippedLines(props: StrippedLinesProps) {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visibleLines < props.numberOfLines) {
      timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 100);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [visibleLines, props.numberOfLines]);

  return (
    <span className={props.className}>
      {Array.from({ length: props.numberOfLines }, (_, i) => {
        if (i === props.numberOfLines - 1 && !showChildren) {
          setTimeout(() => {
            setShowChildren(true);
          }, 1000);
        }
        return (
          <span
            key={i.toString() + ' ' + (props.className ?? '')}
            className={props.itemClassName}
            style={{
              opacity: i < visibleLines ? 1 : 0,
              transition: 'opacity 0.1s ease-in-out',
            }}
          />
        );
      })}
      {showChildren && props.children}
    </span>
  );
}

export default StrippedLines;
