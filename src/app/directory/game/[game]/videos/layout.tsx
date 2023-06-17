// Components
import Filters from "./Filters";
import SortBy from "./SortBy";

type LayoutVideoProps = {
  params: {
    game: string;
  }
  children: React.ReactNode;
};

export default async function LayoutVideo({ params, children }: LayoutVideoProps) {

  return (
    <article className="w-full">
      <div className="flex items-center justify-between">
        <Filters params={params} />
        <SortBy />
      </div>

      {children}
    </article>
  );
}