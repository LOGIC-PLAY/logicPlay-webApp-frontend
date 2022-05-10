import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import logo from '../assets/images/logicplay-logo.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Logic-Play Web-App</title>
      </Head>

      <Image src={logo}/>
      <h1 className={styles.title}>Logic-Play Web-App</h1>
    </div>
  )
}
