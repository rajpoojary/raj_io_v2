import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { LinkedInIcon,GithubIcon } from './Icons'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { MoonIcon,SunIcon } from './Icons'

const CustomLink=({href,title,className=''}) => {
    const router=useRouter();
    return(
        <Link href={href} className={`${className} relative group`}> {title} 
        {/* <span className='h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300'>&nbsp;</span> */}
        <span className={`
        h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-light `}
        >&nbsp;</span>
        </Link>
    )
}
const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher()
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
        <nav>
            <CustomLink href="/" title='Home' className='mx-4'/>
            <CustomLink href="/articles" title='Blogs' className='mx-4'/>
            <CustomLink href={"/about"} title='About' className='ml-4'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://www.linkedin.com/in/rajnikant-ambalpady-4089161/" target={'_blank'}  whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'>
                 <LinkedInIcon/>
            </motion.a>
            <motion.a href="https://github.com/rajpoojary" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'>
                 <GithubIcon/>
            </motion.a>
            <button className={`ml-3 flex items-center justify-center rounded-full p-1 
            ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
            
            `}onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
                {
                    mode === 'dark' ?
                     <SunIcon className={'fill-dark'} />
                     : <MoonIcon className={'fill-dark'} />
                }
            </button>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo/></div>
    </header>
  )
}

export default NavBar