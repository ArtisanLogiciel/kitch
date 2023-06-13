// Components
import Videos from "../Videos";

export default async function All({params}: {params: {id: string, game: string}}) {
  
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Videos game_id={params.id} />
    </>
  );
}