import Link from "next/link";

type NavItemProps = {
    text: string;
    href: string;
    active: boolean;
  };

export const NavItem = ({ text , href, active } : NavItemProps) => {
  return (
    <Link href={href}>{text}</Link>
  );
};
