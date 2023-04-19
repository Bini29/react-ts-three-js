import React from "react";
import style from "./style.module.css";
import { useSpring, a } from "@react-spring/web";
import logo from "../../assets/svg/logo.svg";
const Info = () => {
  const [styles] = useSpring(() => ({
    config: { tension: 280, friction: 60 },
    from: { opacity: 0, x: "-100%", y: 0 },
    to: { opacity: 1, x: "0%", y: 0 },
  }));

  return (
    <a.div className={style.info} style={styles}>
      <div className={style.logo}>
        <img src={logo} width={60} alt="" />
        <span>Битроид IT company</span>
      </div>
      <p className={style.desk}>
        Наш профиль - <b>Битрикс</b>
        <b> 24.</b>
        <br />
        Мы внедрили <b>свыше 150 проектов</b> и являемся{" "}
        <b>профессиональными интеграторами.</b> <br />
        <br />У нас свой штат <b>программистов, разработчиков, веб-мастеров.</b>
      </p>
      <div className={style.infolist}>
        <div className={style.infoColumn}>
          <span>Наши услуги</span>
          <ul>
            <li>Битрикс 24.CRM</li>
            <li>Сопровождение CRM</li>
            <li>Корпоративные порталы</li>
            <li>Сопровождение корпоративных порталов</li>
            <li>Интеграция 1С с магазинами и маркетплейсами</li>
            <li>Автоматизация документооборота</li>
          </ul>
        </div>
        <div className={style.infoColumn}>
          <span>Компетенции</span>
          <ul>
            <li>Коробочная версия</li>
            <li>Бизнес-процессы</li>
            <li>СRM</li>
            <li>Интернет-магазин+1С</li>
            <li>Композитный сайт</li>
            <li>Интернет-магазин+CRM</li>
          </ul>
        </div>
        <div className={style.infoColumn}>
          <span>Опыт</span>
          <ul>
            <li>
              <b> 230+</b> Реализованных проектов
            </li>
            <li>
              <b>7+</b> Лет интегрируем Битрикс24
            </li>
            <li>
              <b>87+</b> Компаний обучили{" "}
            </li>
            <li>
              <b>+53%</b> К эффективности сотрудников
            </li>
          </ul>
        </div>
      </div>
    </a.div>
  );
};

export default Info;
