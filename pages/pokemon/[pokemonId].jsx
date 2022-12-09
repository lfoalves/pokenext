import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Pokemon.module.css'

// Função de carregamento de todos os dados
export const getStaticPaths = async() => {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon'
  const response = await fetch(`${api}/?limite=${maxPokemons}`)
  const data = await response.json()

  // Params
  // Retorna um aray de objeto de objetos
  const paths = data.results.map((item, index) => {
    return {
      params: { pokemonId: (index+1).toString()}
    }
  })

  return {
    paths, fallback: false
  }
}

// Retorna um objeto
export const getStaticProps = async(context) => {
  const id = context.params.pokemonId
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return {
    props: { pokemon: data }
  }
}

export default function Pokemon({ pokemon }) {
  const router = useRouter()
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>
        {pokemon.name}
      </h1>
      <button onClick={() => router.back()}>Voltar</button>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div className={styles.types_container}>
        <h3>Tipo:</h3>
        <p>
          {
            pokemon.types.map((item, index) => (
              <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>
                {item.type.name}
              </span>
            ))
          }
        </p>
      </div>
      <div className={styles.info_container}>
        <div className={styles.info_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10}cm</p>
        </div>
        <div className={styles.info_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10}kg</p>
        </div>
      </div>
    </div>
  )
}