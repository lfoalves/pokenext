import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

import Head from "next/head";

import styles from './MainComponent.module.css'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <title>PokeNext</title>       
      </Head>
      <Navbar />
      <main className={styles.main}>
        { children }
      </main>
      <Footer />
    </>
  )
}