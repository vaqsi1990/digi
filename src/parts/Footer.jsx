import React from 'react'
import classes from './Footer.module.css'
import logo from '../assets/0f20536396bff6008067aa207e4f7712.png';
export default function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.container}>
            <div className={classes.header}>
            <img src={logo} className={classes.logo} alt="Logo" />
            </div>
            <div className={classes.sec}>
            <p>Мы хотели бы услышать все о вашем проекте.<br/>
            Свяжись с нами.</p>
            <div className={classes.soc}>
  <div className={classes.facebook}>
    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.70312 0.991071C9.40179 0.946428 8.36384 0.857141 7.15848 0.857141C4.63616 0.857141 2.90625 2.39732 2.90625 5.22098V7.65402H0.0602679V10.9576H2.90625V19.4286H6.32143V10.9576H9.15625L9.59152 7.65402H6.32143V5.54464C6.32143 4.59598 6.57813 3.9375 7.95089 3.9375H9.70312V0.991071Z" fill="white"/>
    </svg>
  </div>
  <div className={classes.facebook}>
  <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0379 9.04687C16.0379 8.51116 15.9821 8.09821 15.904 7.68527H8.1808V10.4978H12.8237C12.6339 11.692 11.4174 14.0246 8.1808 14.0246C5.39062 14.0246 3.11384 11.7143 3.11384 8.85714C3.11384 6 5.39062 3.68973 8.1808 3.68973C9.77679 3.68973 10.8371 4.37054 11.4397 4.95089L13.6607 2.8192C12.2321 1.47991 10.3906 0.676338 8.1808 0.676338C3.66071 0.676338 0 4.33705 0 8.85714C0 13.3772 3.66071 17.0379 8.1808 17.0379C12.9018 17.0379 16.0379 13.7232 16.0379 9.04687ZM25.7143 7.68527H23.3817V5.35268H21.0379V7.68527H18.7054V10.029H21.0379V12.3616H23.3817V10.029H25.7143V7.68527Z" fill="white"/>
</svg>

  </div>
  <div className={classes.facebook}>
  <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0804 2.41071C17.433 2.68973 16.7299 2.89062 16.0045 2.96875C16.7522 2.52232 17.3214 1.8192 17.5893 0.982143C16.8973 1.39509 16.1161 1.69643 15.3013 1.85268C14.6429 1.14955 13.7054 0.714285 12.6674 0.714285C10.6696 0.714285 9.0625 2.33259 9.0625 4.3192C9.0625 4.59821 9.09598 4.87723 9.15179 5.14509C6.16071 4.98884 3.4933 3.56027 1.71875 1.37277C1.40625 1.90848 1.22768 2.52232 1.22768 3.19196C1.22768 4.44196 1.86384 5.54687 2.83482 6.1942C2.2433 6.17187 1.68527 6.00446 1.20536 5.73661C1.20536 5.74777 1.20536 5.77009 1.20536 5.78125C1.20536 7.53348 2.4442 8.98438 4.09598 9.3192C3.79464 9.39732 3.47098 9.44196 3.14732 9.44196C2.91295 9.44196 2.68973 9.41964 2.46652 9.38616C2.92411 10.8147 4.25223 11.8527 5.83705 11.8862C4.59821 12.8571 3.04688 13.4263 1.36161 13.4263C1.06027 13.4263 0.78125 13.4152 0.491071 13.3817C2.08705 14.4085 3.98438 15 6.02679 15C12.6562 15 16.2835 9.50893 16.2835 4.7433C16.2835 4.58705 16.2835 4.4308 16.2723 4.27455C16.9754 3.76116 17.5893 3.125 18.0804 2.41071Z" fill="white"/>
</svg>


  </div>
  <div className={classes.facebook}>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1429 8.85714C17.1429 4.125 13.3036 0.285713 8.57143 0.285713C3.83929 0.285713 0 4.125 0 8.85714C0 12.3728 2.10938 15.3862 5.13393 16.7143C5.11161 16.1116 5.12277 15.3862 5.27902 14.7388C5.27902 14.7388 5.44643 14.0469 6.38393 10.0737C6.10491 9.52679 6.10491 8.71205 6.10491 8.71205C6.10491 7.43973 6.84152 6.49107 7.7567 6.49107C8.53795 6.49107 8.91741 7.08259 8.91741 7.78571C8.91741 8.56696 8.41518 9.73884 8.15848 10.8214C7.94643 11.7366 8.61607 12.4732 9.50893 12.4732C11.1384 12.4732 12.2321 10.3862 12.2321 7.91964C12.2321 6.03348 10.9598 4.62723 8.66071 4.62723C6.06027 4.62723 4.44196 6.5692 4.44196 8.73437C4.44196 9.48214 4.66518 10.0067 5.01116 10.4196C5.16741 10.6094 5.18973 10.6763 5.13393 10.8996C5.08929 11.0558 5 11.4353 4.95536 11.5804C4.89955 11.8036 4.72098 11.8817 4.53125 11.8036C3.33705 11.3125 2.77902 9.99554 2.77902 8.52232C2.77902 6.08929 4.83259 3.16518 8.89509 3.16518C12.1763 3.16518 14.3304 5.54241 14.3304 8.07589C14.3304 11.4464 12.4554 13.9576 9.69866 13.9576C8.77232 13.9576 7.90179 13.4554 7.61161 12.8862C7.10938 14.8616 7.00893 15.2411 7.00893 15.2411C6.83036 15.8996 6.46205 16.558 6.13839 17.0714C6.91964 17.3058 7.72321 17.4286 8.57143 17.4286C13.3036 17.4286 17.1429 13.5893 17.1429 8.85714Z" fill="white"/>
</svg>



  </div>
</div>


            </div>
<div className={classes.info}>
<div className={classes.text}>
<h1>КОНТАКТЫ</h1>
<p>+80 555 55 66</p>
<p>digi@gmail.com</p>
</div>
<div className={classes.text}>
<h1>КОНТАКТЫ</h1>
<p>+80 555 55 66</p>
<p>digi@gmail.com</p>
</div>
<div className={classes.text}>
<h1>КОНТАКТЫ</h1>
<p>+80 555 55 66</p>
<p>digi@gmail.com</p>
</div>
<div className={classes.text}>
<h1>КОНТАКТЫ</h1>
<p>+80 555 55 66</p>
<p>digi@gmail.com</p>
</div>
</div>
        </div>

    </div>
  )
}
