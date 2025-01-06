import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <section className='py-16 lg:py-24'>
            <div className='flex flex-col justify-center items-center gap-12'>
                <Image src="/assets/images/404.png" width="592" height="395" alt="page-not-found" />
                <div className="flex flex-col gap-3">
                    <h2 className='section-title text-center font-black capitalize'>
                        Uh-Oh! Looks like you are lost.
                    </h2>
                    <p className='section-exc text-center'>
                        آسفين! الصفحة اللي تبحث عنها غير موجودة بالوقت الحالى
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
                    <Link href="/" className="btn-lg btn-primary">
                        الصفحة الرئيسية
                    </Link>
                    <Link className="btn-lg btn-secondary" href="/support">الدعم الفنى</Link>
                </div>
            </div>

        </section>
    )
}