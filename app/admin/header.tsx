"use client";

import { useEffect, useState } from "react";
import { Bell, Search, Settings } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 bg-white transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="ml-60 px-6 py-3 flex justify-between items-center gap-10 border-b-secondary/10 border-b">
        <div className="relative grow">
          <input
            type="text"
            className="pl-10 pr-6 py-2 border border-secondary/20 border-solid rounded-lg placeholder:text-border/50 text-sm w-full max-w-[400px]"
            placeholder="Search"
          />
          <label className="absolute top-1/2 -translate-y-1/2 left-3">
            <Search size={20} className="text-border/50" />
          </label>
        </div>

        <div className="flex gap-6 items-center">
          <button className="">
            <Settings size={22} />
          </button>
          <button className="">
            <Bell size={22} />
          </button>
          <button className="size-10 rounded-full border-2 border-primary border-solid flex items-center justify-center">
            <Image src="/avatar.png" width={36} height={36} alt="User avatar" />
          </button>
        </div>
      </div>
    </header>
  );
}
