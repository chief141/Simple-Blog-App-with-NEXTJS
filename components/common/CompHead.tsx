import Head from 'next/head';

const CompHead = ({ headTitle }: { headTitle: string }) => {
  return (
    <Head>
      <title>{`Blogs | ${headTitle}`}</title>
      <meta name="description" content="My Blog App." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CompHead;
