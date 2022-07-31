import { motion } from 'framer-motion';
import { BiLinkExternal } from 'react-icons/bi';
import Card from './Card';

const Footer = () => {
  const tools = [
    {
      id: 1,
      name: 'Next.js',
      link: 'https://nextjs.org/',
    },
    {
      id: 2,
      name: 'Tailwindcss',
      link: 'https://tailwindcss.com/',
    },
    {
      id: 3,
      name: 'Jest',
      link: 'https://jestjs.io/',
    },
    {
      id: 4,
      name: 'Hardhat',
      link: 'https://hardhat.org/',
    },
    {
      id: 5,
      name: 'Ethers.js',
      link: 'https://ethers.org/',
    },
  ];

  return (
    <div className="text-sm bg-zinc-900 min-h-[40vh] p-12 grid md:grid-cols-2 gap-6">
      <div className="grid md:grid-cols-3">
        <div className="flex flex-col items-center lg:items-start">
          <h3 className='text-lg text-zinc-300'>Made with -</h3>
          <ul className="pl-4 list-disc">
            {tools.map((t) => (
              <motion.li key={t.id} whileHover={{ color: 'rgb(161 161 170)' }}>
                <a href={t.link}>{t.name}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className='text-lg text-zinc-300'>Assets credit -</h3>
          <h4>Images</h4>
          <motion.a href="https://twitter.com/reisingerandres?lang=en" whileHover={{color: 'rgb(161 161 170)'}}>
            Reisinger Andres
          </motion.a>
          <h4>Videos</h4>
          <motion.a href="https://www.pexels.com/video/wood-art-wave-curve-8303104/" whileHover={{color: 'rgb(161 161 170)'}}>
            Uzunov Rostislav
          </motion.a>
        </div>

        <div className="flex flex-col">
          <h3 className='text-lg text-zinc-300'>Dev team -</h3>
          <ul>
            <motion.li whileHover={{ color: 'rgb(161 161 170)' }}>
              <a
                href="https://linkedin.com/in/mar-cial"
                className="flex items-center gap-2"
              >
                César Marcial <BiLinkExternal />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>

      <div>
        <Card className='stroke-zinc-800 fill-zinc-800'/>
      </div>
    </div>
  );
};

export default Footer;
