import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus porro dolore minima quae beatae velit ratione suscipit? Rem a excepturi ad ducimus, porro consequuntur dolore quibusdam, accusamus fugit harum quod.</p>
      <Image
        src={'/images/charizard.png'}
        width={300}
        height={300}
        alt={'Charizard'}
      />
    </div>
  )
}