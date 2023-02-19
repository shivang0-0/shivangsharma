import fs from "fs";
import path from "path";
import matter, { language } from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "../../styles/Post.module.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

interface IProps {
  frontMatter: {
    title: string;
    cover_image: string;
    sample_body: string;
  };
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Post = ({ frontMatter, mdxSource }: IProps) => {
  const components = {
    code: function code({ className, ...props }) {
      return (
        <Highlight
          {...defaultProps}
          code={props.children}
          language={`${className.split("-")[1]}` as any}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <span key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              ))}
            </pre>
          )}
        </Highlight>
      );
    },
  };

  return (
    <div className={styles.post__container}>
      <img
        src={frontMatter.cover_image}
        alt={frontMatter.title}
        className="rounded-md mt-8"
      />
      <h1 className="text-4xl text-white font-bold mt-6 mb-12">
        {frontMatter.title}
      </h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("pages/posts"));

  //Generate path for each MDX files
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs.readFileSync(
    path.join("pages/posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdown);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
}
