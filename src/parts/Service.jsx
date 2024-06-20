import React from 'react';
import classes from './Service.module.css';
import one from '../assets/services/1.png';
import two from '../assets/services/2.png';
import three from '../assets/services/3.png';
import four from '../assets/services/4.png';
import five from '../assets/services/5.png';
import six from '../assets/services/6.png';
import seven from '../assets/services/7.png';
import eight from '../assets/services/8.png';

export default function Service() {
  return (
    <div className={classes.services}>
      <div className={classes.text}>
        <p>Сервис</p>
        <div className={classes.group}>
          <p>От идеи до незабываемого и
            измеримого результата.
          </p>
          <div className={classes.line}></div>
          <h3>
            Интеграция безупречного производства, 
            передовых технологий и тщательного 
            измерения производительности
          </h3>
        </div>
      </div>
      <div className={classes.icons}>
        <div className={classes.box}>
   
          <img src={one}  alt="" />

          <p>СТРАТЕГИЯ</p>
        </div>
        <div className={classes.box}>
          <img src={two} alt="" />
          <p>АНАЛИЗ</p>
        </div>
        <div className={classes.box}>
          <img src={three} alt="" />
          <p>СОЦ СЕТИ</p>
        </div>
        <div className={classes.box}>
          <img src={four} alt="" />
          <p>РАЗВИТИЕ</p>
        </div>
        <div className={classes.box}>
          <img src={five} alt="" />
          <p>КОНТЕНТ </p>
        </div>
        <div className={classes.box}>
          
          <img src={six} alt="" />
          <p>ДИЗАЙН UX</p>
          <h3>Создадим уникальный и <br/> удобный дизайн.</h3>
          <p>ПОДРОБНЕЕ →</p>
        </div>
        <div className={classes.box}>
          <img src={seven} alt="" />
          <p>ТАРГЕТИРОВАННАЯ
          РЕКЛАМА</p>
        </div>
        <div className={classes.box}>
          <img src={eight} alt="" />
          <p>ПРОДУКТ</p>
        </div>
      </div>
    </div>
  );
}
