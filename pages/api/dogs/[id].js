import dbConnect from "../../../utils/mongo";
import Dog from "../../../models/Dog";

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
      const dog = await Dog.findById(id);
      res.status(200).json(dog);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }
    try {
      const dog = await Dog.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(dog);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    /*if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }*/
    try {
      await Dog.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}