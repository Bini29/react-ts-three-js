import React, { useEffect, useRef, useState, Children, FC } from "react";
import { useTrail, a, config, useSpring } from "@react-spring/web";

import styles from "./Title.module.css";

const Title: FC<{
  open: boolean;
  pos: boolean;
  children: React.ReactNode | React.ReactNode[];
}> = ({ open, children, pos }) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const items = Children.toArray(children);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let widthDiv = ref.current?.clientWidth;
    let heightDiv = ref.current?.clientHeight;

    setWidth(widthDiv ? widthDiv : 0);
    setHeight(heightDiv ? heightDiv : 0);
  }, [ref.current?.clientHeight]);

  const props = useSpring({
    x: pos ? " 50%" : "80%",
    y: pos ? " 50%" : "10%",
  });

  const trail = useTrail(items.length, {
    config: { tension: 120, friction: 40 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 100 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <a.div
      className={styles.title}
      ref={ref}
      style={{
        margin: `-${height / 2}px -${width / 2}px`,
        left: props.x,
        top: props.y,
      }}
    >
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </a.div>
  );
};

export default Title;
