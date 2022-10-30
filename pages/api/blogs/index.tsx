// @ts-ignore
import Blog from '../../../lib/Models/Blog';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  await dbConnect();

  if (method === 'POST') {
    try {
      // @ts-ignore
      const newblog = new Blog(req.body);
      newblog.save();

      res.redirect('/blogs');
    } catch (error) {
      console.log(error);
      res.status(500).redirect('/blogs');
    }
  } else if (method === 'DELETE') {
    try {
      Blog.findByIdAndDelete(req.body.blogID)
        .then((res: any) => {})
        .catch((err: any) => {
          console.log(err);
        });
      res.status(201).json({ success: true });
    } catch (err) {
      console.log(err);
    }
  } else if (method === 'PUT') {
    Blog.findByIdAndUpdate(req.body._id, req.body).then((result: any) => {
      res.status(200).json({ success: true });
    });
  }
};

export default handler;
