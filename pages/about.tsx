import Head from 'next/head';
import NavBar from '../components/navbar';
import CopyFooter from '../components/Footer';
import styles from '../styles/basicroutes_styles/about.module.css';

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Blogs | About</title>
        <meta name="description" content="My Blog App." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
      <NavBar></NavBar>
      <div className={styles.about_main}>
        <h2 className={styles.about_us_title}>About us?</h2>
        <div className={styles.about_content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae magni
          at sint quasi ipsam ullam nostrum voluptatum. Adipisci alias beatae
          eius non praesentium voluptas odit ipsam quos officia, id nulla rem!
          Quae nulla molestias atque deserunt, fugit illo facere hic ipsam quis
          adipisci eaque consectetur iusto ducimus reprehenderit natus
          perspiciatis in dolore aliquid? Suscipit repudiandae numquam
          praesentium voluptate fuga, ab officiis? Exercitationem iure ullam
          quia magni veniam aliquid voluptate!
        </div>

        <div className={styles.about_metrics1}></div>
      </div>
      <CopyFooter></CopyFooter>
    </div>
  );
};

export default AboutUs;
