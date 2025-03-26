import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import ArchitectureExplorer from '@/components/ArchitectureExplorer';

const Architecture = () => {
  return (
    <>
      <Head>
        <title>Technical Architecture Explorer</title>
        <meta name="description" content="Interactive technical architecture explorer showcasing system design and components" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <ArchitectureExplorer />
        </Layout>
      </main>
    </>
  );
};

export default Architecture; 