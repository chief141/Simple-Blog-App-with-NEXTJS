import blog_type from '../../types/blogs';
import styles from '../../styles/blogroutes_styles/BlogDetails.module.css';

const BlogDetails = ({ data }: { data: blog_type }) => {
  return (
    <>
      <div className={styles.detail_main}>
        <div className={styles.detail_head}>
          <h1 className={styles.detail_head_text}>{data.title}</h1>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
