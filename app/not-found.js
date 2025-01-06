import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <h2 className='text-7xl font-bold uppercase text-center'>Not Found</h2>
            <p className='text-2xl text-[#555] capitalize text-center'>Could not find requested resource</p>
            <Link href="/" className='border border-[#ccc] rounded-2xl px-8 py-3.5 text-xl uppercase tracking-widest'>Return Home</Link>
        </div>
    )
}