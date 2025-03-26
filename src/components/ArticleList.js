import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target={link.startsWith('http') ? '_blank' : undefined} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className='capitalize text-xl font-semibold hover:underline dark:text-light'>
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        width={400}
        height={300}
        className='z-10 w-96 h-auto hidden absolute rounded-lg'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      />
    </Link>
  );
};

const FramerImage = motion(Image);

const Article = ({ img, title, link, date }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={`/blog/${link}`} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.article>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <article className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light -z-10" />
      <Link href={`/blog/${link}`} target={link.startsWith('http') ? '_blank' : undefined}>
        <Image
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
          width={1200}
          height={600}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={`/blog/${link}`} target={link.startsWith('http') ? '_blank' : undefined}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg dark:text-light">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-gray-300">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </article>
  );
};

const ArticleList = ({ articles }) => {
  const featuredPosts = articles.slice(0, 2);
  const otherPosts = articles.slice(2);

  return (
    <>
      <ul className='grid grid-cols-2 gap-16'>
        {featuredPosts.map((post) => (
          <FeaturedArticle
            key={post.slug}
            title={post.title}
            summary={post.summary}
            time='10 min'
            link={post.slug}
            img={post.image}
          />
        ))}
      </ul>
      <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
      <ul>
        {otherPosts.map((post) => (
          <Article
            key={post.slug}
            title={post.title}
            img={post.image}
            date={post.date}
            link={post.slug}
          />
        ))}
      </ul>
    </>
  );
};

export default ArticleList; 