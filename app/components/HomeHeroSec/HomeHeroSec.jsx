import Image from "next/image";

export default function HomeHeroSec() {
    return <section className="min-h-[calc(100vh-66px)] xl:min-h-[calc(100vh-70px)] bg-[#090129] relative flex items-center overflow-hidden">
        <Image src="/assets/images/hero-shape-1.png" width='147' height='146' alt="shape" className='absolute hidden lg:block left-3/4 top-16 opacity-10' />
        <Image src='/assets/images/hero-shape-2.png' width='112' height='112' alt="shape" className='absolute hidden lg:block right-1/4 top-80' />
        <Image src='/assets/images/hero-shape-3.png' width='224' height='222' alt="shape" className='absolute hidden lg:block left-1/4 top-4' />
        <Image src='/assets/images/hero-shape-4.png' width='265' height='304' alt="shape" className='absolute hidden lg:block left-0 xl:left-[10%] top-20' />
        <Image src='/assets/images/hero-shape-5.png' width='134' height='132' alt="shape" className='absolute hidden lg:block left-3/4 bottom-20 opacity-10' />
        <Image src='/assets/images/hero-shape-6.png' width='326' height='41' alt="shape" className='absolute hidden lg:block left-1/2 -translate-x-1/2 bottom-10 opacity-10' />
        <Image src='/assets/images/hero-shape-7.png' width='282' height='281' alt="shape" className='absolute hidden lg:block left-0 xl:left-[10%] bottom-10' />

        <div className="container py-48 relative">
            <div className="lg:w-2/3 mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-center text-white text-4xl lg:text-7xl leading-normal lg:leading-normal font-semibold">
                        أحجز حصة لأولادك مع
                        <span className="text-black relative inline-block py-1 px-2">
                            <span className="bg-[#D5F379] rotate-6 rounded-2xl inline-block size-full absolute inset-1/2 -translate-y-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2"></span>
                            <span className="relative">
                                أفضل
                            </span>
                        </span>
                        المعلمين.
                    </h1>
                    <p className="text-[#7D89B0] text-sm md:text-base lg:text-xl text-center leading-relaxed">
                        لدينا باقة من أفضل المعلمين حول المملكة  لجميع التخصصات ومختلف الأعمار ، إحجز الأن معهم.
                    </p>
                </div>
                <div className={`bg-white rounded-2xl p-2 ps-5 flex items-center gap-3 border border-transparent`}>
                    <Image src="/assets/images/search-lg.svg" width="24" height="24" alt="Search Icon" />
                    <input type="text" className={`bg-transparent grow focus:outline-0 focus:ring-0 border-none text-[#111322] text-sm placeholder:text-[#6b7280]`}
                        name="search-teacher" id="search-teacher"
                        placeholder="أبحث عن أسم المدرس أو التخصص أو المرحلة التعليمية"
                    />
                    <button className="btn-tertiary btn-md px-10">
                        أبحث
                    </button>
                </div>
            </div>
        </div>
    </section>;
}
