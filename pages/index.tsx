import Head from 'next/head';
import NavBar from '../components/navbar';
import CopyFooter from '../components/Footer';
import styles from '../styles/basicroutes_styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="My Blog App." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar></NavBar>
        <div className={styles.home_main}>
          <div className={styles.home_title}>
            <h1 className={styles.home_title_text}>
              World&apos;s #1 Blogging site built for the people.
            </h1>
          </div>

          <div className={styles.home_body}>
            <p className={styles.home_body_text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste hic
              praesentium modi quisquam dignissimos, culpa voluptate alias ipsa
              quia eos voluptatum architecto ad laborum saepe cumque. Sed
              voluptates amet natus praesentium architecto dignissimos? Dolorem
              saepe temporibus ratione veniam consectetur, dicta voluptatem,
              voluptas perspiciatis modi doloremque quo repellat inventore
              maiores sint.
            </p>
          </div>
          <div className={styles.home_body1}>
            <p className={styles.home_body_text1}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste hic
              praesentium modi quisquam dignissimos, culpa voluptate alias ipsa
              quia eos voluptatum architecto ad laborum saepe cumque. Sed
              voluptates amet natus praesentium architecto dignissimos? Dolorem
              saepe temporibus ratione veniam consectetur, dicta voluptatem,
              voluptas perspiciatis modi doloremque quo repellat inventore
              maiores sint.
            </p>
          </div>
          <div className={styles.home_body}>
            <p className={styles.home_body_text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste hic
              praesentium modi quisquam dignissimos, culpa voluptate alias ipsa
              quia eos voluptatum architecto ad laborum saepe cumque. Sed
              voluptates amet natus praesentium architecto dignissimos? Dolorem
              saepe temporibus ratione veniam consectetur, dicta voluptatem,
              voluptas perspiciatis modi doloremque quo repellat inventore
              maiores sint.
            </p>
          </div>
          <div className={styles.home_body1}>
            <p className={styles.home_body_text1}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste hic
              praesentium modi quisquam dignissimos, culpa voluptate alias ipsa
              quia eos voluptatum architecto ad laborum saepe cumque. Sed
              voluptates amet natus praesentium architecto dignissimos? Dolorem
              saepe temporibus ratione veniam consectetur, dicta voluptatem,
              voluptas perspiciatis modi doloremque quo repellat inventore
              maiores sint.
            </p>
          </div>
        </div>
        <CopyFooter></CopyFooter>
      </main>
    </div>
  );
}
