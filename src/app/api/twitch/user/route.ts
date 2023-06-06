

import { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

// useParams only works in Client Components => ms ici ça doit être un server !!???
//import { useParams } from "next/navigation";


export async function GET(request: NextRequest) {
//export async function GET() {

  const url = request.nextUrl.pathname;
console.log("*****URL : ",url);     //  /api/twitch/user
  const params = request.nextUrl.searchParams;
console.log("*****params : ",params);   //  URLSearchParams { 'userlogin' => 'shisheyu_mayamoto' }

  const userLogin = params.get('userlogin')

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
    cache: 'no-store' as RequestCache,
  };


console.log(`-----fetch(https://api.twitch.tv/helix/users?language=fr&login=${userLogin} avec options : `, options);


  try {
    const res = await fetch(`https://api.twitch.tv/helix/users?language=fr&login=${userLogin}`, options);


    const twitch = await res.json();

console.log("---twitch : RES.json() : ", twitch); 
console.log("------DATA : ", twitch.data);    

    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}
