import Image from "next/image";
import NavLinks from "./nav-links";
import Link from "next/link";

export default function Sidenav() {
  return (
    <aside className="fixed top-0 bottom-0 left-0 z-20 w-60 px-3 py-6 space-y-6 border-r border-r-secondary/10">
      <Link className="flex justify-center items-center" href="/admin">
        <Image
          src="/essend-logo.svg"
          width={141}
          height={33}
          alt="Essend logo"
          priority
        />
      </Link>
      <NavLinks />
    </aside>
  );
}
