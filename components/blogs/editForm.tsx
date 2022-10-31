import { useState } from 'react';
import styles from '../../styles/blogroutes_styles/editBlog.module.css';
import blog_type from '../../types/blogs';
import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

const EditForm = ({ data }: { data: blog_type }) => {
  const [title, setTitle] = useState(data.title);
  const [snippet, setSnippet] = useState(data.snippet);
  const [body, setBody] = useState(data.body);
  const [_id, set_Id] = useState(data._id);

  const router = useRouter();

  const editBlog = async (e: MouseEvent) => {
    e.preventDefault();

    if (
      150 > title.length &&
      title.length > 40 &&
      150 > snippet.length &&
      snippet.length > 40 &&
      10000 > body.length &&
      body.length > 500
    ) {
      const res = await fetch('/api/blogs', {
        method: 'PUT',
        body: JSON.stringify({
          _id: _id,
          title: title,
          snippet: snippet,
          body: body,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        router.push(`/blogs/${_id}`);
      });
    }
  };

  const mouseClickHandler = async (e: MouseEvent) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this blog?')) {
      const res = await fetch('/api/blogs', {
        method: 'DELETE',
        body: JSON.stringify({
          blogID: _id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        router.push('/blogs');
      });
    }
  };

  return (
    <div className={styles.form_main_body}>
      <form action="/api/blogs" method="POST|DELETE">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            minLength={40}
            maxLength={150}
            autoComplete="off"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            name="snippet"
            placeholder="Snippet"
            minLength={40}
            maxLength={150}
            autoComplete="off"
            required
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
          />
        </div>

        <div>
          <textarea
            name="body"
            placeholder="Body"
            minLength={500}
            maxLength={10000}
            autoComplete="off"
            required
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </div>

        <div>
          <button type="submit" className={styles.edit_btn} onClick={editBlog}>
            Update
          </button>
          <button
            type="button"
            className={styles.delete_btn}
            onClick={mouseClickHandler}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
