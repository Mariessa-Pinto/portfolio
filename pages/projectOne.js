import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/ProjectOne.module.css'
import Link from 'next/link'
import OtherProjects from '@/components/OtherProjects'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export default function ProjectOne() {
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
                            <h1 className={styles.topHeader}>Borderless</h1>
                            <p className={styles.topDates}>January - May 2023</p>
                            <h2 className={styles.topSubHeader}>Problem</h2>
                            <p className={styles.p}>New immigrants to Canada often struggle with diaspora and finding their own community. On top of these struggles, they may lack access to basic needs such as clothing, food or shelter. The design of Borderless must be welcoming to these communities and help the individual feel at home in their new life.</p>
                            <h3 className={styles.subHeaderTwo}>Summary</h3>
                            <p className={styles.p}>A web app designed for refugees settling in Canada. The premise of the app allows curated content for users depending on their responses to a “Getting to Know You” quiz. The curated content includes suggestions for activities in their area, local resources such as clothing, food, shelter or communities, weather from their home region as well as stories of hope and help from their region of origin.</p>
                            <h3 className={styles.subHeaderTwo}>Roles</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>UX/UI Designer</li>
                                <li className={styles.listItem}>Front-End Web Developer</li>
                            </ul>
                        </div>
                        <div className={styles.mainImage}>
                            <Image
                                className={styles.img}
                                src={"/images/borderless/screens.png"}
                                alt=''
                                width={500}
                                height={577}
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
                                src={'/images/borderless/testing.png'}
                                alt='user testing results'
                                height={577}
                                width={700}
                            />
                        </div>
                        <div className={styles.chalText}>
                            <h3 className={styles.chalSubHead}>Design to Empower New Beginnigns</h3>
                            <p className={styles.pSpaceAddedd}>The biggest design challenge of Borderless was creating a user friendly webapp that enables users who are in vulnerable senarios find appropriate support. Important considerations include:</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}><p className={styles.bold}>Cultural Intgration: </p>Include a feature to connect users to local communities to reduce feelings of diaspora.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>Basic Needs Accessibility: </p>Incorporate a resource section that connects users to basic needs such as clothing, food, shelters and community centers.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>Emotional Support: </p>Integrate a support system that displays positive stories from others who have successfully transitioned to life in Canada to support emotional challenges.</li>
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
                            <p className={styles.p}>In order to deliver the right information to each user, Borderless uses a "Getting to know you" quiz to curate content based on the users responses.</p>
                        </div>
                        <div className={styles.solMiddle}>
                            <div className={styles.solPadding}>
                                <Image
                                    className={styles.img}
                                    src={'/images/borderless/solution.png'}
                                    alt='solution screens'
                                    height={500}
                                    width={700}
                                />
                            </div>
                            <div className={styles.solMWText}>
                                <Image
                                    className={styles.img}
                                    src={'/images/borderless/quiz.png'}
                                    alt='a quiz screen'
                                    height={250}
                                    width={200}
                                />
                                <h3 className={styles.solSubHead}>User-Friendly Interface</h3>
                                <p className={styles.p}>The priority in the design was maintaining a clean interface that is easy to navigate allowing for accessibility to users of all levels of familiarity with technology.</p>
                            </div>
                        </div>
                        <div className={styles.solBottom}>
                            <a target="_blank" href="https://mdia2109-big-project.vercel.app/" rel="noopener noreferrer">
                                <button className={styles.solButton}>View Project Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/Mariessa-Pinto/mdia2109-big-project" rel="noopener noreferrer">
                                <button className={styles.solButton}>View Code</button>
                            </a>
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
                        imageURL2='/images/nimbus/logo.png'
                        link3='/projectThree'
                        title3='PagePal'
                        imageURL3='/images/pagepal/logo.png'
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