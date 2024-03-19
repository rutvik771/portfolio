import { NextResponse } from "next/server";
import nextConnect from 'next-connect';
// const user =  require("../../../server/models").user;
const models = require("../../../server/models/index");


export default async function handler(req, res) {
  console.log(req.method, 'req.method');
  if (req.method === "GET") {
    try {
      const users = await models.user.findAll();
      res.status(200).json({data : users});
    } catch (error:any) {
      console.error("Error fetching users:", error);
      res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
    }
  }else if(req.method === "POST"){
    try {
      console.log(req.body, 'req.body');
      
      const { name, email, password } = req.body;
      const newUser = await models.user.create({
        name,
        email,
        password,
      });
      return res.status(200).json({
        status: 'success',
        message: 'done',
        data: newUser,
      });
    } catch (error:any) {
      console.error("Error fetching users:", error);
      res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
    }
  }
}
