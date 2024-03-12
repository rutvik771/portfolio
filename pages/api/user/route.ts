import { NextResponse } from "next/server";
import {user} from "../../../server/models"

export async function GET() {
    // const res = await fetch("")
    // const data = await res.json();

    return NextResponse.json({message: "Hello World"});
}
// export const getUsers = () => {
//     // const users = await user.findAll();
//     // return users;
//         return NextResponse.json({message: "Hello World"});

//   }