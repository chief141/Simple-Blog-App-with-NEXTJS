import { InferGetServerSidePropsType } from 'next';
import EditForm from '../../../components/blogs/editForm';
import CompHead from '../../../components/common/CompHead';
import CopyFooter from '../../../components/common/Footer';
import NavBar from '../../../components/common/navbar';
import dbConnect from '../../../lib/dbConnect';
import Blog from '../../../lib/Models/Blog';
import blog_type from '../../../types/blogs';

const EditBlog = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <CompHead headTitle="Edit"></CompHead>
      <NavBar></NavBar>
      <EditForm data={data}></EditForm>
      <CopyFooter></CopyFooter>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  await dbConnect();
  const { query } = context;
  const { blogID } = query;
  const result = await Blog.findById(blogID);

  let data = JSON.parse(JSON.stringify(result)) as blog_type;

  return {
    props: {
      data,
    },
  };
};

export default EditBlog;
