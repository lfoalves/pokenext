import Image from "next/image"
import Link from "next/link"

import styles from './Card.module.css'

export function Card({ data, ...rest }) {
  return (
    <div {...rest} className={styles.card}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${data.id}.png`}
        width={120}
        height={120}
        alt={data.name}
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      />
      <p className={styles.id}>#{data.id}</p>
      <h3 className={styles.title}>{data.name}</h3>
      <Link href={`/pokemon/${data.id}`} className={styles.btn}>Detalhes</Link>
    </div>
  )
}