import React from "react";
import style from "./style.module.css";
import { useSpring, a } from "@react-spring/web";
import logo from "../../assets/svg/logo.svg";
import useStore from "../../store";
import GitHubIcons from "../../assets/svg/GitHubIcons";
import TelegramIcon from "../../assets/svg/TelegramIcon";
import img from "../../assets/img/miphoto.jpg";

const Info = () => {
  const increasePopulation = useStore((state) => state.setPage);

  const [styles] = useSpring(() => ({
    config: { tension: 280, friction: 60 },
    from: { opacity: 0, x: "-100%", y: 0 },
    to: { opacity: 1, x: "0%", y: 0 },
  }));

  return (
    <a.div className={style.info} style={styles}>
      <div className={style.logo}>
        <div className={style.linkLogo}>
          <span>Vadim Egorov</span>
        </div>
        <button onClick={() => increasePopulation(2)}>++++</button>
        <div className={style.linkBlock}>
          <a href="https://t.me/Chansys">Chansys</a>
        </div>
      </div>
      <div className={style.aboutBlock}>
        <p className={style.desk}>Frontend Developer</p>
        <img src={img} alt="" />
      </div>
      <div className={style.infolist}>
        <div className={style.infoColumn}>
          <span>Texнологии</span>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>MobX</li>
            <li>Three.js</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div className={style.infoColumn}>
          <span>Опыт работы</span>
          <ul>
            <li>Верстальщик</li>
            <li>Front-end разработчик</li>
            <li>React разработчик</li>
          </ul>
        </div>
        <div className={[style.infoColumn, style.flexLi].join(" ")}>
          <span>Ссылки</span>
          <ul>
            <li>
              <GitHubIcons />
              <a href="https://github.com/Bini29" target="_blank">
                Bini29
              </a>
            </li>
            <li>
              <TelegramIcon /> <a href="https://t.me/Chansys">Chansys</a>
            </li>
          </ul>
        </div>
      </div>
    </a.div>
  );
};

export default Info;
