import { ListFilter, Plus } from "lucide-react";
import ProductList from "./product-list";
import Pagination from "@/app/components/pagination";
import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-8">
      <div className="rounded-xl border border-border/10 p-3 flex items-center justify-end gap-3">
        <button className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-border/10 border-solid hover:bg-primary hover:text-white">
          <ListFilter size={18} />
          Filters
        </button>
        <Link
          href="/admin/jewelry/create"
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-border/10 border-solid hover:bg-primary hover:text-white transition-all duration-100"
        >
          <Plus size={18} />
          Create product
        </Link>
      </div>
      <ProductList />
      <Pagination />
    </main>
  );
}
