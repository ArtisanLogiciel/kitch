// Components
import SortBy from "../SortBy";
import Filters from "./Filters";

type LayoutVideoProps = {
  params: {
    game: string;
  }
  children: React.ReactNode;
};

export default async function LayoutVideo({ params, children }: LayoutVideoProps) {

  return (
    <article className="w-full">
      <div className="flex items-center justify-between font-bold">
        <Filters params={params} />
        <SortBy />
      </div>

      {children}
    </article>
  );
}