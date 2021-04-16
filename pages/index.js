import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Incididunt ullamco officia duis non ea labore nisi cupidatat excepteur dolor velit consectetur esse. Non amet sunt aliqua adipisicing amet occaecat ad eiusmod voluptate cupidatat culpa nulla. Elit id do dolore excepteur ex elit eu dolore incididunt mollit ipsum. Ipsum anim cupidatat sint qui esse dolor non id sunt.</p>
        <p className={styles.text}>Incididunt ullamco officia duis non ea labore nisi cupidatat excepteur dolor velit consectetur esse. Non amet sunt aliqua adipisicing amet occaecat ad eiusmod voluptate cupidatat culpa nulla. Elit id do dolore excepteur ex elit eu dolore incididunt mollit ipsum. Ipsum anim cupidatat sint qui esse dolor non id sunt.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      </div>
    </>
  )
}
