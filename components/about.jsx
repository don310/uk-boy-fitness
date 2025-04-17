import styles from "../styles/Home.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <Image
          width={850}
          height={1500}
          src={"/images/about.png"}
          alt={"About UK_Boy_Fitness"}
        />
      </div>
      <div className={styles.about_info}>
        <span className={styles.sub_title}>💪 About Us 💪</span>
        <h2>We Are Ready to Help You Get in Shape 🏋️‍♂️🔥</h2>
        <div>
          <p>
            Welcome to <strong>UK_Boy_Fitness</strong>! I am Mukul Suyal, and fitness is my passion. 
            From free workout videos to fitness challenges and motivational content, I’m here to 
            help you achieve your fitness goals. 
          </p>
          <p>
            Having cleared multiple physical tests 🏃‍♂️, including Uttarakhand Parivahan, Abkari, and Uttarakhand Scaler, 
            and appeared in the Agniveer recruitment process twice, I’ve gained valuable experience. 
            As a part of the 78 UK BN NCC with B and C certificates, I understand the dedication 
            and discipline required for physical training.
          </p>
          <p>
            Strength does not come from physical capacity alone; it comes from an indomitable will.
            Let’s achieve your fitness goals together! 
          </p>
        </div>
        <button className={styles.button}> Learn More </button>
      </div>
    </section>
  );
};

export default About;
