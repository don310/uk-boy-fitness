import React from "react";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Created for Enhancing Gym Performance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/" passHref>
            {/* Add Logo Image */}
            <Image
              src="/logo.png" // Ensure you have a logo image in public/images/logo.png
              alt="UK Boy Fitness Logo"
              width={150}
              height={100}
              className={styles.logo}
            />
          </Link>
        </div>

        <div className={styles.right}>
          <a 
            href="https://www.youtube.com/@ukboyfitness310" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.cta}
          >
            YouTube
          </a>
          <Link href="/" passHref>
            <a className={styles.cta}>Stay Connected</a>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
