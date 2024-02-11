import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import Contact from '@/components/Contact'


export default function Home() {
  const scrollToWebDevelopment = () => {
    const webDevelopmentSection = document.getElementById('webDevelopmentSection');

    if (webDevelopmentSection) {
      window.scrollTo({
        top: webDevelopmentSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <Head>
        <title>Mariessa Pinto Portfolio</title>
        <meta name="description" content="Mariessa Pinto - Full-stack Web Developer | View Projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <main className={styles.main}>
        <div className={styles.introSection}>
          <Navbar />
          <div className={styles.topContent}>
            <div className={styles.mainText}>
              <h1 className={styles.title}>Hi, I'm Mariessa.</h1>
              <p className={styles.shortDes}>a passionate <span className={styles.lightItalic}>web developer</span> and <span className={styles.lightItalic}>project manager</span> who loves learning new things.</p>
              <p className={styles.smallDes}>works to find <span className={styles.lightItalic}>new challenges</span>, adopt <span className={styles.lightItalic}>new perspectives</span>, and realize <span className={styles.lightItalic}>new solutions</span> to optimize project outcomes.</p>
              <button className={styles.button} onClick={scrollToWebDevelopment}>View Projects</button>
            </div>
            <div className={styles.mainImage}>
              <Image
                className={styles.img}
                src={"/images/home/logoWShadow.png"}
                alt='my world'
                width={532}
                height={582}
              />
            </div>
          </div>
        </div>
        <div id="webDevelopmentSection" className={styles.projects}>
          <div className={styles.alignTitle}>
            <h2 className={styles.subtitle}>Web Development</h2>
          </div>
          <ProjectCard
            title="Innersight"
            subtitle="September 2023 - Present"
            description='Innersight is a journal app that utilizes artificial intelligence to help find problems in your day to day life and give insights on how to covercome these struggles.'
            projectURL='/caseStudy'
            imageSrc='/images/innersight/innersightHome.svg'
            width={450}
            height={400}
          />      
          <ProjectCard
            title="Nimbus"
            subtitle="February 2024"
            description='A web app that uses OpenWeather API to fetch the weather data from a city that is entered in the search bar. This project incorporates Typescript and Tailwind CSS.'
            projectURL='/projectFour'
            imageSrc=''
            width={390}
            height={400}
          />
          <ProjectCard
            title="Borderless"
            subtitle="January - May 2023"
            description='A web app designed for refugees settling in Canada. The premise of the app allows curated content for users depending on their responses to a “Getting to Know You” quiz. The curated content includes suggestions for activities in their area, local resources such as clothing, food, shelter or communities, weather from their home region as well as stories of hope and help from their region of origin.'
            projectURL='/projectOne'
            imageSrc='/images/borderless/borderlessHomeNoHand.png'
            width={390}
            height={400}
          />
          <ProjectCard
            title="i18n Showcase - BCIT English-French"
            subtitle="February - March 2023"
            description='Coded a page from the BCIT website using i18n to provide internationalization through the dynamic translation of the page. It is available in French and in English and can be changed live.'
            projectURL='/projectTwo'
            imageSrc='/images/i18n/oneScreen.png'
            width={500}
            height={390}
          />
          <ProjectCard
            title="Pagepal"
            subtitle="November - December 2023"
            description='A bookshelf management web application using React to allow to user to create, edit and delete bookshelves. Users can then search books from the integrated Google Books API and add them to a shelf.'
            projectURL='/projectThree'
            imageSrc='/images/pagepal/pagepal.png'
            width={500}
            height={390}
          />
        </div>
        <div id="contactSection" className={styles.contactSection}>
          <Contact />
        </div>
      </main>
    </>
  )
}
