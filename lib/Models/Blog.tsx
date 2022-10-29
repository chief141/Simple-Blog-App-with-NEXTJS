import mongoose from 'mongoose';

let Blog: any;

if (process.env.NODE_ENV === 'development') {
  if (!mongoose.models.Blog) {
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
    Blog = mongoose.models.Blog;
  }
} else {
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
