import dbConnect from "../../../utils/mongo";
import Cat from "../../../models/Cat";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies
  } = req;
  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const cat = await Cat.findById(id);
      res.status(200).json(cat);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }
    try {
      const cat = await Cat.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(cat);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
   /* if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }*/
    try {
      await Cat.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}