import { BsChevronDoubleDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PageHeader from '@components/PageHeader';

const Banner = () => {
  const scrollToFurniture = () => {
    const ribbon = document.querySelector('#furniture-ribbon');
    ribbon?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 object-cover w-auto min-h-screen max-w-screen"
      >
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <PageHeader />

      <main className="relative z-50 flex flex-col items-center justify-center h-[80vh] px-6 py-12 text-center ">
        <h2 className="text-7xl text-center font-display sm:w-[30vw] md:w-[40vw]">
          Only the best furniture for your Metaverse property.
        </h2>
      </main>

      <div className="relative z-50 flex justify-center text-3xl">
        <motion.div whileHover={{ y: -4 }} whileTap={{ y: 0 }}>
          <BsChevronDoubleDown onClick={scrollToFurniture} />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
