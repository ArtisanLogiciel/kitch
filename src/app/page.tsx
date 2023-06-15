// Components
import { LiveCarousel } from "../Components/LiveCarousel";
import StreamCard from "@/Components/StreamCard";
import { SelectorCategory } from "../Components/SelectorCategory";
import { Categories } from "../Components/Categories";
import Global from "@/Components/ParentComposent";

// Utils
import { getStreams } from "@/utils/api";

export default function Homepage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <LiveCarousel />
      <StreamCard CallAPI={getStreams} title="Chaînes lives" Choice={false} PropsTags={true} />
      {/* @ts-expect-error Async Server Component */}
      <SelectorCategory />
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      <Global />
    </>
  );
}
