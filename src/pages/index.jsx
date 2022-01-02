import Head from "next/head";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.js</h1>
      <p>JSONPlaceholder API</p>
    </div>
  );
};

export default Index;
