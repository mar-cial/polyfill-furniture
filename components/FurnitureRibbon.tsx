import furnitureList from 'data/furnitureList';
import { motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const FurnitureRibbon = () => {
  return (
    <motion.section
      id="furniture-ribbon"
      className="relative min-h-screen"
    >
      <header className="flex items-center justify-center py-12">
        <motion.h2 className="text-3xl font-display">
          Available NFT furniture
        </motion.h2>
      </header>

      <motion.div className="flex items-center justify-center">
        <div className='grid w-full gap-6 p-6 lg:grid-cols-3'>
        {furnitureList.map((f) => (
          <div className='text-center' key={f.id}>
            <Image src={f.image} alt={f.alt} layout="responsive" width={1000} height={1000}/>
            <div>
              <h3 className='py-4 text-4xl text-semibold font-display'>{f.name}</h3>
             <div className='flex flex-col gap-4'>
             <p className='font-text'>{f.alt}</p>
              <Link href={`/furniture/${f.id.toString()}`} passHref>
                <a className='p-2 border-2 border-white font-text'>Learn more</a>
              </Link>
             </div>
            </div>
          </div>
        ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FurnitureRibbon;
