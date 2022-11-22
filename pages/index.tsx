import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Set Kenya</title>
        <meta name="description" content="Student Empowerment Team Kenya" />
      </Head>
    <Intro />
    </div>
  )
}
