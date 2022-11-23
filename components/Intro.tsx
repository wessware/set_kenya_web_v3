import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor='#b0ff49' top="-50vh" left="-50vh" />
        <Circle backgroundColor='#01c686' right="-40vh" />
        <div className={styles.card}>
            <h1 className={styles.title}>
                <span className={styles.brand}>STUDENT EMPOWERMENT </span> TEAM KENYA
            </h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui accusantium culpa voluptatibus repudiandae earum!
            </p>
            <button className={styles.button}>DISCOVER</button>
        </div>
        <div className={styles.card}>
            <Image src='/img/bg7.jpg' alt='' layout='fill' objectFit='cover'/>
        </div>

    </div>
  )
}

export default Intro