import styles from '../Proyectos/Proyectos.module.css';
import Pokedex from '../assets/Pokedex.png'
import rickAndMorty from '../assets/rm.png'
import clima from '../assets/Clima.png'
import github from '../assets/github.svg'
import react from '../assets/react.svg'
import css from '../assets/css.svg'
import java from '../assets/java.svg'

const Proyectos = () => {

  const tarjetas = [
    {
      image:[Pokedex],
      name:'Proyecto Pokedex',
    descrip:'Aplicacion para ver a todos los pokemones y ver sus diferentes caracteristicas.',
      tecno:[react,css,java],
      url:'https://github.com/Caspiza/project5',
      urlImage: 'https://project5-cesarcastillo.netlify.app',
    },

    {
      image:[rickAndMorty],
      name:'Aplicacion Rick and Morty',
      descrip:'En esta aplicacion podemos ver los personajes que hay en cada universo de la serie Rick and Morty.',
      tecno:[react,css,java],
      url:'https://github.com/Caspiza/Project3',
      urlImage: 'https://project3-cc.netlify.app',
    },
    {
    image:[clima],
    name:'Aplicacion del clima',
    descrip:'Según nuestra ubicación, podemos ver la temperatura que tenemos actualmente.',
    tecno:[react,css,java],
    url:'https://github.com/Caspiza/project2',
    urlImage: 'https://project2-cesarcastillo.netlify.app',
    },
  ]

  return (
    <section className={styles.Proyectos}>
      <h2>Proyectos</h2>
      <div className={styles.cards}>

        {
          tarjetas.map((card,index) =>{
            return(
              <div key={index} className={styles.card}>
                <div className={styles.img}>
                <a href={card.urlImage}target="_blank" rel="noopener noreferrer"><img width='100%' height='200px' src={card.image} alt="" /></a>
                </div>

                <h3>{card.name}</h3>

                <p>{card.descrip}</p>

                <div className={styles.tecno}>
                  <img width='30' src={card.tecno[0]} alt="" />
                  <img width='30' src={card.tecno[1]} alt="" />
                  <img width='30' src={card.tecno[2]} alt="" />
                </div>
                <div className={styles.github}>
                  <a href={card.url} target="_blank" rel="noopener noreferrer">
                    <img width='30' src={github} alt="" />
                  </a>
                </div>
              </div>
            )
          })
        }

      </div>


      </section>
  )
}

export default Proyectos