import Link from 'next/link';

const PageHeader = () => {
  return (
    <header className="relative z-50 flex justify-center w-full grid-cols-3 px-2 py-4 text-center md:px-4">
      <div>
        <Link href={'/'} passHref>
          <a className="text-xl font-bold text-white font-display">
            Polyfill Furniture
          </a>
        </Link>
      </div>
      
    </header>
  );
};

export default PageHeader;
