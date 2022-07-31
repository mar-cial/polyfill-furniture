import Link from 'next/link';

interface PageHeader {}

const PageHeader = () => {
  return (
    <header className="relative z-50 grid grid-cols-3 py-4 text-center ">
      <div></div>
      <div>
        <Link href={'/'} passHref>
          <a className="text-xl font-bold text-white font-display">
            Polyfill Furniture
          </a>
        </Link>
      </div>
      <div className='flex justify-end pr-12 '>
      <button className='font-display'>Connect to MetaMask</button> 
      </div>
    </header>
  );
};

export default PageHeader;
