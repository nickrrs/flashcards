import Link from "next/link";
import Image from "next/image";

export default function HomeFooter() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 justify-between items-center gap-4 md:gap-0 p-4 md:p-6 w-full bg-linear-to-b from-white to-zinc-50">
            <div className="flex items-center gap-2 justify-center md:justify-start">
                <Link href="/">
                    <Image src="/globe.svg" alt="logo" width={16} height={16} />
                </Link>
                <h1 className="text-base md:text-lg font-bold text-[#3590ff]">flashcards</h1>
            </div>
            <div className="text-black flex flex-col items-center order-3 md:order-2">
                <div className="flex flex-row items-center gap-2 text-sm md:text-base text-gray-500">
                    <p>by</p>
                    <p className="hover:text-[#3590ff] transition-colors cursor-pointer"><a href="https://x.com/leondicielo" target="_blank" rel="noopener noreferrer">@leondicielo</a></p>
                </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2 text-sm md:text-base text-black order-2 md:order-3">
                <Link href="/terms" className="hover:border-b-2 hover:border-[#3590ff] transition-colors">contact</Link>
                <Link href="/contact" className="hover:border-b-2 hover:border-[#3590ff] transition-colors">roadmap</Link>
            </div>
        </footer>
    )
}