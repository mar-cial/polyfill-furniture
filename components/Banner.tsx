import { BsChevronDoubleDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PageHeader from '@components/PageHeader';

const Banner = () => {
  const scrollToFurniture = () => {
    const ribbon = document.querySelector('#furniture-ribbon');
    ribbon?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 object-cover w-full h-full min-h-screen max-w-screen"
      >
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute w-full h-full min-h-screen bg-black opacity-50"></div>
      <main className="absolute z-50 flex flex-col items-center justify-between h-full pb-12 text-center">
        <PageHeader />

        <h2 className="w-full text-6xl md:w-3/4 lg:w-1/2 md:text-7xl font-display md:px-6 lg:px-12">
          Only the best furniture for your Metaverse property.
        </h2>

        <div className="z-50 flex justify-center text-3xl ">
          <motion.div whileHover={{ y: -4 }} whileTap={{ y: 0 }}>
            <BsChevronDoubleDown onClick={scrollToFurniture} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
