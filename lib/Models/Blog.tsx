import mongoose from 'mongoose';

let Blog;

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  // @ts-ignore
  if (!mongoose.models.Blog) {
    // @ts-ignore
    const BlogSchema = new mongoose.Schema(
      {
        title: {
          type: String,
          required: true,
        },

        snippet: {
          type: String,
          required: true,
        },
        body: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    );
    Blog = mongoose.model('Blog', BlogSchema);
  } else {
    // @ts-ignore
    Blog = mongoose.models.Blog;
  }
} else {
  // @ts-ignore
  const BlogSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      snippet: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  Blog = mongoose.model('Blog', BlogSchema);
}
export default Blog;
