import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request : Request){
    const {searchParams} = new URL(request.url);
    const search = searchParams.get('q');
    if(!search){
        return NextResponse.json(
            {error: 'Missing search parameter'},
            {status: 400}
        );
    };
    const res = await sql(`Select id , username, avatar from users where username ilike $1 limit 10`, ["%" +search + "%"]);
    return NextResponse.json({data : res.rows});
}