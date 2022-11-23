import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import Services from '../components/Services'

import { data } from "../data"

export default function Home({services}) {
  return (
    <div>
      <Head>
        <title>Set Kenya</title>
        <meta name="description" content="Student Empowerment Team Kenya" />
      </Head>
    <Intro />
    <Services />
    </div>
  )
}


export const getStaticProps = async () => {
  const services = data

  return {
    props: {services}
  }
}