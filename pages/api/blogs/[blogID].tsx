import { NextApiRequest, NextApiResponse } from 'next';
import Blog from '../../../lib/Models/Blog';
import blog_type from '../../../types/blogs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { blogID } = req.query;
  await Blog.findById(blogID)
    .then((result: blog_type) => {
      res.json(result);
    })
    .catch((err: Error) => {
      console.log(err);
    });
};

export default handler;
