import { Bell, Search, Settings } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 ml-60 px-6 py-3 flex justify-between items-center border-b-secondary/20 border-b">
      <div className="">
        <div className="relative">
          <input
            type="text"
            className="pl-10 pr-6 py-2 border border-secondary/20 border-solid rounded-lg placeholder:text-secondary/50 text-sm w-[400px]"
            placeholder="Search"
          />
          <label className="absolute top-1/2 -translate-y-1/2 left-3">
            <Search size={20} className="text-secondary/50" />
          </label>
        </div>
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
    </header>
  );
}
