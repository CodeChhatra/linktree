import Link from "next/link";
export default function () {
  return (
    <header className="bg-white border-b flex justify-between p-4">
      <div className="flex gap-7">
        <Link href={"/"}> LinkList </Link>
        <nav className=" flex gap-4 text-slate-400 text-sm">
          <Link href={"/about"}> About </Link>
          <Link href={"/pricing"}> Pricing </Link>
          <Link href={"/contact"}> Contact </Link>
        </nav>
      </div>

      <nav className="flex gap-4 text-sm text-slate-400">
        <Link href={"/login"}> Sign In</Link>
        <Link href={"/register"}> Create Account</Link>
      </nav>
    </header>
  );
}
