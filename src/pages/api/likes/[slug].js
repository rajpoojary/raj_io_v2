import dbConnect from '@/lib/mongodb';
import Like from '@/models/Like';

export default async function handler(req, res) {
  const { slug } = req.query;
  
  await dbConnect();

  try {
    if (req.method === 'GET') {
      let like = await Like.findOne({ postSlug: slug });
      if (!like) {
        like = await Like.create({ postSlug: slug, likes: 0 });
      }
      res.status(200).json({ likes: like.likes });
    } 
    else if (req.method === 'POST') {
      let like = await Like.findOne({ postSlug: slug });
      if (!like) {
        like = await Like.create({ postSlug: slug, likes: 1 });
      } else {
        like.likes += 1;
        await like.save();
      }
      res.status(200).json({ likes: like.likes });
    } 
    else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
} 