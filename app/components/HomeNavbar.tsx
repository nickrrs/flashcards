import Link from "next/link";
import Image from "next/image";

export default function HomeNavbar() {
  return (
    <nav className="flex fixed top-0 left-0 right-0 z-100 justify-between items-center p-4 w-full border-b border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        <Link href="/">
            <Image src="/globe.svg" alt="logo" width={16} height={16} />
        </Link>
        <h1 className="text-lg font-bold text-[#2b33ff]">flashcards</h1>
      </div>
      <div className="flex items-center gap-4 text-black">
        <Link href="/login" className="hover:border-b-2 hover:border-[#3590ff]">login</Link>
        <Link href="/register" className="hover:border-b-2 hover:border-[#3590ff]">signup</Link>
      </div>
    </nav>
  )
}