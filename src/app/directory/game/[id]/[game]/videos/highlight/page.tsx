// Components
import Videos from "../Videos";

export default function Highlight({ params }: {params: {id: string }}) {
    return (
      <>
        {/* @ts-expect-error Async Server Component */}
        <Videos game_id={params.id} type="highlight" />
      </>
    );
}