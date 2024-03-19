import styles from '../Menu/Redes.module.css'
import Linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'

const Redes = () => {
  return (
    <div className={styles.Redes}>
        
        <a href="https://www.linkedin.com/in/cesar-kevy-castillo-pizarro-778b801a6/" target="_blank" rel="noopener noreferrer">
            <img width='30px' src={Linkedin} alt="" />
        </a>

        <a href="https://github.com/Caspiza" target="_blank" rel="noopener noreferrer">
            <img width='30px' src={github} alt="" />
        </a>

        <a href="https://www.instagram.com/cesar_caspiza/" target="_blank" rel="noopener noreferrer">
            <img width='30px' src={instagram} alt="" />
        </a>
    </div>
  )
}

export default Redes