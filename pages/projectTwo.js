import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/ProjectTwo.module.css'
import Link from 'next/link'
import OtherProjects from '@/components/OtherProjects'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export default function ProjectTwo() {
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
                            <h1 className={styles.topHeader}>i18n Showcase</h1>
                            <p className={styles.topDates}>February - March 2023</p>
                            <h2 className={styles.topSubHeader}>Problem</h2>
                            <p className={styles.p}>Users wanting to access the British Columbia Institute of Technology Page in various languages were not able to. French is the second language in Canada and therefore the site should be available to French users in their native tongue.</p>
                            <h3 className={styles.subHeaderTwo}>Summary</h3>
                            <p className={styles.p}>Coded the BCIT Digital Design and Development Diploma Graduating and Jobs page using i18n to provide internationalization through the dynamic translation of the page. It is available in French and in English and can be changed live.</p>
                            <h3 className={styles.subHeaderTwo}>Role</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Full-Stack Web Developer</li>
                            </ul>
                        </div>
                        <div className={styles.mainImage}>
                            <Image
                                className={styles.img}
                                src={"/images/i18n/allScreens.png"}
                                alt='bcit screens'
                                width={600}
                                height={450}
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
                                src={'/images/i18n/translate.png'}
                                alt='translation screens'
                                height={500}
                                width={600}
                            />
                        </div>
                        <div className={styles.chalText}>
                            <h3 className={styles.chalSubHead}>A Multilingual Webpage</h3>
                            <p className={styles.pSpaceAddedd}>Translation on its own comes with its own set of challenges including the consistency in the meaning of words when direct translations are not sufficient. Other challenges faced in relation to this project include:</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}>Maintaining a seamless user experience regarless of the language the content is being viewed in.</li>
                                <li className={styles.listItemS}>Insuring the user interface funcitons in all chosen translations as word lengths vary by language.</li>
                                <li className={styles.listItemS}>Ensuring the management and maintenance of keeping the page up to date and new content translated.</li>
                                <li className={styles.listItemS}>Implementation of the i18n can be complex and requires thorough documentation or experience in coding to maintain.</li>
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
                            <p className={styles.p}>Using i18next to internationalize the webpage allows for users who speak French as their first langugae in Canada to access and read the content on the page.</p>
                        </div>
                        <div className={styles.solMiddle}>
                            <div className={styles.solPadding}>
                                <Image
                                    className={styles.img}
                                    src={'/images/i18n/BCITSite.png'}
                                    alt='all screens'
                                    height={500}
                                    width={800}
                                />
                            </div>
                            <div className={styles.solMWText}>
                                <Image
                                    className={styles.img}
                                    src={'/images/i18n/Eng-Fren.png'}
                                    alt='English and French'
                                    height={320}
                                    width={350}
                                />
                                <h3 className={styles.solSubHead}>French and English</h3>
                                <p className={styles.p}>The page is now available in both of Canada's national languages.</p>
                            </div>
                        </div>
                        <div className={styles.solBottom}>
                            <a target="_blank" href="https://mdia2109-class10-change-languages.vercel.app/" rel="noopener noreferrer">
                                <button className={styles.solButton}>View Project Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/Mariessa-Pinto/mdia2109-class10-change-languages" rel="noopener noreferrer">
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
                        link3='/projectOne'
                        title3='Borderless'
                        imageURL3='/images/borderless/logo.png'
                        link4='/projectThree'
                        title4='PagePal'
                        imageURL4='/images/pagepal/logo.png'
                    />
                </div>
                <div id="contactSection" className={styles.contactSection}>
                    <Contact />
                </div>
            </main>
        </>
    )
}