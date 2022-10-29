import CreateForm from '../../components/blogs/createForm';
import CompHead from '../../components/common/CompHead';
import CopyFooter from '../../components/common/Footer';
import NavBar from '../../components/common/navbar';

const CreateBlog = () => {
  return (
    <>
      <CompHead headTitle="Create"></CompHead>
      <NavBar></NavBar>
      <CreateForm></CreateForm>
      <CopyFooter></CopyFooter>
    </>
  );
};

export default CreateBlog;
