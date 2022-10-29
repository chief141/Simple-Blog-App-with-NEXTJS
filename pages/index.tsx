import Head from 'next/head';
import NavBar from '../components/common/navbar';
import CopyFooter from '../components/common/Footer';
import styles from '../styles/basicroutes_styles/Home.module.css';
import CompHead from '../components/common/CompHead';

export default function Home() {
  return (
    <div>
      <CompHead headTitle="Home"></CompHead>
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
