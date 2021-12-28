import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      {props.isShow ? <h2>{props.doubleCount}</h2> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisPlay}>
        {props.isShow ? "非表示" : "表示"}
      </button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ol>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>

      <Main page="about" />

      <Footer />
    </div>
  );
};

export default About;
