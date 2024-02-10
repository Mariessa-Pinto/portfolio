import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Designs.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import video from '../public/innersightCommercial.mp4';
import videoTwo from '../public/map.mp4';



export default function Designs() {
    return (
        <>
            <Head>
                <title>Mariessa Pinto Portfolio</title>
                <meta name="description" content="Mariessa Pinto - Full-stack Web Developer | View Projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.introSection}>
                    <Navbar />
                    <div className={styles.topContent}>
                        <div>
                            <h1 className={styles.title}>Design Projects</h1>
                            <p className={styles.p}>A selection of design projects</p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.projects}>
                        <div className={styles.row1}>
                            <div className={styles.projectOne}>
                                <Image
                                    className={styles.creature}
                                    src={'/images/designs/viego.png'}
                                    alt='Viego'
                                    height={462}
                                    width={380}
                                />
                            </div>
                            <div className={styles.projectTwo}>
                                <video style={{ width: '100%', height: '100%', borderRadius: 20, boxShadow: '10px 10px 10px var(--green80)' }} controls>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className={styles.row2}>
                            <div className={styles.projectThree}>
                                <Image
                                    className={styles.creature}
                                    src={'/images/designs/ebook.png'}
                                    alt='When Penguins Could Fly'
                                    height={462}
                                    width={600}
                                />
                            </div>
                            <div className={styles.projectFour}>
                                <Image
                                    className={styles.creature}
                                    src={'/images/designs/creature.png'}
                                    alt='creature'
                                    height={462}
                                    width={680}
                                />
                            </div>
                        </div>
                        <div className={styles.row3}>
                            <div className={styles.projectFive}>
                                <video style={{ width: '100%', height: '100%', borderRadius: 20, boxShadow: '10px 10px 10px var(--green80)' }} controls>
                                    <source src={videoTwo} type="video/mp4" />
                                </video>
                            </div>
                            <div className={styles.projectSix}>
                                <Image
                                    className={styles.creature}
                                    src={'/images/designs/sight.png'}
                                    alt='Sight illustration'
                                    height={462}
                                    width={600}
                                />
                            </div>
                        </div>
                        <div className={styles.row4}>

                        </div>
                        <div className={styles.row5}>

                        </div>
                    </div>
                </div>
                <div id="contactSection" className={styles.contactSection}>
                    <Contact />
                </div>
            </main>
        </>
    )
}