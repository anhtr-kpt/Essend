import Image from "next/image";

export default function ProductCard() {
  return (
    <li className="group pb-1">
      <div>
        <div className="relative overflow-hidden">
          <Image
            src="/product.webp"
            className="aspect-[4/5] hover:opacity-0 absolute top-0 left-0 w-full"
            alt="Product image"
            width={720}
            height={960}
            layout="responsive"
          />
          <Image
            src="/product-hover.webp"
            className="aspect-[4/5] opacity-0 group-hover:scale-[1.05] group-hover:opacity-100 transition-all duration-[300ms] ease-linear"
            alt="Product image"
            width={720}
            height={960}
            layout="responsive"
          />
        </div>
        <div className="text-center pt-1 pb-3 space-y-1">
          <h3 className="text-[15px] font-semibold">Tigris Ring - Gold</h3>
          <p className="text-sm">$48.00</p>
        </div>
      </div>
      <button className="border border-secondary border-solid py-[10px] w-full hover:text-white hover:bg-primary hover:border-primary text-[15px] font-semibold transition-all duration-100">
        Add to cart
      </button>
    </li>
  );
}
