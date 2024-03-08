import React, { useEffect,useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link';
import article1 from '../../public/images/articles/article1.jpeg'
import article2 from '../../public/images/articles/article2.jpeg'
import article3 from '../../public/images/articles/article3.jpeg'

import {motion,useMotionValue} from 'framer-motion'

const MovingImg=({title,img,link}) => {
    const x=useMotionValue(0)
    const y=useMotionValue(0)
    const imgRef= useRef(null)

    function handleMouse(event){
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX)
        y.set(-10)

    }
    function handleMouseLeave(event){
        imgRef.current.style.display='none'
        x.set(0)
        y.set(0)
    }
    return(
    <Link href={link} targer='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
        <h2 className=' capitalize text-xl font-semibold hover:underline'>
         {title}
        </h2>
        <FramerImage 
        style={{x:x, y:y}} 
        ref={imgRef} 
        src={img} 
        alt={title} 
        className=' z-10 w-96 h-auto hidden absolute rounded-lg'
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration:0.2}}} />
    </Link>
)
}
const FramerImage = motion(Image);
const Article = ({img,title,link,date}) => {
    return(
        <motion.li initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:'easeInOut'}}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4'
        >
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4'>{date}</span>
        </motion.li>
    )
}
const FeaturedArticle = ({img,title,time,summary,link}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark'></div>
            <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}} 
            transition={{duration:0.2}}
            ></FramerImage>
            </Link>
            <Link href={link} target='_blank'>
                <h2 className=' capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className=' text-primary'>{time}</span>
            
        </li>
    )
}

const articles = () => {
  return (
    <>
    <Head>
        <title> Articles</title>
        <meta name='description' content='any description'></meta>
    </Head>
   <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
    <Layout className='pt-16'>
        <AnimatedText text='Words can Change The World!' className='mb-16'></AnimatedText>
        <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle title='Conquering System Design: A Roadmap for Beginners' 
            summary='System design is a complex and ever-evolving field but it&apos;s also one of the most crucial aspects of building robust scalable applications. This blog post will serve as your guide providing you with a curated list of 25 essential articles to jumpstart your learning journey.' 
            time='10 min' 
            link='https://www.rajbox.me/blog/systemdesign_beginner'
            img={article1} />
            <FeaturedArticle title='List Of books I read and plan to read or read' 
            summary='List of books around productivity + growth + leadership' 
            time='5 min' 
            link='https://www.rajbox.me/blog/mybookreadlist'
            img={article2} />

        </ul>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
        <ul>
        <Article title='Scaling Up: Engineering Leadership Across Different Stages of Growth' img={article3} date='2023-03-27' link='https://www.rajbox.me/blog/enggmgravoidfailure'/>
        <Article title='Scaling Up: Engineering Leadership Across Different Stages of Growth' img={article3} date='2023-03-27' link='https://www.rajbox.me/blog/enggmgravoidfailure'/>
        <Article title='Scaling Up: Engineering Leadership Across Different Stages of Growth' img={article3} date='2023-03-27' link='https://www.rajbox.me/blog/enggmgravoidfailure'/>
        </ul>
    </Layout>
   </main>
    </>
  )
}

export default articles