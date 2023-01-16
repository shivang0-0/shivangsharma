import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&family=Source+Code+Pro:ital@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-screen w-screen bg-[#171717] fixed inset-0 z-[-1]">
        <span className="absolute top-0 md:top-[-45%] md:right-[-10vw] h-[200px] w-full md:h-[750px] md:w-[750px] bg-gradient-to-r from-[#50AEF1] to-[#EE5DB4] filter blur-[100px] opacity-20 md:opacity-30 rounded-full"></span>
        <span className="absolute bottom-[-2rem] md:bottom-[-50%] left-[-10vw] h-[200px] w-full md:h-[750px] md:w-[750px] bg-gradient-to-r from-[#50AEF1] to-[#EE5DB4] filter blur-[100px] opacity-20 md:opacity-30 rounded-full"></span>
      </div>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
