import Link from "next/link";

const Post = () => {
  return (
    <span className="post my-8 py-8 px-4 rounded-2xl flex flex-col lg:flex-row justify-between">
      <div className="cover-image mr-4 rounded-md">
        <img 
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--D5OszB4J--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qwcdnzrnp49ydpfx86rn.png" 
            alt=""
            className="rounded-lg w-full"
        />
      </div>
      <div>
        <h2 className="mt-4 text-white font-semibold text-xl">Post One</h2>
        <p className="text-[#ccc] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dso
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link href="/" className="text-white mt-4 inline-block">
          Read More...
        </Link>
      </div>
    </span>
  );
};

export default Post;
