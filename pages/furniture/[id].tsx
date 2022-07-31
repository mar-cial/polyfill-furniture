import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import furnitureList from 'data/furnitureList';
import { Furniture } from '@interfaces/Furniture';
import PageHeader from '@components/PageHeader';
import Image from 'next/image';

export const getStaticPaths: GetStaticPaths = async () => {
  const fPaths = furnitureList.map((f) => {
    return { params: { id: f.id } };
  });

  return {
    paths: fPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const item: Furniture | undefined = furnitureList.find(
    (x) => x.id == params?.id
  );

  if (typeof item !== undefined) {
    return { props: { furnitureItem: item } };
  }

  return {
    props: {},
  };
};

const FurniturePage: NextPage = ({
  furnitureItem,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let item: Furniture = furnitureItem;
  return (
    <div className="min-h-screen pb-24 text-white bg-black" key={item.name}>
      <PageHeader />

      <section className='flex flex-col items-center gap-12'>
        <div className="w-full p-12 lg:w-5/6">
          <Image
            src={item.image}
            width={1000}
            height={1000}
            layout="responsive"
            alt={item.alt}
          />
        </div>
        <h2 className='text-4xl font-bold font-display'>{item.name}</h2>

        <div className='text-sm text-justify md:w-1/3'>
          <p className='italic font-text text-slate-500'>{`"${item.description}"`}</p>
        </div>

        <div className='flex flex-col items-center'>
          <h4 className='text-xl font-display'>Price</h4>
          <p className='font-text'>{item.price}</p>
        </div>

        <div className='text-center border-2 border-zinc-800'>
          <button className='w-full h-full px-12 py-4 text-center'>Buy</button>
        </div>
      </section>
    </div>
  );
};

export default FurniturePage;
