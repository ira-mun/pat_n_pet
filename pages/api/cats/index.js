import dbConnect from "../../../utils/mongo";
import Cat from "../../../models/Cat";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const cats = await Cat.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    /*if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }*/
    try {
      const product = await Cat.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}