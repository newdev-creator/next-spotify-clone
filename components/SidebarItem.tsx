import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      className={twMerge(
        `
      flex
      flex-row
      h-auto
      items-center
      w-full
      gap-x-4
      text-md
      font-medium
      cursor-pointer
      hover:text-white
      transition
      text-neutral-400
      py-1
    `,
        active && "text-white"
      )}
      href={href}
    >
      <Icon size={26} />
      {/* 00:23:50 */}
    </Link>
  );
};

export default SidebarItem;
