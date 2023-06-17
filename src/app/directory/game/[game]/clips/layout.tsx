// Components
import Top from "./Top";

type ClipsLayoutProps = {
  children: React.ReactNode;
};

export default function ClipsLayout({ children }: ClipsLayoutProps) {

  return (
    <article className="w-full">
        <Top />

      {children}
    </article>
  );
}
