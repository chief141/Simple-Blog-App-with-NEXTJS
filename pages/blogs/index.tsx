import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import CopyFooter from '../../components/common/Footer';
import NavBar from '../../components/common/navbar';
import styles from '../../styles/blogroutes_styles/blogs.module.css';
import blog_type from '../../types/blogs';
import EachBlog from '../../components/blogs/eachblog';
import NoBlogsFound from '../../components/blogs/noblogsfound';

const data: blog_type[] = [
  {
    id: 1,
    title: 'This is title 1',
    snippet: 'this is a snippet 1',
    body: 'this is a body',
    date: '12/5/8',
  },
  {
    id: 2,
    title: 'This is title 2',
    snippet: 'this is a snippet 2',
    body: 'this is a body',
    date: '12/5/8',
  },
  {
    id: 3,
    title: 'This is title 3',
    snippet: 'this is a snippet 3',
    body: 'this is a body',
    date: '12/5/8',
  },
  {
    id: 4,
    title: 'This is title 4',
    snippet: 'this is a snippet 4',
    body: 'this is a body',
    date: '12/5/8',
  },
  {
    id: 5,
    title: 'This is title 5',
    snippet: 'this is a snippet 5',
    body: 'this is a body',
    date: '12/5/8',
  },
  {
    id: 6,
    title: 'This is title 6',
    snippet: 'this is a snippet 6',
    body: 'this is a body',
    date: '12/5/8',
  },
];

const Blogs = () => {
  return (
    <>
      <div>
        <Head>
          <title>Blogs | Latest Blogs</title>
          <meta name="description" content="My Blog App." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar></NavBar>
        {data.length > 0 ? (
          <EachBlog Data={data}></EachBlog>
        ) : (
          <NoBlogsFound></NoBlogsFound>
        )}
        <CopyFooter></CopyFooter>
      </div>
    </>
  );
};

export default Blogs;
