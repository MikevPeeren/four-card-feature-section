import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Four Card Feature Section</title>
        <meta name="description" content="Four Card Feature Section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="min-h-screen w-full flex flex-col justify-center items-center text-center">
          <h1>Reliable, efficient delivery</h1>
          <h2>Powered by Technology</h2>
          <h3 className="w-2/4 mt-6">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </h3>
        </div>

        <div></div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
