import React from 'react';
import classes from './Hero.module.css';
import Button from '../UI/Button';
import Pagination from '../UI/Pagination';


export default function Hero() {
  return (
    <div className={classes.hero} >
      <div className={classes.info}>
        <p>МЫСЛИ ГЛОБАЛЬНО</p>
        <h3>Di Gі - это диджитал агентство полного цикла, направленное на самый лучший результат наших клиентов в маркетинге, продажах и управлении</h3>
    
 <Button text={'подробнее'}  />
     <Pagination />
      </div>
      <div className={classes.arrow}>
        <div className={classes.right}>

        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5441 21.239L0.34375 11.0386L10.5261 0.856275L12.7928 3.12303L4.87325 11.0426L12.8069 18.9763L10.5441 21.239Z" fill="white"/>
</svg>
        </div>
        <div className={classes.left}>
        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.45586 0.158159L12.6562 10.3586L2.47391 20.5409L0.207159 18.2741L8.12675 10.3545L0.193117 2.4209L2.45586 0.158159Z" fill="#929292"/>
</svg>

        </div>
      </div>
    </div>
  );
}
