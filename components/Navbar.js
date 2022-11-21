import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import useTranslation from 'next-translate/useTranslation'

const Navbar = () => {
    const[navOpen,setNavOpen]=useState(false)


    const {t}=useTranslation('common')
    const router = useRouter()



  return (
    <div className={`text-white relative top-0 ${navOpen && 'h-[100vh]'}`}>
        <div className='header'></div>
        <nav className='max-w-[1440px] w-[90%] mx-auto md:flex justify-between py-7 items-center font-[600]'>
            <div className='relative'>
                <img
                src='/icons/Logo.svg'
                alt="Texkoop Logo"
                width="150"
                height="150"
                layout="responsive"
                className=''
                />
            </div>

             {/* desktop menu  */}
            <div className='md:flex gap-10 hidden '>
                <Link href="#"><p>{t('Nav1')}</p></Link>
                <Link href="#"><p>{t('Nav2')}</p></Link>
                <Link href="#"><p>{t('Nav3')}</p></Link>
                <Link href="#"><p>{t('Nav4')}</p></Link>
            </div>
            <div className='md:flex gap-10 hidden'>
                <button className='flex gap-2 items-center bg-sec px-3 text-pri'>
                {t('Nav5')}
                    <BsArrowRight/>
                </button>

                <div>
                    <ul>
                        <Link href={`${router.asPath}`} locale='en-US' className='flex gap-2 items-center'>
                        <div>
                        <img
                            src='/icons/gb.svg'
                            alt="English"
                            className='w-[15px]'
                            />
                        </div>
                        En
                        </Link>

                        <Link href={router.asPath} locale='fr' className='flex gap-2 items-center'>
                        <div>
                        <img
                            src='/icons/fr.svg'
                            alt="french"
                            className='w-[15px]'
                            />
                        </div>
                            <p>Fr</p> 
                        </Link>
                    </ul>
                </div>
            </div>

            {/* desktop menu  */}

            <div className={`block md:hidden`} >
                <div className="hamburger" onClick={()=>setNavOpen(!navOpen)}><div className="bar"></div></div> 
            </div>
        </nav>
           {/* mobile menu  */}
           {navOpen &&
            <div className='grid place-content-center gap-10'>
            <div className='grid g'>
                <Link href="#"><p>The Company</p></Link>
                <Link href="#"><p>Services</p></Link>
                <Link href="#"><p>Contact Us</p></Link>
                <Link href="#"><p>Blog</p></Link>
            </div>
            <div className='gap-10'>
                <button className='flex gap-2 items-center bg-sec px-3 text-pri'>
                    start with us
                    <BsArrowRight/>
                </button>

                <div>
                    <ul>
                        
                            <li >
                                <Link href={`${router.asPath}`} locale='en-US'>English</Link>
                            </li>
                            <li>
                                <Link href={router.asPath} locale='fr'>French</Link>
                            </li>
                        
                    </ul>
                </div>
                </div>
            </div>
            }
            {/* mobile menu  */}
    </div>
  )
}

export default Navbar