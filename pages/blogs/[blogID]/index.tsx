import { InferGetServerSidePropsType } from 'next';
import CompHead from '../../../components/common/CompHead';
import CopyFooter from '../../../components/common/Footer';
import NavBar from '../../../components/common/navbar';
import BlogDetails from '../../../components/blogs/blogDetails';
import blog_type from '../../../types/blogs';

export const getServerSideProps = async (context: any) => {
  const { query } = context;
  const { blogID } = query;
  const res = await fetch(`http://localhost:3000/api/blogs/${blogID}`);
  const data = (await res.json()) as blog_type;

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
