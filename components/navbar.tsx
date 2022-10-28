import styles from '../styles/components_styles/navbar.module.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className={styles.navigationBar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="blogs/create">Create Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
