import dbConnect from "../../../utils/mongo";
import Dog from "../../../models/Dog";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const dogs = await Dog.find();
      res.status(200).json(dogs);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    /*if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }*/
    try {
      const product = await Dog.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}