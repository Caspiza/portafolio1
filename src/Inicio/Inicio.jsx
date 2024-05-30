import styles from '../Inicio/Inicio.module.css'

const Inicio = () => {
  return (
    <section className={styles.Inicio}>

        <article className={styles.cv}>
        <h1>Cesar Kevy Castillo Pizarro</h1>
          <a href='https://www.canva.com/design/DAF5cjbTn1U/kAkOSc-wlsHCUXOkYzUH-Q/view?utm_content=DAF5cjbTn1U&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" rel="noopener noreferrer">
          <button className={styles.button}> CV </button></a>
        </article>

        <article className={styles.full}>
        <h2 className={styles.tittle}>Full Stack Web Developer</h2>
        <p>Programador con habilidades tanto en Front-end como en Back-end, enfocado en el desarrollo de aplicaciones web.</p>
        </article>

    </section>
  )
}

export default Inicio