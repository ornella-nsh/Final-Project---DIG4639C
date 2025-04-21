import styles from "./Home.module.css";
import FadeInWrapper from "../components/FadeInWrapper";

export default function Home() {
  return (
    <FadeInWrapper>
      <section className={styles.home}>
        <h1>Hi there, my name is Ornella!</h1>
        <p>Welcome to my portfolio.</p>
        <img
          src="/assets/homepageimage.jpg"
          alt="... description ..."
          className={styles.homeImage}
        />
      </section>
    </FadeInWrapper>
  );
}
