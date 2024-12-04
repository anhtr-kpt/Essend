"use client";

import { Gem, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "jewelry", href: "/jewelry", icon: Gem },
  { name: "users", href: "/users", icon: Users },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href ? "text-primary" : "text-secondary"
            }`}
          >
            <LinkIcon className="" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
