import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/ProjectFour.module.css'
import Link from 'next/link'
import OtherProjects from '@/components/OtherProjects'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export default function ProjectFour() {
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
                            <h1 className={styles.topHeader}>Nimbus</h1>
                            <p className={styles.topDates}>February 2024</p>
                            <h2 className={styles.topSubHeader}>Problem</h2>
                            <p className={styles.p}>Users would like a simple interface to search for the weather based on the city they input into a search bar. Users are looking for the current weather and a five day forecast that shows every three hours.</p>
                            <h3 className={styles.subHeaderTwo}>Summary</h3>
                            <p className={styles.p}>A web app that uses OpenWeather API to fetch the weather data from a city that is entered in the search bar. This project incorporates Typescript and Tailwind CSS.</p>
                            <h3 className={styles.subHeaderTwo}>Role</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Full-Stack Web Developer</li>
                                <li className={styles.listItem}>UX/UI Designer</li>
                            </ul>
                        </div>
                        <div className={styles.mainImage}>
                            <Image
                                className={styles.img}
                                src={"/images/nimbus/nimbus.png"}
                                alt='nimbus mockup'
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
                                src={'/images/nimbus/forecast.png'}
                                alt='forecast'
                                height={500}
                                width={700}
                            />
                        </div>
                        <div className={styles.chalText}>
                            <h3 className={styles.chalSubHead}>Getting and Displaying the Data</h3>
                            <p className={styles.pSpaceAddedd}>The biggest challenges presented by the devlopment of Nimbus are the following:</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}><p className={styles.bold}>External API Intgration: </p>Integrating the OpenWeather API to fetch the weather data after the user inputs a location.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>User Input Validation: </p>Validating the name of the city that the user inputs in the search bar to ensure it matches a valid city name.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>Data Presentation: </p>Displaying the weather in a visually appealing and intuitive manner that allows for easy parsing for the user.</li>
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
                            <p className={styles.p}>A web app that allows the user to search a city name to display the current weather in that location as well as a five day forecast of every three hours.</p>
                        </div>
                        <div className={styles.solMiddle}>
                            <div className={styles.solPadding}>
                                <Image
                                    className={styles.img}
                                    src={'/images/nimbus/weather.png'}
                                    alt='weather'
                                    height={500}
                                    width={800}
                                />
                            </div>
                            <div className={styles.solMWText}>
                                <Image
                                    className={styles.img}
                                    src={'/images/nimbus/name.png'}
                                    alt='city name validation'
                                    height={320}
                                    width={350}
                                />
                                <h3 className={styles.solSubHead}>Input Validation</h3>
                                <p className={styles.p}>The input is set up to validate whether the city the user is searching for is a valid city name.</p>
                            </div>
                        </div>
                        <div className={styles.solBottom}>
                            <a target="_blank" href="https://weather-app-2024.vercel.app/" rel="noopener noreferrer">
                                <button className={styles.solButton}>View Project Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/Mariessa-Pinto/weather-app-2024" rel="noopener noreferrer">
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
                        link2='/projectOne'
                        title2='Borderless'
                        imageURL2='/images/borderless/logo.png'
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