import styles from '../Inicio/Inicio.module.css'

const Inicio = () => {
  return (
    <section className={styles.Inicio}>
        <article className={styles.full}>
        <h1>Full Stack Web Developer</h1>
        <p>Programador con habilidades tanto en Front-end como en Back-end, enfocado en el desarrollo de aplicaciones web.</p>

           <div className={styles.adornos}>
           <div></div>
           <div></div>
           <div></div>
           </div>

        </article>

        <div className={styles.botones}>

        <h2>Cesar Kevy Castillo Pizarro</h2>

        <div>
          <a href='https://www.canva.com/design/DAF5cjbTn1U/kAkOSc-wlsHCUXOkYzUH-Q/view?utm_content=DAF5cjbTn1U&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" rel="noopener noreferrer">CV</a>
        </div>

        </div>
    </section>
  )
}

export default Inicio