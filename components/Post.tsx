import React from "react";
import { Post } from "../common.types";

type Props = {
  data: Post;
};

const Post = ({ data }: Props) => {
  const { authDetails, title, thumbnail, body ,subheading } = data;
  return (
    <div className=" border rounded-lg group cursor-pointer overflow-hidden">
      <img
        className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
        src={thumbnail}
        alt=""
      />
      <div className="flex justify-between p-5 bg-white">
        <div className=" p-3">
          <p className=" text-lg font-bold">{title}</p>
          <p className=" text-xs">
            {subheading} by {authDetails.name}
          </p>
        </div>
        <img
          className=" h-12 w-12 rounded-full"
          src={authDetails.avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default Post;
