import { InferGetServerSidePropsType } from 'next';
import CopyFooter from '../../components/common/Footer';
import NavBar from '../../components/common/navbar';
import EachBlog from '../../components/blogs/eachblog';
import NoBlogsFound from '../../components/blogs/noblogsfound';
import blog_type from '../../types/blogs';
import CompHead from '../../components/common/CompHead';

export const getServerSideProps = async () => {
  const res = await fetch(`http://127.0.0.1:3000/api/blogs`);
  const data = (await res.json()) as blog_type[];
  return {
    props: {
      data,
    },
  };
};

const Blogs = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div>
        <CompHead headTitle="blogs"></CompHead>
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
