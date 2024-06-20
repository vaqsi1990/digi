import React from 'react';
import classes from './Image.module.css';
import one from '../assets/services/1.png';
import two from '../assets/services/2.png';
import three from '../assets/services/3.png';
import four from '../assets/services/4.png';
import five from '../assets/services/5.png';
import six from '../assets/services/6.png';
import seven from '../assets/services/7.png';
import eight from '../assets/services/8.png';

export default function Images({ img, text }) {
  const images = [
    { src: one, text: 'СТРАТЕГИЯ 1' },
    { src: two, text: 'СТРАТЕГИЯ 2' },
    { src: three, text: 'СТРАТЕГИЯ 3' },
    { src: four, text: 'СТРАТЕГИЯ 4' },
    { src: five, text: 'СТРАТЕГИЯ 5' },
    { src: six, text: 'СТРАТЕГИЯ 6' },
    { src: seven, text: 'СТРАТЕГИЯ 7' },
    { src: eight, text: 'СТРАТЕГИЯ 8' },
  ];

  return (
    <div className={classes.container}>
        <div className={classes.infos}>


      <div className={classes.item}>
        {images.slice(0, 4).map((image, index) => (
          <div className={classes.box} key={index}>
            <img src={image.src} alt="" className={classes.image} />
            <p className={classes.text}>{image.text}</p>
          </div>
        ))}
      </div>
      <div className={classes.item}>
        {images.slice(4).map((image, index) => (
          <div className="box1" key={index}>
            <img src={image.src} alt="" className={classes.image} />
            <p className={classes.text}>{image.text}</p>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
}
