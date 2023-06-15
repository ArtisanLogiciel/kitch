// Components
import Videos from "../Videos";

// Types
import { GameParamsProps } from "@/types/props";

export default async function All({ params }: GameParamsProps) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Videos game={params.game} />
    </>
  );
}