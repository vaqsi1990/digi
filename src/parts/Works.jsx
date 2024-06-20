import React from 'react'
import classes from './Works.module.css'
import first from '../assets/work1/1.png'
import sec from '../assets/work1/2.jpeg'
import thir from '../assets/work1/3.jpeg'
import four from '../assets/work1/4.png'
function Works() {
  return (
   <div className={classes.works}>
    <div className={classes.container}>
        <div className={classes.items}>

        <div className={classes.header}>
        Наши Проекты
        </div>
        <div className={classes.line}></div>
        <div className={classes.houses}>
            <div className={classes.first}>
                <img src={first} alt="" />
                <p>Lalique бутик</p>
            </div>
            <div className={classes.first}>
                <img src={sec} alt="" />
                <p>Строительство домов</p>
            </div>
            <div className={classes.first}>
                <img src={thir} alt="" />
                <p>Кофейня</p>
                <div className={classes.icon}>
                    <div>
                <svg className={classes.pirveli} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9772 13.7925C27.9772 21.4089 21.7134 27.5832 13.9866 27.5832C6.25988 27.5832 -0.00390625 21.4089 -0.00390625 13.7925C-0.00390625 6.17613 6.25988 0.00183105 13.9866 0.00183105C21.7134 0.00183105 27.9772 6.17613 27.9772 13.7925ZM26.858 13.7925C26.858 20.7996 21.0953 26.48 13.9866 26.48C6.87802 26.48 1.11534 20.7996 1.11534 13.7925C1.11534 6.78544 6.87802 1.10509 13.9866 1.10509C21.0953 1.10509 26.858 6.78544 26.858 13.7925ZM11.7482 11.0344V11.586H12.8674V20.4121H11.7482V20.9637H12.8674H15.1059H16.2251V20.4121H15.1059V11.0344H12.8674H11.7482ZM15.6655 8.27625C15.6655 9.19021 14.9139 9.93113 13.9866 9.93113C13.0594 9.93113 12.3078 9.19021 12.3078 8.27625C12.3078 7.36228 13.0594 6.62136 13.9866 6.62136C14.9139 6.62136 15.6655 7.36228 15.6655 8.27625Z" fill="#2B4074"/>
</svg>
</div>
<div>
<svg width="28" className={classes.search} height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9602 3.49677C22.8022 7.33875 23.0891 13.4052 19.8498 17.6738L28.1973 26.0213L26.2187 27.9999L17.8922 19.6734C13.6154 23.0661 7.42611 22.8282 3.52744 18.9296C-0.673332 14.7288 -0.623979 7.86866 3.63767 3.60701C7.89932 -0.65464 14.7595 -0.703993 18.9602 3.49677ZM18.1688 4.2882C21.9387 8.05812 21.8944 14.2147 18.0699 18.0392C14.2453 21.8638 8.08878 21.9081 4.31886 18.1381C0.548941 14.3682 0.593232 8.21168 4.41779 4.38713C8.24234 0.562572 14.3989 0.518281 18.1688 4.2882Z" fill="#2B4074"/>
</svg>

</div>

                </div>
            </div>
            <div className={classes.first}>
                <img src={four} alt="" />
                <p>Уникальные туры</p>
            </div>
        </div>
        </div>
    </div>
   </div>
  )
}

export default Works