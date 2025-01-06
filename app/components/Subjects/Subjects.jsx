"use client"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export default function Subjects() {
    return <section className='bg-white py-20' id='subjects'>
        <div className="container flex flex-col gap-12">

            <header className='flex flex-col gap-3'>
                <h2 className="section-title text-center">
                    المواد العلمية
                </h2>
                <p className="section-exc text-center">
                    أختر المادة العلمية المهتم بها ليظهر لك المدرسيين المتخصصين لهذه المادة.
                </p>
            </header>

            <Swiper
                className='w-full'
                loop={true}
                spaceBetween={36}
                slidesPerView={2.5}
                navigation={{ nextEl: '.sub-next-btn', prevEl: '.sub-prev-btn' }}
                breakpoints={{
                    420: { slidesPerView: 2.5 }, // mobile
                    768: { slidesPerView: 4 }, // tablet
                    1024: { slidesPerView: 7 }, // desktop
                }}
                modules={[Navigation]}
            >
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#B9C0D4]"></div>
                    <Link href='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        اللغة العربية
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#9481AB] "></div>
                    <Link href='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        اللغة الأنجليزية
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#3A3454]">
                        <Image src='/assets/images/cat-3.svg' width='64' height='64' alt="" />
                    </div>
                    <Link href='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الرياضيات
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#BEA6DB]">
                        <Image src='/assets/images/cat-4.svg' width='64' height='64' alt="" />
                    </div>
                    <Link href='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الكيمياء
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#D5F379] ">
                        <Image src='/assets/images/cat-5.svg' width='64' height='64' alt="" />
                    </div>
                    <Link href='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الفيزياء
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#EADDF9]">
                        <Image src='/assets/images/cat-6.svg' width='64' height='64' alt="" />
                    </div>
                    <Link href='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الأحياء
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#5D6B98]">
                        <Image src='/assets/images/cat-7.svg' width='64' height='64' alt="" />
                    </div>
                    <Link href='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الجغرافيا
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#5D6B98]"></div>
                    <Link href='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الفلسفة
                    </Link>
                </SwiperSlide>
            </Swiper>

            <div className="flex justify-center items-center">
                <div className="flex items-center gap-5">
                    <button className='btn-gray-secondary btn-md sub-prev-btn px-3'>
                        <Image src='/assets/images/right-arrow.svg' alt="prev" className='ltr:rotate-180' width='20' height='20' />
                    </button>
                    <button className='btn-gray-secondary btn-md sub-next-btn px-3'>
                        <Image src='/assets/images/left-arrow.svg' alt="next" className='ltr:rotate-180' width='20' height='20' />
                    </button>
                </div>
            </div>

        </div>
    </section>;
}
