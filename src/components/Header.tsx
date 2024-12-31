import { HomeIcon, FileIcon, UserRound } from "lucide-react";
import Link from "next/link";
import { NavButton } from "@/components/NavButton";

export function Header() {
    return (
        <header className="animate-slide bg-background h12 p2 border-b sticky top-0 z-20">
            <div className="flex h-8 justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <NavButton href="/home" label="Home" icon={HomeIcon} />
                    <Link
                        href="/home"
                        title="Home"
                        className="flex justify-center items-center gap-2 ml-0">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Computer Repair Shop
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <p>Right</p>
                </div>
            </div>
        </header>
    )
}