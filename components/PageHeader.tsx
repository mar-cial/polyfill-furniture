import Link from 'next/link';

const PageHeader = () => {
  return (
    <header className="relative z-50 grid w-full grid-cols-3 px-2 py-4 text-center md:px-4">
      <div></div>
      <div>
        <Link href={'/'} passHref>
          <a className="text-xl font-bold text-white font-display">
            Polyfill Furniture
          </a>
        </Link>
      </div>
      <div className="flex justify-end">
        <button className="font-display">Connect to MetaMask</button>
      </div>
    </header>
  );
};

export default PageHeader;
