import Link from 'next/link'
import Image from 'next/image'

import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} className={styles.logo}>
        <Image
          src={'/images/pokeball.png'}
          width={30}
          height={30}
          alt={'PokeNext'}
        />
        <h1>PokeNext</h1>
      </Link>
      <ul className={styles.link_items}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  )
}