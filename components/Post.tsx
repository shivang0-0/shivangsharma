import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

interface IProps {
  post: {
    frontMatter: {
      title: string;
      cover_image: string;
      sample_body: string;
    };
    slug: string;
  };
}

const Post = ({ post }: IProps) => {
  return (
    <span className="post my-8 py-8 md:px-4 rounded-2xl lg:flex-row justify-between">
      <div className="cover-image mr-4 rounded-md">
        <img
          src={post.frontMatter.cover_image}
          alt={post.frontMatter.title}
          className="rounded-lg w-full object-cover"
        />
      </div>
      <div>
        <Link href={`/posts/${post.slug}`}>
          <h2 className="mt-4 text-white font-semibold text-xl font-display leading-8 transition-colors hover:text-[#fa78c6] cursor-pointer">
            {post.frontMatter.title}
          </h2>
        </Link>
        <p className="text-[#ccc] mt-4 font-body leading-8">
          {post.frontMatter.sample_body}...
        </p>
        <Link
          href={`/posts/${post.slug}`}
          className="text-white mt-4 inline-block transition-colors hover:text-[#fa78c6] cursor-pointer"
        >
          Read More...
        </Link>
      </div>
    </span>
  );
};

export default Post;

