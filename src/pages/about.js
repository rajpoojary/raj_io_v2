import Head from 'next/head'
import React, { useEffect,useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/avatar.jpg'
import Image from 'next/image'
import { useInView,motion, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true});
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);
  
    useEffect(() => {
      springValue.on('change', (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);
  
    return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
    <Head>
        <title> Raj Ambalpady | About Page</title>
        <meta name='description' content='any description'></meta>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText  className='mb-16' text='Passion fuels purpose!'></AnimatedText>
        <div className='grid w-full grid-cols-8 gap-16 '>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                    About Me.
                </h2>
                <p className='my-4 font-medium'>
                    As an Engineering Manager at Playstation, I am passionate about delivering exceptional customer experiences and creating products that bring delight to our users. That&apos;s why I always keep the customer at the forefront of my mind when creating strategic plans that help us work smarter and faster. By working closely with our product owners and designers, I ensure that we are not only meeting but exceeding our customers&apos; expectations.
                </p>
                <p className='my-4 font-medium'>
                 When I&apos;m not working, you can usually find me out in nature. I&apos;m a big fan of trail running and hiking, and I love exploring new places. It&apos;s a great way to clear my mind and recharge my batteries.
                </p>
                <p className='my-4 font-medium'>
                    Of course, I&apos;m also a tech nerd at heart. I&apos;m always reading up on the latest developments in the industry and tinkering with new tools and technologies. I plan to start writing about my learnings on my blog, so stay tuned!
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                {/* <div className='absolute top-0 -right-3 z-10 w-[102%] h-[103%] rounded- bg-dark'> */}
                <div>
                <Image src={profilePic} alt="Raj Ambalpady" className=' w-full h-auto rounded-2xl' ></Image>
                </div>
                <div className='col-span-2 flex flex-col item-end  justify-between'>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={15}></AnimatedNumbers>
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75'>+ Year&apos;s Of Experience</h2>
                    </div>
                </div>
            </div>
        </div>
        <Skills />
        </Layout>
    </main>
    </>
  )
}

export default about