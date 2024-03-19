import styles from '../Menu/Menu.module.css'
import { Link } from 'react-router-dom'
import Redes from './Redes'

const Menu = () => {
  return (
    <header className={styles.header}>  
    <span className={styles.logo}>CESAR</span>

    <nav className={styles.nav}>

      <Link to='/Portafolio/'><div className={styles.inicio}>
      <div className={styles.box}>I</div>
      <div className={styles.box}>N</div>
      <div className={styles.box}>I</div>
      <div className={styles.box}>C</div>
      <div className={styles.box}>I</div>
      <div className={styles.box}>O</div>
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

    </nav>

    

    <Redes/>
    </header>
  )
}

export default Menu