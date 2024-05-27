import styles from '../Menu/Menu.module.css'
import { Link } from 'react-router-dom'
import Redes from './Redes'
import react from '../assets/react.svg'
import javascript from '../assets/javascript.png'
import nodejs from '../assets/node-js.png'


const Menu = () => {
  return (
    <header className={styles.header}>  
    <nav className={styles.logo1}>
      <div className={styles.logo}>
      <img  width='40px' height='40px' src= {react} alt="" />
      <img  width='40px' height='40px' src= {javascript} alt="" />
      <img  width='40px' height='40px' src= {nodejs} alt="" />
      </div>
    </nav>

    <nav className={styles.nav}>

      <Link to='/Portafolio/'><div className={styles.inicio}>
      <div className={styles.box}>I</div>
      <div className={styles.box}>N</div>
      <div className={styles.box}>I</div>
      <div className={styles.box}>C</div>
      <div className={styles.box}>I</div>
      <div className={styles.box}>O</div>
      </div></Link>
      <Link to='/Portafolio/sobremi'><div className={styles.sobreMi}>
      <div className={styles.box}>S</div>
      <div className={styles.box}>O</div>
      <div className={styles.box}>B</div>
      <div className={styles.box}>R</div>
      <div className={styles.box}>E</div>
      <div className={styles.box}> </div>
      <div className={styles.box}>M</div>
      <div className={styles.box}>I</div>
      </div></Link>
      <Link to='/Portafolio/proyectos'><div className={styles.proyectos}>
      <div className={styles.box}>P</div>
      <div className={styles.box}>R</div>
      <div className={styles.box}>O</div>
      <div className={styles.box}>Y</div>
      <div className={styles.box}>E</div>
      <div className={styles.box}>C</div>
      <div className={styles.box}>T</div>
      <div className={styles.box}>O</div>
      <div className={styles.box}>S</div>
      </div></Link>
      

    </nav>

    

    <div className={styles.redes}><Redes/></div>
    </header>
  )
}

export default Menu