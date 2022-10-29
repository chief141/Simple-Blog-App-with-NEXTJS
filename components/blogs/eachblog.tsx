import Link from 'next/link';
import styles from '../../styles/blogroutes_styles/blogs.module.css';
import blog_type from '../../types/blogs';

const EachBlog = ({ Data }: { Data: blog_type[] }) => {
  return (
    <>
      <div className={styles.blogs_main}>
        {Data.map((eachData) => {
          return (
            <div key={eachData._id}>
              <Link href={`/blogs/${eachData._id}`}>
                <h3 key={eachData._id}>{eachData.title}</h3>
                <h5 key={eachData._id}>{eachData.snippet}</h5>
                <h6 key={eachData._id}>{eachData.createdAt}</h6>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EachBlog;
