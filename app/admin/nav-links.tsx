"use client";
import { ChevronRight, Gem, LayoutDashboard, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "jewelry", href: "/admin/jewelry", icon: Gem },
  { name: "users", href: "/admin/users", icon: Users },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive =
          link.name === "dashboard"
            ? pathname === link.href
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              isActive ? "bg-primary text-white" : "hover:text-primary"
            } flex items-center justify-between gap-2 py-[10px] pl-4 pr-2 rounded-lg`}
          >
            <div className="flex gap-2 items-center">
              <LinkIcon className="size-5" />
              <p className="capitalize font-medium text-[15px]">{link.name}</p>
            </div>
            {isActive && <ChevronRight className="size-5" />}
          </Link>
        );
      })}
    </nav>
  );
}
