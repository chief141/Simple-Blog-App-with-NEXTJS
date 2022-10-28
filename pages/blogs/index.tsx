import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import CopyFooter from '../../components/Footer';
import NavBar from '../../components/navbar';

const Blogs = () => {
  const data = [
    { id: 1, snippet: 'this is a snippet 1', body: 'this is a body' },
    { id: 2, snippet: 'this is a snippet 2', body: 'this is a body' },
    { id: 3, snippet: 'this is a snippet 3', body: 'this is a body' },
    { id: 4, snippet: 'this is a snippet 4', body: 'this is a body' },
    { id: 5, snippet: 'this is a snippet 5', body: 'this is a body' },
    { id: 6, snippet: 'this is a snippet 6', body: 'this is a body' },
  ];

  return (
    <>
      <div>
        <Head>
          <title>Blogs | Latest Blogs</title>
          <meta name="description" content="My Blog App." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar></NavBar>

        <CopyFooter></CopyFooter>
      </div>
    </>
  );
};

export default Blogs;
