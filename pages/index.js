import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import ChoosePet from '@/components/ChoosePet'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Pets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <ChoosePet/>
    </div>
  );
}
