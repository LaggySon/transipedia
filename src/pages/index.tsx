import Head from "next/head";
import Link from "next/link";

//Components
import Card from "~/components/card";

import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
}
