import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../common.types";
import Banner from "../components/Banner";
import Header from "../components/Header";
import PostComp from "../components/Post";
import { BASEURL } from "../consts";

interface Props {
  data?: any;
}

const Home: NextPage = ({ data }: Props) => {
  return (
    <div className="flex-col justify-between p-5 max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
        {data.map((post: Post) => {
          return (
            <Link key={post._id} href={`/posts/${post.slug}`}>
              <PostComp data={post} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch(`${BASEURL}/posts`);
  const data: { data: [Post] } = await res.json();
  return {
    props: {
      data: data.data || [],
    },
  };
};
