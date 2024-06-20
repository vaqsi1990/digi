import React from 'react'
import classes from './News.module.css'
import fir from '../assets/blog/1.jpg'
import two from '../assets/blog/2.jpg'
import three from '../assets/blog/3.jpg'
import four from '../assets/blog/4.jpg'
import five from '../assets/blog/5.png'
import six from '../assets/blog/6.jpg'
import seven from '../assets/blog/7.jpg'
import eight from '../assets/blog/8.jpg'
export default function News() {
  return (
  <div className={classes.news}>
  <div className={classes.container}>
    <h1 className={classes.header}>Последние Новости</h1>
    <div className={classes.line}></div>
    <div className={classes.imagebox}>
    
      <div className="grid">

       <div className="box">
      <img className='fir' src={fir} alt="Sample" />
      <p>3Д в брендинге</p>

       </div>
       <div className="bx2">
  <img className='two' src={two} alt="Sample "/>
  <p>Контекстная реклама</p>
       </div>
       <div className="bx3">
  <img className='three' src={three} alt="Sample "/>
  <div className={classes.icon}>
            <svg className={classes.pirveli} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9772 13.7924C27.9772 21.4088 21.7134 27.5831 13.9866 27.5831C6.25988 27.5831 -0.00390625 21.4088 -0.00390625 13.7924C-0.00390625 6.17601 6.25988 0.00170898 13.9866 0.00170898C21.7134 0.00170898 27.9772 6.17601 27.9772 13.7924ZM26.858 13.7924C26.858 20.7995 21.0953 26.4798 13.9866 26.4798C6.87802 26.4798 1.11534 20.7995 1.11534 13.7924C1.11534 6.78532 6.87802 1.10496 13.9866 1.10496C21.0953 1.10496 26.858 6.78532 26.858 13.7924ZM11.7482 11.0343V11.5859H12.8674V20.4119H11.7482V20.9636H12.8674H15.1059H16.2251V20.4119H15.1059V11.0343H12.8674H11.7482ZM15.6655 8.27612C15.6655 9.19009 14.9139 9.93101 13.9866 9.93101C13.0594 9.93101 12.3078 9.19009 12.3078 8.27612C12.3078 7.36216 13.0594 6.62124 13.9866 6.62124C14.9139 6.62124 15.6655 7.36216 15.6655 8.27612Z" fill="white"/>
            </svg>
          </div>
          <div className={classes.txt}>
            <p>Графика</p>
          </div>
       </div>
       <div className="bx4">
  <img className='four' src={five} alt="Sample "/>
  <p>Корпоративная культура</p>
       </div>
       <div className="bx5">
  <img className='five' src={four} alt="Sample "/>
<p>Уникальный дизайн</p>
       </div>
       <div className="bx6">
  <img className='six' src={six} alt="Sample "/>
<p>Взгляд со стороны</p>
       </div>
       <div className="bx7">
    <img className='seven' src={seven} alt="Sample"/>
      <p>Соц сети и их польза</p>
       </div>
       <div className="bx8">
  <img className='eight' src={eight} alt="Sample "/>
  <p>Эксклюзивность</p>

       </div>
      </div>
    </div>
  </div>
</div>

  )
}
