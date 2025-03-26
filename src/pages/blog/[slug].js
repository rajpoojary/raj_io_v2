import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

const BlogPost = ({ frontMatter, mdxSource }) => {
  if (!frontMatter || !mdxSource) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-2xl">Blog post not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <article className="w-full prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <div className="mb-8">
              <Image
                src={frontMatter.image}
                alt={frontMatter.title}
                width={1200}
                height={600}
                className="rounded-lg"
                priority
              />
            </div>
            <h1>{frontMatter.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <span>{frontMatter.date}</span>
              <span>•</span>
              <span>{frontMatter.author}</span>
            </div>
            <div className="mt-8 prose-headings:text-dark prose-headings:dark:text-light prose-p:text-dark prose-p:dark:text-light">
              <MDXRemote {...mdxSource} />
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const blogDir = path.join(process.cwd(), 'src/content/blog');
    const files = fs.readdirSync(blogDir);
    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const filePath = path.join(process.cwd(), 'src/content/blog', params.slug + '.md');
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content, {
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    });

    return {
      props: {
        frontMatter,
        mdxSource,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
};

export default BlogPost; 