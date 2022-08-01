import { NextPage } from 'next'
import Link from 'next/link'

const NotFound: NextPage = () => {
  return (
    <div className={'flex h-screen justify-center items-center p-12 flex-col gap-6 bg-black text-white text-center'}>
      <h1 className="text-5xl font-display">NOT FOUND!</h1>
      <Link href={'/'} passHref>
        <a className='px-3 py-1 border font-text border-zinc-800'>Go back</a>
      </Link>
    </div>
  )
}

export default NotFound
