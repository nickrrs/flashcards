import Link from "next/link";
import Image from "next/image";

export default function HomeFooter() {
    return (
        <footer className="grid grid-cols-3 h-1/2 border-t border-gray-200 justify-between items-start p-4 w-full bg-linear-to-b from-white to-zinc-50">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <Image src="/globe.svg" alt="logo" width={16} height={16} />
                </Link>
                <h1 className="text-lg font-bold text-[#3590ff]">flashcards</h1>
            </div>
            <div className="text-black flex flex-col items-center self-end">
                <div className="flex flex-row items-center gap-2 text-gray-500">
                    <p>by</p>
                    <p className="hover:text-[#3590ff] transition-colors cursor-pointer">@leondicielo</p>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 text-black">
                <Link href="/terms" className="hover:border-b-2 hover:border-[#3590ff]">contact</Link>
                <Link href="/contact" className="hover:border-b-2 hover:border-[#3590ff]">roadmap</Link>
            </div>
        </footer>
    )
}