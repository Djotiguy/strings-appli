import { NextResponse } from "next/server";
import { getJWTLoad } from "../../util/auth";
import { sql } from "@/db";

export async function GET(request: Request){
    // get currently logged in user
    const jwtPayLoad = await getJWTLoad();
    // fetch user data from database
    const res = await sql("select id, username from users where id = $1",
    [jwtPayLoad.sub]);

    const user = res.rows[0];
    // return user data
    return NextResponse.json({data: user})
}