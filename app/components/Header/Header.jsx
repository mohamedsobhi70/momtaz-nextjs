import Link from "next/link";
import Image from 'next/image';
import NavLink from "../NavLink";

const Header = () => {

    return <header className='py-3 z-50 bg-white sticky top-0'>
        <div className="container flex justify-between items-center gap-12">
            <Link href="/" className="shrink-0">
                <Image src='/assets/images/logo.svg' width="97" height="42" alt="Momtaz Logo" />
            </Link>
            <button className="mobile-menu-btn xl:hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9H20" stroke="#090129" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M4 15H20" stroke="#090129" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
                <span className="sr-only">Mobile Menu</span>
            </button>
            <div className={`mobile-menu`}>
                <div className="bg-[#FAF8FE] py-6 px-[30px] xl:p-0 flex justify-start xl:hidden">
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#090129" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#090129" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#090129" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className="sr-only">Close Mobile Menu Icon</span>
                    </button>
                </div>
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 h-full p-4 xl:p-0 shrink">
                    <nav className='flex flex-col xl:flex-row xl:items-center xl:gap-6 h-full overflow-y-auto xl:overflow-visible shrink'>
                        <NavLink label='الرئيسية' href='/' preImg='/assets/images/user.svg' lstImg='/assets/images/chevron-left.svg' />
                        <NavLink label='أستكشف المعلمين' href='/explore-teacher' preImg='/assets/images/user.svg' lstImg='/assets/images/chevron-left.svg' />
                        <NavLink label='من نحن' href='/about' preImg='/assets/images/user.svg' lstImg='/assets/images/chevron-left.svg' />
                        <NavLink label='الدعم الفني' href='/support' preImg='/assets/images/user.svg' lstImg='/assets/images/chevron-left.svg' />
                    </nav>

                    <ul className='flex flex-col xl:flex-row xl:items-center gap-3'>
                        <li>
                            <Link href='/login' className='btn-secondary btn-md'>
                                تسجيل دخول
                            </Link>
                        </li>
                        <li>
                            <Link href='/register' className='btn-gray-secondary btn-md'>
                                حساب جديد ؟
                            </Link>
                        </li>
                        <li>
                            <Link href='/for-teachers' className='btn-link gap-2'>
                                للمعلمين
                                <svg className='ltr:rotate-180' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="transition-all duration-300" d="M7.97508 4.94189L2.91675 10.0002L7.97508 15.0586" stroke="#3A3454" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path className="transition-all duration-300" d="M17.0834 10H3.05835" stroke="#3A3454" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </header>;
};

export default Header;
