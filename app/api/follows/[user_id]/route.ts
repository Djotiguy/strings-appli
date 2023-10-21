import { sql } from "@/db";
import { getJWTPayLoad } from "../../util/auth";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, {params} : {params : {user_id : number}} ){
    const jwtPayload = await getJWTPayLoad();
    const userId = params.user_id;
    await sql("delete from follows where user_id = $1 and follower_id = $2", [userId, jwtPayload.sub]);

    return NextResponse.json({msg : 'Unfollowed successfully'});
}