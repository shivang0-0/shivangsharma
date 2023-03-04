import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

interface IPosts {
  frontMatter: {
    title: string;
    cover_image: string;
    sample_body: string;
  };
  slug: string;
}

interface IProps {
  posts: IPosts[];
}

const Blog = ({ posts }: IProps) => {
  console.log(posts);
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-[80%] md:w-[60%] mt-40 mb-8">
        <h1 className="text-white font-bold text-2xl">All Posts</h1>
        {posts?.map((post, index) => (
          <div key={post.slug}>
            <Post post={post} />
            {index !== posts.length - 1 && <div className="mt-12" />}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  let files = fs.readdirSync("pages/posts");

  // Filter out only mdx files
  files = files.filter((file) => file.split(".")[1] === "mdx");

  const posts = await Promise.all(
    files.map((file) => {
      const mdData = fs.readFileSync(path.join("pages/posts", file), "utf-8");

      const { data: frontMatter } = matter(mdData);

      return {
        frontMatter,
        slug: file.split(".")[0],
      };
    })
  );

  return {
    props: {
      posts,
    },
  };
}
