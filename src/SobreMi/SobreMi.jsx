import styles from '../SobreMi/SobreMi.module.css'
import yo from '../assets/Yo.png'

const SobreMi = () => {
  return (
    <section className={styles.SobreMi}>
      <article className={styles.intro}>
        <div>
          <img width='100%' src={yo} alt="" />
        </div>
        <p>Hola soy César, siempre me a entusiasmado el desarrollo web y la tecnología.<br /> 
        Desde hace más de un año vengo aprendiendo por mi cuenta y llevando cursos de diferentes lenguajes de programación tanto de Backend como Frontend.<br />
          El desarrollar diferentes proyectos en equipo, me a dado una experiencia cercana a un ambiente real de desarrollo por lo que me siento preparado para empezar un nuevo reto en el ambiente laboral como Desarrollador Web Full Stack.</p>
        <div className={styles.adornos}>
        </div>
      </article>

      <div className={styles.edu}>

        <h2 className={styles.education}>Educación</h2>

        <div>
          <h3>Academlo</h3>
          <span>React, Node.js, Javascript</span>
        </div>

        <div>
          <h3>Freecodecamp</h3>
          <span>Javascript</span>
        </div>

      </div>
    </section>
  )
}

export default SobreMi