import styles from "../styles/card.module.scss";

import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          height="200"
          width="350"
          src="https://placehold.co/350x200/png"
          alt="cover art"
        />
      </div>
      <div className={styles.header}>
        <p>Blog</p>
      </div>
    </div>
  );
}
