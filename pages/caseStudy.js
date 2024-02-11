import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/CaseStudy.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import OtherProjects from '@/components/OtherProjects'
import video from '../public/CustomerLandingPageVideo_1.mp4';

export default function CaseStudy() {
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
                            <h1 className={styles.topHeader}>Innersight</h1>
                            <p className={styles.topDates}>September 2023 - Present</p>
                            <h2 className={styles.topSubHeader}>Problem</h2>
                            <p className={styles.p}>Addresses the challenge of analyzing numerous journal entries to find correlations between the users activities and their mental health symptoms. Helping users to actively avoid or increase activities to improve overall well-being.</p>
                            <h3 className={styles.subHeaderTwo}>Summary</h3>
                            <p className={styles.p}>Utilizes AI to find correlations within a user's daily journal entries by analyzing them on a weekly, monthly or yearly basis. The AI identifies the sentiment of a journal entry and whether activities have a positive or negative impact on their emotions allowing the user to determine what is contributing to their symptoms.</p>
                            <h3 className={styles.subHeaderTwo}>Roles</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Project Manager</li>
                                <li className={styles.listItem}>Full-Stack Web Developer</li>
                            </ul>
                        </div>
                        <div className={styles.mainImage}>
                            <div className={styles.imageContent}>
                                <video style={{ width: '100%', height: '100%', borderRadius: 20, boxShadow: '10px 10px 10px var(--green80)' }} autoPlay muted controls>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
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
                                className={styles.imgChal}
                                src={'/images/innersight/challenges.png'}
                                alt='innersight screens'
                                height={450}
                                width={600}
                            />
                        </div>
                        <div className={styles.chalText}>
                            <h3 className={styles.chalSubHead}>Innersight App Development</h3>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}><p className={styles.bold}>Balancing Simplicity and Functionality: </p>Creating an app that is both inviting for the users while also containing helpful features without causing overwhelm for the user.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>Journal Management: </p>Implementing the ability for users to seamlessly access, create, edit or delete journals and their entries while also maintaining a user-friendly interface.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>Sentiment Analysis: </p>Developing accurate and reliable sentiment analysis algorithms that enables the app to analyze journal enries for positive and negative tones.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>Emotional Data Compilation: </p>Develop a system that aggregates and presents the users' overall emotions on a weekly, monthly, and yearly basis.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>Maintaining Privacy and Security: </p>Ensuring the safety and confidentiality of user data, especially sensitive emotional content.</li>
                                <li className={styles.listItemS}><p className={styles.bold}>User Interface Design: </p>Designing a visually appealing and intuitive user interface that does not overwhelm the user.</li>
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
                            <p className={styles.pSpaceAdded}>The initial stages of Innersight included a heavy focus on both competitive and user research. Competitive analysis and user surveys were conducted to determine unmet needs in the target audience.</p>
                            <div className={styles.indent}>
                                <h4 className={styles.resSubHeadTwo}>Findings</h4>
                                <p className={styles.pSpaceAdded}>After completing a survey, the data from 23 respondants was collected and analyzed to gain valuable insights into both positive and negative experiences of journaling. The following points were highlighted through survey results as neccessary for Innersight's success.</p>
                                <ul className={styles.listS}>
                                    <li className={styles.listItemS}>A privacy policy to build trust between the app and users.</li>
                                    <li className={styles.listItemS}>Statistics and progress reports to identify key correlations between their emotions and behaviours.</li>
                                    <li className={styles.listItemS}>Prompts to make writting entries less overwhelming for the user.</li>
                                    <li className={styles.listItemS}>Resources to learn how to manage their symptoms.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.resImage}>
                            <Image
                                className={styles.paddingRight}
                                src={'/images/innersight/customer.png'}
                                alt='customer landing page'
                                height={200}
                                width={360}
                            />
                            <Image
                                className={styles.resImages}
                                src={'/images/innersight/marketing.png'}
                                alt='marketing landing page'
                                height={220}
                                width={370}
                            />
                            <Image
                                className={styles.paddingRight}
                                src={'/images/innersight/invest.png'}
                                alt='investor landing page'
                                height={210}
                                width={370}
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
                            className={styles.imgPers}
                            src={'/images/innersight/personas.png'}
                            alt='user personas'
                            height={800}
                            width={1100}
                        />
                    </div>
                </div>
                {/* Mapping */}
                <div className={styles.mapping}>
                    <div className={styles.alignText}>
                        <h3 className={styles.mapHeader}>Project Journey Map</h3>
                    </div>
                    <div className={styles.mapSection}>
                        <div className={styles.mapText}>
                            <h3 className={styles.mapSubHead}>User Flow</h3>
                            <p className={styles.pSpaceAdded}>Before starting the initial design, the team put together a User Journey Map to ensure the user would be able to access key features in an intuitive and user friendly way. Key parts of this flow include:</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}>The <span className={styles.bold}>Home</span> screen with a prompt to write a journal entry and have a quick view of statistics.</li>
                                <li className={styles.listItemS}>A <span className={styles.bold}>New Entry</span> screen where the user can view a prompt as well as write their entry and analyze it.</li>
                                <li className={styles.listItemS}>A <span className={styles.bold}>Statistics and Recomendations</span> screen where the user can view insights and advice.</li>
                                <li className={styles.listItemS}>A <span className={styles.bold}>Journal/Entries</span> screen where the user can see their journals and the entries within.</li>
                            </ul>
                        </div>
                        <div className={styles.mapImage}>
                            <Image
                                className={styles.imgPers}
                                src={'/images/innersight/flow.png'}
                                alt='user flow'
                                height={710}
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
                                className={styles.imgPers}
                                src={'/images/innersight/logoV1.png'}
                                alt='original logo'
                                height={190}
                                width={400}
                            />
                            <p className={styles.pSpaceAdded}>The intial logo design and colors were meant to capture the inward reflection required to journal and manage mental health symptoms.</p>
                            <h5 className={styles.logoSubHead}>Color Scheme Added</h5>
                            <Image
                                className={styles.imgPers}
                                src={'/images/innersight/logoWC.png'}
                                alt='original logo with color'
                                height={190}
                                width={400}
                            />
                        </div>
                        <div className={styles.logoRight}>
                            <h5 className={styles.logoSubHead}>Redesign</h5>
                            <div className={styles.imgResponsive}>
                            <Image
                                className={styles.imgPers}
                                src={'/images/innersight/logoOnP.png'}
                                alt='final logo'
                                height={360}
                                width={600}
                            />
                            </div>
                            <p className={styles.pSpaceAdded}>The redesign focused on taking the same line and blob style but applyign it in a more uplifting way to reflect the positive results Innersight can bring to users.</p>
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
                            <h5 className={styles.colorSubHead}>Monochromatic Purple</h5>
                            <p className={styles.pSpaceAdded}>The monochromatic purple color palette was designed in reducing feelings of anxiety or the need to rush through the process of writting an entry. Purple was choosen as the primary color as it has a calming effect that helps users not feel overwhelmed when interacting with the app.</p>
                        </div>
                        <div className={styles.colorRight}>
                            <div className={styles.squaresTop}>
                                <div className={styles.square}>
                                    <div className={styles.color1}></div>
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Savoy Blue</p>
                                        <p className={styles.p}>#6164C3</p>
                                        <p className={styles.p}>rgb(97, 100, 195)</p>
                                    </div>
                                </div>
                                <div className={styles.square}>
                                    <div className={styles.color2}></div>
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Midnight Blue</p>
                                        <p className={styles.p}>#2D3180</p>
                                        <p className={styles.p}>rgb(45, 49, 128)</p>
                                    </div>
                                </div>
                                <div className={styles.square}>
                                    <div className={styles.color3}></div>
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Delft Blue</p>
                                        <p className={styles.p}>#525585</p>
                                        <p className={styles.p}>rgb(82, 85, 133)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.squaresBottom}>
                                <div className={styles.square}>
                                    <div className={styles.color4}></div>
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Periwinkle</p>
                                        <p className={styles.p}>#C5C7F7</p>
                                        <p className={styles.p}>rgb(197, 199, 247)</p>
                                    </div>
                                </div>
                                <div className={styles.square}>
                                    <div className={styles.color5}></div>
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Tropical Indigo</p>
                                        <p className={styles.p}>#7E82F2</p>
                                        <p className={styles.p}>rgb(126, 130, 242)</p>
                                    </div>
                                </div>
                                <div className={styles.square}>
                                    <div className={styles.color6}></div>
                                    <div className={styles.squareText}>
                                        <p className={styles.p}>Light Lavender</p>
                                        <p className={styles.p}>#F2F2FD</p>
                                        <p className={styles.p}>rgb(242, 242, 253)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.alignText}>
                        <h3 className={styles.mascotHeader}>Mascots</h3>
                    </div>
                    <div className={styles.mascotDesc}>
                        <p className={styles.pHalf}>Users have option to customize their mascot so that they can feel that there is a pesronalized companion that is following and guiding them through their mental health journey.</p>
                    </div>
                    <div className={styles.mascotSection}>
                        <div className={styles.mascotLeft}>
                            <div className={styles.mascot}>
                                <div className={styles.mascotImage}>
                                    <Image
                                        className={styles.img}
                                        src={'/images/innersight/Panda.png'}
                                        alt='panda'
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className={styles.mascotText}>
                                    <h5 className={styles.mascotSubHead}>Panda</h5>
                                    <p className={styles.p}>Represents peace and friendship.</p>
                                </div>
                            </div>
                            <div className={styles.mascot}>
                                <div className={styles.mascotImage}>
                                    <Image
                                        className={styles.img}
                                        src={'/images/innersight/Otter.png'}
                                        alt='Otter'
                                        height={90}
                                        width={100}
                                    />
                                </div>
                                <div className={styles.mascotText}>
                                    <h5 className={styles.mascotSubHead}>Otter</h5>
                                    <p className={styles.p}>Represents kindness and family.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mascotRight}>
                            <div className={styles.mascot}>
                                <div className={styles.mascotImage}>
                                    <Image
                                        className={styles.img}
                                        src={'/images/innersight/Frog.png'}
                                        alt='Frog'
                                        height={83}
                                        width={100}
                                    />
                                </div>
                                <div className={styles.mascotText}>
                                    <h5 className={styles.mascotSubHead}>Frog</h5>
                                    <p className={styles.p}>Represents wisdom and good luck.</p>
                                </div>
                            </div>
                            <div className={styles.mascot}>
                                <div className={styles.mascotImage}>
                                    <Image
                                        className={styles.img}
                                        src={'/images/innersight/Sloth.png'}
                                        alt='Sloth'
                                        height={92}
                                        width={100}
                                    />
                                </div>
                                <div className={styles.mascotText}>
                                    <h5 className={styles.mascotSubHead}>Sloth</h5>
                                    <p className={styles.p}>Represents relaxation and patience.</p>
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
                            <h5 className={styles.sentSubHeadTwo}>Implementation</h5>
                            <p className={styles.pSpaceAdded}>This part of the coding process aimed to understand and analyze the emotional tone conveyed through user-generated journal entries, providing a foundation for other features such as emotion tracking throughout the app.</p>
                            <ul className={styles.listS}>
                                <li className={styles.listItemS}>Using a machine learning model tailored for sentiment analysis, we trained the system to accurately classify each entry's sentiment.</li>
                                <li className={styles.listItemS}>We used text processing to break down the journal entries into meaningful components for the user to see which parts of their entries were positive or negative in tone.</li>
                                <li className={styles.listItemS}>This process set the groundwork for later implementation of personalized recommendations based on the users individual sentiment analysis data.</li>
                            </ul>
                        </div>
                        <div className={styles.sentImage}>
                            <Image
                                className={styles.imgPers}
                                src={'/images/innersight/sent.png'}
                                alt='snetiment analysis'
                                height={560}
                                width={660}
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
                                    className={styles.imgEmo}
                                    src={'/images/innersight/chart.png'}
                                    alt='pie chart'
                                    height={408}
                                    width={300}
                                />
                            </div>
                            <div className={styles.emoText}>
                                <h5 className={styles.emoSubHead}>Pie Chart</h5>
                                <p className={styles.pSpaceAdded}>The pie chart feature aimed to conceptualize the data gathered and present it in an easy to digest and non overwhelming manner.</p>
                                <ul className={styles.listS}>
                                    <li className={styles.listItemS}>Gave users a visual representation of their overal emotions and whether they were mainly positive or negative.</li>
                                    <li className={styles.listItemS}>Categorized emotions as positive or negative and displayed them in a different color on the pie chart.</li>
                                    <li className={styles.listItemS}>Below the pie chart, entries related to the emotions in the chart are displayed for the user to browse.</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{overflow: 'auto', maxHeight: '300px', width: '60vw'}}>
                            <pre className={styles.codeContainer}>
                                <code>
                                    {`
import { useState, useEffect } from 'react';
import globalStyles from '../../styles/global';
import { StyleSheet, View } from 'react-native';
import { VictoryPie, VictoryLabel } from "victory-native";
import { useFonts, Lexend_400Regular } from '@expo-google-fonts/lexend';
import { getJournalEntries } from '../../firebase/firebaseService';
import { statsEmotions } from '../../data/StatsEmotionData';
import { getAuth } from 'firebase/auth';
import { ActivityIndicator } from 'react-native-paper';

const DonutChart = () => {
const positiveColor = "#FFE5A4"
const negativeColor = "#8CACDB"

const [data, setData] = useState([])
const [entries, setEntries] = useState([]);
const [selectedSlice, setSelectedSlice] = useState(null);
const newCategories = [];
const countCategories = {};

const newColors = [];
// const colorIndex = [];
const [finalColors, setFinalColors] = useState([])
const [emotionData, setEmotionData] = useState(statsEmotions.emotions)

const [loading, setLoading] = useState(true)
const auth = getAuth()

//run get data on page load 
useEffect(() => {
    console.log("new log")
    const fetchJournalEntries = async () => {
        try {
            // Use the user's UID when fetching journal entries
            const username = auth.currentUser ? auth.currentUser.uid : null;
            if (username) {
                const journalEntries = await getJournalEntries(username);
                console.log('Journal Entries:', journalEntries);
                setEntries(Object.values(journalEntries));
                processJournalData(Object.values(journalEntries));
                setLoading(false)
                console.log({loading})
            } else {
                console.error('User not authenticated.');
            }
        } catch (error) {
            console.error('Error fetching journal entries:', error);
            setLoading(false)
            console.log({loading})
        }
    };
    fetchJournalEntries();
}, [auth.currentUser]);

const processJournalData = (journalEntries) => {
    console.log("step 1");
    console.log(journalEntries);
    Object.values(journalEntries).forEach((entry) => {
        if (Array.isArray(entry.keywords)) {
            entry.keywords.forEach((keyword) => {
                emotionData && emotionData.map((e, index) => {
                    if (e.emotion === keyword && e.type === "negative") {
                        newCategories.unshift(e.category);
                        newColors.unshift(negativeColor);
                    } else if (e.emotion === keyword && e.type === "positive") {
                        newCategories.push(e.category);
                        newColors.push(positiveColor);
                    }
                });
            });
        }
    });
    console.log(newCategories);
    console.log(newColors);
    console.log("step 2");
    newCategories.forEach((x) => {
        countCategories[x] = (countCategories[x] || 0) + 1;
    });
    const indices = newCategories.map((emotion) => newCategories.indexOf(emotion));
    const output = new Set(indices);
    const colorIndex = [...output];
    colorIndex.forEach((num) => {
        finalColors.unshift(newColors[num]);
    });
    finalColors.reverse();
    console.log("step 3");
    console.log("step 4");
    const totalCategories = newCategories.length;
    const chartData = Object.entries(countCategories).map(([keyword, count]) => ({
        x: keyword,
        y: Number(((count / totalCategories)).toFixed(2)),
    }));
    setData(chartData);
    console.log("complete");
    };

    const handleSliceClick = (event, props) => {
        setSelectedSlice(selectedSlice === props.index ? null : props.index);
    };

    //Label Font. This is connected to the app.json "font" object.
    const [fontsLoaded] = useFonts({
        Lexend_400Regular,
    });

    return (
        <View style={[styles.container, globalStyles.labelText]}>
            {
                loading === true ?
                    <ActivityIndicator animating={true} color="#7878C1" />
                    :
                    <VictoryPie
                        data={data}
                        colorScale={finalColors}
                        padAngle={1}
                        innerRadius={40}
                        radius={({ index }) => index === selectedSlice ? 170 : 150}
                        width={350}
                        height={369}
                        labelRadius={({ innerRadius }) => innerRadius + 65}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPressIn: handleSliceClick,
                            },
                        }]}
                        labelComponent={<VictoryLabel style={{
                            fontFamily: 'Lexend_400Regular',
                            fontSize: 18,
                            fontWeight: 500
                        }} />}
                    />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 356,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DonutChart;
                                    `}
                                </code>
                            </pre>
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
                            <p className={styles.p}>To solve the problem, Innersight uses AI to analyze the emotional tone of entries, record the data and generate an analysis of the tone of entries for the user.</p>
                        </div>
                        <div className={styles.solMiddle}>
                            <div className={styles.solPadding}>
                                <Image
                                    className={styles.imgPers}
                                    src={'/images/innersight/solScreens.png'}
                                    alt='Tech Screens'
                                    height={450}
                                    width={700}
                                />
                            </div>
                            <div className={styles.solMWText}>
                                <Image
                                    className={styles.imgPers}
                                    src={'/images/innersight/solutionHand.png'}
                                    alt='Hand with screens'
                                    height={361}
                                    width={345}
                                />
                                <h3 className={styles.solSubHead}>Emotional Tracking</h3>
                                <p className={styles.p}>Through the analysis of organic text, Innersight tracks the emotions of users and displays them in a visually pleasing pie chart for them to see the overall condition of their current emotions at a quick glance.</p>
                            </div>
                        </div>
                        <div className={styles.solBottom}>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=ca.innersightapp.app&pcampaignid=web_share" rel="noopener noreferrer">
                                <button className={styles.solButton}>View Project Live</button>
                            </a>
                            <a target="_blank" href="https://github.com/Mariessa-Pinto/innersight" rel="noopener noreferrer">
                                <button className={styles.solButton}>View Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Other Projects */}
                <div className={styles.otherProjects}>
                    <OtherProjects
                        link1='/projectFour'
                        title1='Nimbus'
                        imageURL1='/images/nimbus/logo.png'
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
                {/* Contact */}
                <div id="contactSection" className={styles.contactSection}>
                    <Contact />
                </div>
            </main>
        </>
    )
}