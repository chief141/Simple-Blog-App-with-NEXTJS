import Link from 'next/link';
import styles from '../../styles/blogroutes_styles/blogs.module.css';
import blog_type from '../../types/blogs';

const EachBlog = ({ Data }: { Data: blog_type[] }) => {
  return (
    <>
      {Data.map((eachData) => {
        return (
          <div key={eachData.id} className={styles.blogs_main}>
            <div className="each_blog">
              <Link className="blog_title_link" href={`/blogs/${eachData.id}`}>
                <h3 className="blog_title">{eachData.title}</h3>
                <h5 className="blog_snippet">{eachData.snippet}</h5>
                <h6 className="blog_date">{eachData.date}</h6>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EachBlog;
