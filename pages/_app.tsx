import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="h-screen w-screen bg-[#171717] fixed inset-0 z-[-1]">
        <span className="absolute sm:top-[-45%] sm:right-[-10vw] h-[200px] w-full sm:h-[750px] sm:w-[750px] bg-gradient-to-r from-[#50AEF1] to-[#EE5DB4] filter blur-[100px] opacity-20 sm:opacity-30 rounded-full"></span>
        <span className="absolute bottom-[-2rem] sm:bottom-[-50%] left-[-10vw] h-[200px] w-full sm:h-[750px] sm:w-[750px] bg-gradient-to-r from-[#50AEF1] to-[#EE5DB4] filter blur-[100px] opacity-20 sm:opacity-30 rounded-full"></span>
      </div>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
