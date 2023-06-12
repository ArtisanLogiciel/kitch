// Components
import { LiveCarousel } from "../Components/LiveCarousel";
import { LiveChannels } from "../Components/LiveChannels";
import { Categories } from "../Components/Categories";
import { SelectorCategory } from "../Components/SelectorCategory";
import Global from "@/Components/ParentComposent";


export default function Homepage() {
  return (
    
    <>
      {/* @ts-expect-error Async Server Component */}
        <LiveCarousel />
      {/* @ts-expect-error Async Server Component */}
      <LiveChannels  />
      {/* @ts-expect-error Async Server Component */}
      <SelectorCategory />
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      <Global />     
    </>
  );
}
