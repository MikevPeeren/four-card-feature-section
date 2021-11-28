import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Four Card Feature Section</title>
        <meta name="description" content="Four Card Feature Section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="min-h-screen w-full flex justify-center items-center">
          <h1>
            Reliable, efficient delivery <strong>Powered by Technology</strong>
          </h1>
          <h2>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </h2>
        </div>

        <div></div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
