import { InferGetServerSidePropsType, NextApiRequest } from 'next';
import CompHead from '../../../components/common/CompHead';
import CopyFooter from '../../../components/common/Footer';
import NavBar from '../../../components/common/navbar';
import BlogDetails from '../../../components/blogs/blogDetails';
import Blog from '../../../lib/Models/Blog';
import dbConnect from '../../../lib/dbConnect';

export const getServerSideProps = async (context: any) => {
  await dbConnect();
  const { query } = context;
  const { blogID } = query;
  const result = await Blog.findById(blogID);

  let data = JSON.parse(JSON.stringify(result));

  return {
    props: {
      data,
    },
  };
};

const BlogById = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <CompHead headTitle={data.title}></CompHead>
      <NavBar></NavBar>
      <BlogDetails data={data}></BlogDetails>
      <CopyFooter></CopyFooter>
    </>
  );
};

export default BlogById;
