import type { NextPage } from "next";
import Head from "next/head";

import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Four Card Feature Section</title>
        <meta name="description" content="Four Card Feature Section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-full flex flex-col justify-center items-center text-center">
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <h3 className="w-2/4 mt-6">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </h3>

        <div className="flex flex-col  md:flex-row justify-center items-center m-10 gap-4">
          <div className="flex justify-center items-center">
            <Card
              title="Supervisor"
              content="Monitors activity to identify project roadblocks"
              icon=""
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <Card
              title="Team Builder"
              content="Scans our talent network to create the optimal team for your project"
              icon=""
            />

            <Card
              title="Karma"
              content="Regularly evaluates our talent to ensure quality"
              icon=""
            />
          </div>
          <div className="flex justify-center items-center">
            <Card
              title="Calculator"
              content="Uses data from past projects to provide better delivery estimates"
              icon=""
            />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
