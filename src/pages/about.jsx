import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisPlay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      {isShow ? <h2>{doubleCount}</h2> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisPlay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ol>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>

      <Main page="about" />

      <Footer />
    </div>
  );
}
