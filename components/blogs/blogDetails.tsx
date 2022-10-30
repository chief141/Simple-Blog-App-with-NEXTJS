import blog_type from '../../types/blogs';
import styles from '../../styles/blogroutes_styles/blogDetails.module.css';
import Link from 'next/link';

const BlogDetails = ({ data }: { data: blog_type }) => {
  const date_ = new Date(data.updatedAt);
  const date_time = `${date_.getDate()}/${date_.getMonth()}/${date_.getFullYear()}`;
  return (
    <>
      <div className={styles.detail_main}>
        <div className={styles.detail_head}>
          <h1 className={styles.detail_head_text}>{data.title}</h1>
          <Link href={`/blogs/${data._id}/edit`}>
            <button className={styles.detail_edit}>
              <i className="material-icons">edit</i>
            </button>
          </Link>
        </div>
        <div className={styles.detail_snippet}>
          <span className={styles.detail_snippet_text}>{data.snippet}</span>
        </div>
        <div className={styles.detail_date}>
          <h6 className={styles.detail_date_text}>Modified on {date_time}</h6>
        </div>
        <div className={styles.detail_body}>
          <div className={styles.detail_body_text}>{data.body}</div>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
    </>
  );
};

export default BlogDetails;
