import { NextResponse } from "next/server";
import nextConnect from 'next-connect';
// const user =  require("../../../server/models").user;
const models = require("../../../server/models/index");

// export async function GET() {
//     // const res = await fetch("")
//     // const data = await res.json();

//     return NextResponse.json({message: "Hello World"});
// }
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await models.user.findAll();
      res.status(200).json({data : users});
    } catch (error) {
      console.error("Error fetching users:", error);
      res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

// import type { NextApiRequest, NextApiResponse } from 'next'

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json({ name: 'user rutvik patel' })
// }
// const handler = nextConnect()
//   // Get method
//   .get(async (req, res) => {
//     const {
//       query: { nextPage },
//       method,
//       body,
//     } = req;

//     const users = await models.user.findAndCountAll({
//       order: [
//         // Will escape title and validate DESC against a list of valid direction parameters
//         ['id', 'DESC'],
//       ],
//       // offset: nextPage ? +nextPage : 0,
//       limit: 5,
//     });

//     res.statusCode = 200;
//     res.json({
//       status: 'success',
//       data: users.rows,
//       total: users.count,
//       // nextPage: +nextPage + 5,
//     });
//   })
//   // Post method
//   .post(async (req, res) => {
//     const { body } = req;
//     const { slug } = req.query;
//     const { username, email, password } = body;
//     const userId = slug;
//     const newUser = await models.users.create({
//       username,
//       email,
//       password,
//       status: 1,
//     });
//     return res.status(200).json({
//       status: 'success',
//       message: 'done',
//       data: newUser,
//     });
//   })
//   // Put method
//   .put(async (req, res) => {
//     res.end('method - put');
//   })
//   // Patch method
//   .patch(async (req, res) => {
//     throw new Error('Throws me around! Error can be caught and handled.');
//   });

// export default handler;