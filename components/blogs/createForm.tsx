import { useState } from 'react';
import styles from '../../styles/blogroutes_styles/createForm.module.css';

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [snippet, setSnippet] = useState('');
  const [body, setBody] = useState('');

  const postBlog = async () => {
    const res = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        snippet: snippet,
        body: body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className={styles.form_main_body}>
      <form action="/api/blogs" method="post">
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
          >
            {body}
          </textarea>
        </div>
        <div>
          <button type="submit" onClick={postBlog}>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
