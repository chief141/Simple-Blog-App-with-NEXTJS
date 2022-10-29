// import mongoose from 'mongoose';

// const BlogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     snippet: {
//       type: String,
//       required: true,
//     },
//     body: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Blog = mongoose.model('Blog', BlogSchema);
// export default Blog;
// lib/models/test.model.ts

import mongoose from 'mongoose';

let Blog;
// @ts-ignore
if (!global.Blog) {
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
  Blog = global.Blog;
}
export default Blog;
