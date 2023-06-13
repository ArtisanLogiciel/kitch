// Components
import { LiveCarousel } from "../Components/LiveCarousel";
import { Categories } from "../Components/Categories";
import { SelectorCategory } from "../Components/SelectorCategory";
import Global from "@/Components/ParentComposent";
import StreamCard from "@/Components/StreamCard";
import { getStreams } from "@/utils/api";


export default function Homepage() {
  return (
    
    <>
      {/* @ts-expect-error Async Server Component */}
      <LiveCarousel />
      <StreamCard 
                CallAPI={getStreams} 
                title='Chaînes lives' 
                Choice={false}
                PropsTags={true}
                />
      {/* @ts-expect-error Async Server Component */}
      <SelectorCategory />
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      <Global />     
    </>
  );
}
