import Head from "next/head";
import About from "../components/About";
import Heroe from "../components/Heroe";
import Projects from "../components/Projects";
import Works from "../components/Works";

const Home = () => {
  return (
    <>
      <Head>
        <title>Gianicola Jara Web</title>
      </Head>
      <Heroe />
      <About />
      <Works />
      <Projects />
    </>
  );
};

export default Home;
