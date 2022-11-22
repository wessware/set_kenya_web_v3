import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Set Kenya</title>
        <meta name="description" content="Student Empowerment Team Kenya" />
      </Head>
    
    <h1 className={styles.title}>This is the homepage! </h1>
    </div>
  )
}
