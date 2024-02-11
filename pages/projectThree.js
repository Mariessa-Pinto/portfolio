import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/ProjectThree.module.css'
import Link from 'next/link'
import OtherProjects from '@/components/OtherProjects'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'


export default function ProjectThree() {
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
                        <div className={styles.mainText}>
                            <h1 className={styles.topHeader}>Pagepal</h1>
                            <p className={styles.topDates}>November - December 2023</p>
                            <h2 className={styles.topSubHeader}>Problem</h2>
                            <p className={styles.p}>Users who enjoy reading a lot struggle to keep track of books they are reading, have read, to be read or did not finish. Users feel that traditional app interfaces are not intuitive and do not allow them to customize their app experience for better tracking their books.</p>
                            <h3 className={styles.subHeaderTwo}>Summary</h3>
                            <p className={styles.p}>A bookshelf management web application using React to allow to user to create, edit and delete bookshelves. Users can then search books from the integrated Google Books API and add them to a shelf.</p>
                            <h3 className={styles.subHeaderTwo}>Roles</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Full-Stack Web Developer</li>
                                <li className={styles.listItem}>UX/UI Designer</li>
                            </ul>
                        </div>
                        <div className={styles.mainImage}>
                            <Image
                                className={styles.img}
                                src={"/images/pagepal/home.png"}
                                alt='home screen'
                                width={550}
                                height={650}
                            />
                        </div>
                    </div>
                </div>
                {/* Challenges */}
                <div className={styles.challenge}>
                <div className={styles.alignText}>
                        <h2 className={styles.chalHeader}>Challenges</h2>
                    </div>
                    <div className={styles.chalSection}>
                        <div className={styles.chalImage}>
                            <Image
                                className={styles.img}
                                src={'/images/pagepal/screens.png'}
                                alt='screens'
                                height={500}
                                width={600}
                            />
                        </div>
                        <div className={styles.chalText}>
                            <h3 className={styles.chalSubHead}>Intuitively Functional</h3>
                            <p className={styles.pSpaceAddedd}>Key challenges in relation to the development of Pagepal relate to the smooth integration of the dynamic components allowing for a simple and effective web app.</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}><p className={styles.bold}>External API Intgration: </p>Ensuring consistency in data when integrating the book search function from external Google API database.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>Data Management: </p>Managing and storing user created bookshelves as well as books saved to specific shelves.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>User Interface Design: </p>Creating an intuitive design that enables users to manage their books without crowded or confusing interface elements.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.solution}>
                <div className={styles.alignText}>
                        <h2 className={styles.solHeader}>Solution</h2>
                    </div>
                    <div className={styles.solSection}>
                        <div className={styles.solTop}>
                            <p className={styles.p}>Pagepal allows users to easily create any number of bookshelves, rename them as needed, add books to their bookshelves, and move books from one shelf to another.</p>
                        </div>
                        <div className={styles.solMiddle}>
                            <div className={styles.solPadding}>
                                <Image
                                    className={styles.img}
                                    src={'/images/pagepal/shelf.png'}
                                    alt='bookshelf'
                                    height={500}
                                    width={700}
                                />
                            </div>
                            <div className={styles.solMWText}>
                                <Image
                                    className={styles.img}
                                    src={'/images/pagepal/addBook.png'}
                                    alt='add book feature'
                                    height={40}
                                    width={350}
                                />
                                <h3 className={styles.solSubHead}>Add Your Books</h3>
                                <p className={styles.p}>Find any book through the integration of Google Books API and add it to your custom bookshelf.</p>
                            </div>
                        </div>
                        <div className={styles.solBottom}>
                            <Link href="">
                                <button className={styles.solButton}>View Project Live</button>
                            </Link>
                            <Link href="">
                                <button className={styles.solButton}>View Code</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.otherProjects}>
                <OtherProjects
                        link1='/caseStudy'
                        title1='Innersight'
                        imageURL1='/images/innersight/logoOnP.png'
                        link2='/projectFour'
                        title2='Nimbus'
                        imageURL2=''
                        link3='/projectOne'
                        title3='Borderless'
                        imageURL3='/images/borderless/logo.png'
                        link4='/projectTwo'
                        title4='i18n Showcase'
                        imageURL4='/images/i18n/BCITNav.png'
                    />
                </div>
                <div id="contactSection" className={styles.contactSection}>
                    <Contact />
                </div>
            </main>
        </>
    )
}