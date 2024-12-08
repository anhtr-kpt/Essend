import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Pagination() {
  return (
    <div className="mt-12 flex justify-center">
      <nav className="">
        <ul
          role="list"
          className="flex gap-4 items-center [&_li]:flex [&_li]:items-center [&_li]:justify-center [&_li]:p-3"
        >
          <li>
            <button className="">
              <ChevronLeft size={16} />
            </button>
          </li>
          <li>
            <Link href="/">1</Link>
          </li>
          <li>
            <Link href="/">2</Link>
          </li>
          <li>
            <Link href="/">3</Link>
          </li>
          <li>...</li>
          <li>
            <Link href="/">10</Link>
          </li>
          <li>
            <button className="">
              <ChevronRight size={16} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
