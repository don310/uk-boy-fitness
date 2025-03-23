import styles from "../styles/Home.module.scss";
import Image from "next/image";
import header from "../components/header";
import footer from "../components/footer";

const About = () => {
  return (
    <>
      <header />
      <section className={styles.about}>
        <div className={styles.image}>
          <Image
            width={600}
            height={640}
            src="/images/about-img.png"
            alt="About Us"
          />
        </div>
        <div className={styles.about_info}>
          <span className={styles.sub_title}>About Us</span>
          <h2>We Are Ready To Make You Fit</h2>
          <div>
            <p>
              Finding motivation to work out can be challenging. There are so many
              distractions and less physically demanding alternatives to spending
              an hour at the gym or working out at home.
            </p>
            <p>
              You need to understand that strength does not come from physical
              capacity. It comes from an indomitable will.
            </p>
          </div>
          <span className={styles.button}>Learn More</span>
        </div>
      </section>
      <footer />
    </>
  );
};

export default About;
