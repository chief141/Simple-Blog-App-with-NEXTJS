import dbConnect from '../../lib/dbConnect';

// @ts-ignore
import Blog from '../../lib/Models/Blog';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        // const data = {
        //   title: 'this is a title 1',
        //   snippet: 'this is a snippet 1',
        //   body: 'this is body 1',
        // };
        // // @ts-ignore
        // const newblog = new Blog(data);
        // newblog.save();
        // @ts-ignore
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
      // case 'POST':
      //   try {
      //     const user = await User.create(req.body);
      //     res.status(201).json({ success: true, data: user });
      //   } catch (error) {
      //     res.status(400).json({ success: false });
      //   }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
