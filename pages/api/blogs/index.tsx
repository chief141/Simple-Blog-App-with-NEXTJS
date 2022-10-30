// @ts-ignore
import Blog from '../../../lib/Models/Blog';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        // @ts-ignore
        await dbConnect();
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
