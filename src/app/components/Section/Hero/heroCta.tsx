import Link from "next/link";

function HeroCta() {
  return (
    <div
      className={`inline-flex border-gold border max-w-max px-8 rounded-xl py-1 hover:scale-105 text-white cursor-pointer shadow-2xl shadow-gold/10 transition transform-gpu subpixel-antialiased duration-500  `}
    >
      <Link
        href={"#about"}
        className={`text-sm font-bold text-center cursor-pointer`}
      >
        About me
      </Link>
    </div>
  );
}
