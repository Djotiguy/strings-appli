import { sql } from "@/db";
import { getJWTPayLoad } from "../../util/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request, 
    {params}: {params: {id: number}}) {
        const jwtPayload = await getJWTPayLoad();
        const res = await sql("select * from posts where id = $1 and user_id = $2", 
        [params.id, jwtPayload.sub]);
    
    if(res.rowCount == 0){
        return NextResponse.json({error:"Not found"}, {status: 404});
    }
    return NextResponse.json({data: res.rows[0]});
}