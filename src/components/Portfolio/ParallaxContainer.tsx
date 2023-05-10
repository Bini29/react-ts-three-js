import { FC } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./style.module.css";
import useStore from "../../store";
import img from "../../assets/img/project1.png";

interface IProps {
  background: string;
  offset: number;
  speed: number;
  factor: number;
}

const ParallaxContainer: FC<IProps> = ({
  background,
  factor,
  offset,
  speed,
}) => {
  const setClick = useStore((state) => state.setClick);

  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={speed}
        // factor={factor}
        style={{
          backgroundColor: background,
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={offset}
        // factor={factor}
        speed={0.6}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.card} onClick={setClick}>
          <img className={styles.img} src={img} alt="" />
          <p>Ямал</p>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default ParallaxContainer;
