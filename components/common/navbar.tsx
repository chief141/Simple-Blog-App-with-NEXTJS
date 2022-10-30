import styles from '../../styles/components_styles/navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const NavBar: FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.navigationBar}>
      <ul>
        <li>
          <Link
            href="/"
            className={router.asPath === '/' ? styles.navbar_active_page : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className={
              router.asPath === '/blogs' || router.query.blogID !== undefined
                ? styles.navbar_active_page
                : ''
            }
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              router.asPath === '/about' ? styles.navbar_active_page : ''
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blogs/create"
            className={
              router.asPath === '/blogs/create' ? styles.navbar_active_page : ''
            }
          >
            Create Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
