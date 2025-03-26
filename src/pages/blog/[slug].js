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
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <article className="w-full prose prose-lg dark:prose-invert">
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
            <div className="mt-8">
              <MDXRemote {...mdxSource} />
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src/content/blog'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/content/blog', params.slug + '.md'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
};

export default BlogPost; 