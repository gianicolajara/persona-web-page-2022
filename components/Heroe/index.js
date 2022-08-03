import HeroeImage from "./HeroeImage";
import HeroeInformation from "./HeroeInformation";

const Heroe = () => {
  return (
    <section className="w-full h-full min-h-[calc(100vh-65px)] grid lg:grid-cols-[1fr,_2fr] lg:grid-rows-1 grid-row-1 grid-cols-1 dark:bg-dark-hard bg-gray-100">
      <HeroeInformation />
      <HeroeImage />
    </section>
  );
};

export default Heroe;
