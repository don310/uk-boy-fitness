import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>UK Boy Fitness</div>
      <nav className={styles.navbar}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/services'>Services</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default header;