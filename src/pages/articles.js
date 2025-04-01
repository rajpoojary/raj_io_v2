import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import ArticleList from '@/components/ArticleList';
import ArchitectureExplorer from '@/components/ArchitectureExplorer';

export async function getStaticProps() {
  const articles = [
    {
      title: 'Cursor Implementation Guide: Avoiding AI Pitfalls',
      date: '2024-03-21',
      summary: 'A comprehensive guide to setting up Cursor to avoid common AI pitfalls identified in Martin Fowler\'s "Exploring Generative AI" series.',
      image: '/images/articles/Article4.jpeg',
      author: 'Raj',
      slug: 'cursor-implementation-guide'
    },
    {
      title: 'Conquering System Design: A Roadmap for Beginners',
      date: '2024-03-20',
      summary: 'A comprehensive guide to understanding and mastering system design fundamentals.',
      image: '/images/articles/Article1.jpeg',
      author: 'Raj',
      slug: 'system-design-beginners'
    },
    {
      title: 'List Of books I read and plan to read',
      date: '2023-06-27',
      summary: 'List of books around productivity + growth + leadership',
      image: '/images/articles/Article2.jpeg',
      author: 'Raj',
      slug: 'complete-book-list'
    },
    {
      title: 'CrowdStrike Outage: A Deep Dive into the Incident',
      date: '2024-03-19',
      summary: 'Analyzing the recent CrowdStrike outage and its implications for enterprise security.',
      image: '/images/articles/Article3.jpeg',
      author: 'Raj',
      slug: 'crowdstrike-outage'
    }
  ];

  return {
    props: {
      articles,
    },
  };
}

const Articles = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name='description' content='Blog posts and articles'></meta>
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:bg-dark'>
        <Layout className='pt-16'>
          <AnimatedText text='Words can Change The World!' className='mb-16'></AnimatedText>
          
          {/* Featured Articles */}
          <ArticleList articles={articles} />
          
          {/* Architecture Explorer Section */}
          <div className="mt-32">
            <AnimatedText text='Explore Technical Architecture' className='mb-16'></AnimatedText>
            <ArchitectureExplorer />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Articles;