// import Image from "next/image"; 

// // Types
// import { API, API_GAMES } from "@/types/api";

// // Utils
// import { getImageSized } from "@/utils/getImageSized";

// export async function getGames(game: string) {
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Client-ID": process.env.DB_CLIENT || "",
//       Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(`https://api.twitch.tv/helix/games?id=${game}`, options);
//     const twitch = await res.json();
//     return twitch?.data;
//   } catch (error: Error | any) {
//     console.log(error.message);
//   }
// }

// export default async function Game({ params }: { params: { game: string } }) {
//   const data: API<API_GAMES[]> = await getGames(params.game);
//   console.log("data", data);

//   return data ? (
//     <div className="w-full flex flex-col justify-center items-center">
//       Directory <br />
//       Directory <br />
//       Directory <br />
//       Directory <br />
//       Directory <br />
//       Directory <br />
//       Directory <br />
//       Directory <br />
//       Directory <br />
//       <p>game : {params.game}</p>
//       <p>id: {data[0].id}</p>
//       <p>name: {data[0].name}</p>
//       <p>box_art_url: {data[0].box_art_url}</p>
//       <Image
//         src={getImageSized(data[0].box_art_url, "200", "200")}
//         alt={data[0].name}
//         width={200}
//         height={200}
//       />
//       <p>igdb_id: {data[0].igdb_id}</p>
//     </div>
//   ) : null;
// }
