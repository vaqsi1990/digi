import React from 'react'
import classes from './Team.module.css'
import team from '../assets/team.jpeg'
import Button from '../UI/Button'
export default function Team() {
  return (
    <div className={classes.team}>
        <div className={classes.container}>
        <div className={classes.Leftcontainer}>
      <div className={classes.leftContent}>
        <img src={team} alt='team' />
      </div>
    </div>
    <div className={classes.Rightcontainer}>
        <div className={classes.rightContent}>
          <div className={classes.header}>

          <h4>Команда</h4>
          <div className={classes.line}></div>
          </div>
          <p>Наша команда - это наша самая большая ценность. 
Мы трудились, чтобы собрать группу  экспертов,
 чьи навыки дополняют друг друга. 
У членов нашей команды разные истории, но мы разделяем общую 
страсть к идеалу. Мы верим, чтобы оставаться
профессионалом, нужно развиваться, 
поэтому мы постоянно ищем способы, как стать лучше 
в том, что мы делаем.</p>
<Button text={'СМОТРЕТЬ ВИДЕО'}  >   </Button>
        </div>
    </div>
        </div>
    </div>
  )
}
