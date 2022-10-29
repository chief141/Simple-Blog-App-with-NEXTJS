import dbConnect from '../../../lib/dbConnect';

// @ts-ignore
import Blog from '../../../lib/Models/Blog';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        // @ts-ignore
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        // @ts-ignore
        const newblog = new Blog(req.body);
        newblog.save();
        res.status(201).redirect(`/blogs/${newblog._id}`);
      } catch (error) {
        console.log(error);
        res.status(500).redirect('/blogs');
      }
      break;
    default:
      res.status(400).redirect('/blogs');
      break;
  }
};

export default handler;
