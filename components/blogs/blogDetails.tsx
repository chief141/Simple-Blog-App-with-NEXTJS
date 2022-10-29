import blog_type from '../../types/blogs';
import styles from '../../styles/blogroutes_styles/BlogDetails.module.css';

const BlogDetails = ({ data }: { data: blog_type }) => {
  return (
    <>
      <h1>{data._id}</h1>
    </>
  );
};

export default BlogDetails;
