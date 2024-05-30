import styles from '../Contacto/Contacto.module.css';
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import whatsapp from '../assets/whatsapp.svg'
import telegram from '../assets/telegram.svg'

const Contacto = () => {

  const tarjetas = [
    {
      image:[linkedin],
      name:'Linkedin',
      url:'https://github.com/Caspiza/project5',
    },

    {
      image:[github],
      name:'Github',
      url:'https://github.com/Caspiza',
    },
    {
      image:[whatsapp],
      name:'Whatsapp',
      url:'https://wa.link/ogvp9e ',
    },
    {
      image:[telegram],
      name:'Telegram',
      url:'https://t.me/casPiza',
    },
  ]

  return (
    <section className={styles.Contacto}>
      <h2 className={styles.contactTitle}>Medios de Contacto</h2>
      <div className={styles.contact}>

        {
          tarjetas.map((contact,index) =>{
            return(
              <a href={contact.url}target="_blank" rel="noopener noreferrer"><div key={index} className={styles.contacts}>
                <div className={styles.img}>
               <img width='100%' height='200px' src={contact.image} alt="" />
                </div>

                <h3>{contact.name}</h3>

              </div> </a>
            )
          })
        }

      </div>


      </section>
  )
}

export default Contacto