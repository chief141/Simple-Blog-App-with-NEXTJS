import Link from 'next/link';
import { FC } from 'react';
import styles from '../../styles/blogroutes_styles/blogs.module.css';

const NoBlogsFound: FC = () => {
  return (
    <div className={styles.no_blogs_found_main}>
      <p className={styles.no_blogs_found_text}>No blogs found.</p>
      <Link href={'/blogs/create'}>
        <button className={styles.no_blogs_found_btn}>Create Blog!</button>
      </Link>
    </div>
  );
};

export default NoBlogsFound;
