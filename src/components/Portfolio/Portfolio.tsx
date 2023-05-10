import React, { FC, useEffect, useRef } from "react";
import styles from "./style.module.css";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import ParallaxContainer from "./ParallaxContainer";

const Portfolio: FC = () => {
  const parallax = useRef<IParallax>(null!);

  const alignCenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    console.log(parallax.current);
    setInterval(() => {
      // parallax.current.update();
      console.log(parallax.current);
    }, 2000);
  }, [parallax]);

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.background} /> */}

      <Parallax
        pages={3}
        ref={parallax}
        //  style={{ height: "100vh" }}
        style={{ top: "0", left: "0" }}
      >
        <ParallaxContainer background="white" speed={0} factor={1} offset={0} />
        <ParallaxContainer
          background="#cdebd3"
          speed={0}
          factor={2}
          offset={1}
        />
        <ParallaxContainer background="#ccc" speed={0} factor={3} offset={2} />
      </Parallax>
    </div>
  );
};

export default Portfolio;
