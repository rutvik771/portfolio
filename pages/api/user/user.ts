import { NextResponse } from "next/server";
// import {user} from "../../../server/models/user"
import db from '../../../server/models/index';


// export async function GET() {
//     // const res = await fetch("")
//     // const data = await res.json();

//     return NextResponse.json({message: "Hello World"});
// }
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const User = db.user;
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' , message : error.message});
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// import type { NextApiRequest, NextApiResponse } from 'next'

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json({ name: 'user rutvik patel' })
// }