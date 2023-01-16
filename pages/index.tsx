import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

interface Props {
  data? : any;
}

const Home: NextPage = ({ data }: Props) => {
  console.log('data', data)
  return (
    <div className="flex-col justify-between p-5 max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      {/* pposta */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await res.json()
  return {
    props: {
      data
    },
  };
};
