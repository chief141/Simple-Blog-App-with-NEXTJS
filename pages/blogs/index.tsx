import { InferGetServerSidePropsType } from 'next';
import CopyFooter from '../../components/common/Footer';
import NavBar from '../../components/common/navbar';
import EachBlog from '../../components/blogs/eachblog';
import NoBlogsFound from '../../components/blogs/noblogsfound';
import blog_type from '../../types/blogs';
import CompHead from '../../components/common/CompHead';
import Blog from '../../lib/Models/Blog';

export const getServerSideProps = async () => {
  const result = await Blog.find().sort({ createdAt: -1 });
  const data = JSON.parse(JSON.stringify(result));
  return {
    props: {
      data: data,
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
