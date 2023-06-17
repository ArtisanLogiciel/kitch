// Components
import Videos from "../Videos";

// Types
import { GameParamsProps } from "@/types/props";

export default function Upload({ params }: GameParamsProps) {
  return <Videos game={params.game} type="upload" />;
}
