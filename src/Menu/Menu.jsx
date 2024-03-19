import styles from '../Menu/Menu.module.css'
import { Link } from 'react-router-dom'
import Redes from './Redes'

const Menu = () => {
  return (
    <header className={styles.header}>  
    <span className={styles.logo}>CESAR</span>

    <nav className={styles.nav}>

      <Link to='/Portafolio/'><span>I</span>nicio</Link>
      <Link to='/Portafolio/proyectos'><span>P</span>royectos</Link>
      <Link to='/Portafolio/sobremi'><span>S</span>obreMi</Link>

    </nav>

    

    <Redes/>
    </header>
  )
}

export default Menu