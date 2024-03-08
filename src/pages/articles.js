import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link';
import article1 from '../../public/images/articles/article1.jpeg'
import article2 from '../../public/images/articles/article2.jpeg'
import {motion} from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedArticle = ({img,title,time,summary,link}) => {
    return(
        <li className=' col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}}></FramerImage>
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
    </Layout>
   </main>
    </>
  )
}

export default articles