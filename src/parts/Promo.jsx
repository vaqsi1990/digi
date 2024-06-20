import React from 'react'
import classes from './Promo.module.css';
export default function Promo() {
  return (
    <div className={classes.promo}>
      <div className={classes.container}>
        <div className={classes.promoText}>
            <p>Вы полfюбите нас с первой встречи!</p>
            <h3>Мы предоставляем комплексный подход к продвижению компании, <br/>
            продуктов и услуг в цифровой сфере.</h3>
        </div>
            <button className={classes.btn}>  ПЕРЕЗВОНИТЕ МНЕ</button>
      </div>
    </div>
  )
}
