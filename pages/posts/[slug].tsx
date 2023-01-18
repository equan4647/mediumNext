import { GetStaticProps } from "next";
import { resourceUsage } from "process";
import React from "react";
import { Post } from "../../common.types";
import Header from "../../components/Header";
import { BASEURL } from "../../consts";

type Props = {
  post: Post;
};

export default function PostPage({post}: Props) {
  console.log("post", post);
  return (
    <div>
      <Header />
      {post.title}
      <img src={post.thumbnail} alt="" />
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${BASEURL}/buildPages`);
  const data: [Post] = await res.json();

  if (data) {
    const paths = data.map((post: Post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    });

    return {
      paths,
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${BASEURL}/posts/${params?.slug}`);
  const post = await res.json();
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
};
