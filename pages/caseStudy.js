import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/CaseStudy.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import OtherProjects from '@/components/OtherProjects'

export default function CaseStudy() {
    return (
        <>
            <Head>
                <title>Mariessa Pinto Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.introSection}>
                    <Navbar />
                    <div className={styles.topContent}>
                        <div className={styles.mainText}>
                            <h1 className={styles.topHeader}>Innersight</h1>
                            <p className={styles.topDates}>September 2023 - Present</p>
                            <h2 className={styles.topSubHeader}>Problem</h2>
                            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                            <h3 className={styles.subHeaderTwo}>Summary</h3>
                            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                            <h3 className={styles.subHeaderTwo}>Roles</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Project Manager</li>
                                <li className={styles.listItem}>Full-Stack Web Developer</li>
                            </ul>
                        </div>
                        <div className={styles.mainImage}>
                            <Image
                                src={""}
                                alt=''
                                width={440}
                                height={614}
                            />
                        </div>
                    </div>
                </div>
                {/* Challenges */}
                <div className={styles.challenges}>
                    <div className={styles.alignText}>
                        <h2 className={styles.chalHeader}>Challenges</h2>
                    </div>
                    <div className={styles.chalSection}>
                        <div className={styles.chalImage}>
                            <Image
                                src={''}
                                alt=''
                                height={477}
                                width={440}
                            />
                        </div>
                        <div className={styles.chalText}>
                            <h3 className={styles.chalSubHead}>Subtitle</h3>
                            <p className={styles.pSpaceAddedd}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Research */}
                <div className={styles.research}>
                    <div className={styles.resSection}>
                        <div className={styles.resText}>
                            <h2 className={styles.resSubtitle}>Design Process</h2>
                            <h3 className={styles.resSubHead}>Research</h3>
                            <p className={styles.pSpaceAdded}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                            <div className={styles.indent}>
                                <h4 className={styles.resSubHeadTwo}>Findings</h4>
                                <p className={styles.pSpaceAdded}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                                <ul className={styles.listS}>
                                    <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.resImage}>
                            <Image
                                className={styles.paddingRight}
                                src={''}
                                alt=''
                                height={160}
                                width={348}
                            />
                            <Image
                                src={''}
                                alt=''
                                height={160}
                                width={348}
                            />
                            <Image
                                className={styles.paddingRight}
                                src={''}
                                alt=''
                                height={160}
                                width={348}
                            />
                        </div>
                    </div>
                </div>
                {/* Persona */}
                <div className={styles.persona}>
                    <div className={styles.alignText}>
                        <h2 className={styles.persHeader}>User Persona</h2>
                    </div>
                    <div className={styles.persImage}>
                        <Image
                            src={''}
                            alt=''
                            height={720}
                            width={900}
                        />
                    </div>
                </div>
                {/* Mapping */}
                <div className={styles.mapping}>
                    <div className={styles.alignText}>
                        <h3 className={styles.mapHeader}>Project Mapping/Workflow</h3>
                    </div>
                    <div className={styles.mapSection}>
                        <div className={styles.mapText}>
                            <h3 className={styles.mapSubHead}>Subtitle</h3>
                            <p className={styles.pSpaceAdded}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                        <div className={styles.mapImage}>
                            <Image
                                src={''}
                                alt=''
                                height={660}
                                width={622}
                            />
                        </div>
                    </div>
                </div>
                {/* Logo */}
                <div className={styles.logo}>
                    <div className={styles.alignText}>
                        <h3 className={styles.logoHeader}>Logo</h3>
                    </div>
                    <div className={styles.logoSection}>
                        <div className={styles.logoLeft}>
                            <h5 className={styles.logoSubHead}>Initial Design</h5>
                            <Image
                                src={''}
                                alt=''
                                height={240}
                                width={347}
                            />
                            <p className={styles.pSpaceAdded}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                            <h5 className={styles.logoSubHead}>Color Scheme Added</h5>
                            <Image
                                src={''}
                                alt=''
                                height={240}
                                width={347}
                            />
                        </div>
                        <div className={styles.logoRight}>
                            <h5 className={styles.logoSubHead}>Redesign</h5>
                            <Image
                                src={''}
                                alt=''
                                height={360}
                                width={438}
                            />
                            <p className={styles.pSpaceAdded}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                {/* Colors */}
                <div className={styles.colors}>
                    <div className={styles.alignText}>
                        <h3 className={styles.colorHeader}>Color Scheme</h3>
                    </div>
                    <div className={styles.colorSection}>
                        <div className={styles.colorLeft}>
                            <h5 className={styles.colorSubHead}>Subtitle</h5>
                            <p className={styles.pSpaceAdded}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className={styles.colorRight}>
                            <div className={styles.squaresTop}>
                                <div className={styles.square}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={70}
                                        width={70}
                                    />
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Color</p>
                                        <p className={styles.p}>Hex</p>
                                        <p className={styles.p}>rgb</p>
                                    </div>
                                </div>
                                <div className={styles.square}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={70}
                                        width={70}
                                    />
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Color</p>
                                        <p className={styles.p}>Hex</p>
                                        <p className={styles.p}>rgb</p>
                                    </div>
                                </div>
                                <div className={styles.square}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={70}
                                        width={70}
                                    />
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Color</p>
                                        <p className={styles.p}>Hex</p>
                                        <p className={styles.p}>rgb</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.squaresBottom}>
                                <div className={styles.square}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={70}
                                        width={70}
                                    />
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Color</p>
                                        <p className={styles.p}>Hex</p>
                                        <p className={styles.p}>rgb</p>
                                    </div>
                                </div>
                                <div className={styles.square}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={70}
                                        width={70}
                                    />
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Color</p>
                                        <p className={styles.p}>Hex</p>
                                        <p className={styles.p}>rgb</p>
                                    </div>
                                </div>
                                <div className={styles.square}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={70}
                                        width={70}
                                    />
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Color</p>
                                        <p className={styles.p}>Hex</p>
                                        <p className={styles.p}>rgb</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.alignText}>
                        <h3 className={styles.mascotHeader}>Mascots</h3>
                    </div>
                    <div className={styles.mascotSection}>
                        <div className={styles.mascotLeft}>
                            <div className={styles.mascot}>
                                <div className={styles.mascotImage}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={160}
                                        width={160}
                                    />
                                </div>
                                <div className={styles.mascotText}>
                                    <h5 className={styles.mascotSubHead}>Panda</h5>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className={styles.mascot}>
                                <div className={styles.mascotImage}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={160}
                                        width={160}
                                    />
                                </div>
                                <div className={styles.mascotText}>
                                    <h5 className={styles.mascotSubHead}>Otter</h5>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mascotRight}>
                            <div className={styles.mascot}>
                                <div className={styles.mascotImage}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={160}
                                        width={160}
                                    />
                                </div>
                                <div className={styles.mascotText}>
                                    <h5 className={styles.mascotSubHead}>Frog</h5>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className={styles.mascot}>
                                <div className={styles.mascotImage}>
                                    <Image
                                        src={''}
                                        alt=''
                                        height={160}
                                        width={160}
                                    />
                                </div>
                                <div className={styles.mascotText}>
                                    <h5 className={styles.mascotSubHead}>Sloth</h5>
                                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sentiment */}
                <div className={styles.sentiment}>
                    <div className={styles.alignText}>
                        <h3 className={styles.sentHeader}>Coding Process</h3>
                    </div>
                    <div className={styles.sentSection}>
                        <div className={styles.sentText}>
                            <h4 className={styles.sentSubHead}>Sentiment Analysis</h4>
                            <h5 className={styles.sentSubHeadTwo}>Subtitle</h5>
                            <p className={styles.pSpaceAdded}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                        <div className={styles.sentImage}>
                            <Image
                                src={''}
                                alt=''
                                height={608}
                                width={621}
                            />
                        </div>
                    </div>
                </div>
                {/* Emotions */}
                <div className={styles.emotions}>
                    <div className={styles.alignTextS}>
                        <h4 className={styles.emoHeader}>Tracking Emotions</h4>
                    </div>
                    <div className={styles.emoSection}>
                        <div className={styles.emoTop}>
                            <div className={styles.emoImage}>
                                <Image
                                    src={''}
                                    alt=''
                                    height={408}
                                    width={250}
                                />
                            </div>
                            <div className={styles.emoText}>
                                <h5 className={styles.emoSubHead}>Subtitle</h5>
                                <p className={styles.pSpaceAdded}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                                <ul className={styles.listS}>
                                    <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className={styles.listItemS}>Lorem ipsum dolor sit amet consectetur.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.emoBottom}>
                            <Image
                                src={''}
                                alt=''
                                height={248}
                                width={900}
                            />
                        </div>
                    </div>
                </div>
                {/* Solution */}
                <div className={styles.solution}>
                    <div className={styles.alignText}>
                        <h2 className={styles.solHeader}>Solution</h2>
                    </div>
                    <div className={styles.solSection}>
                        <div className={styles.solTop}>
                            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
                        </div>
                        <div className={styles.solMiddle}>
                            <div className={styles.solPadding}>
                                <Image
                                    src={''}
                                    alt=''
                                    height={361}
                                    width={345}
                                />
                            </div>
                            <Image
                                src={''}
                                alt=''
                                height={361}
                                width={345}
                            />
                            <div className={styles.solMWText}>
                                <Image
                                    src={''}
                                    alt=''
                                    height={361}
                                    width={345}
                                />
                                <h3 className={styles.solSubHead}>Subtitle</h3>
                                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. Scelerisque sit imperdiet elementum sed in sit orci. Scelerisque sit imperdiet elementum sed in sit orci.</p>
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
                {/* Other Projects */}
                <div className={styles.otherProjects}>
                    <OtherProjects
                        link1='/projectOne'
                        title1='Borderless'
                        imageURL1=''
                        link2='/projectThree'
                        title2='PagePal'
                        imageURL2=''
                        link3='/projectTwo'
                        title3='i18n Showcase'
                        imageURL3=''
                    />
                </div>
                {/* Contact */}
                <div id="contactSection" className={styles.contactSection}>
                    <Contact />
                </div>
            </main>
        </>
    )
}