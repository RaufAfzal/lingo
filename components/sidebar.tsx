import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link";
import SideBarItem from "./side-bar-item";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
}
const SideBar = ({ className }: Props) => {

    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed border-r-2 top-0 left-0 flex-col",
            className
        )}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image
                        src="/mascot.svg"
                        height={40}
                        width={40}
                        alt="mascot"
                    />
                    <h1 className="text-2xl text-green-500 font-extrabold tracking-wide">Lingo</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-2 flex-1">
                <SideBarItem
                    label="Learn"
                    href="/learn"
                    iconSrc="/learn.svg"
                />
                <SideBarItem
                    label="Leaderboard"
                    href="/leaderboard"
                    iconSrc="/leaderboard.svg"
                />
                <SideBarItem
                    label="quests"
                    href="/quests"
                    iconSrc="/quests.svg"
                />
                <SideBarItem
                    label="shop"
                    href="/shop"
                    iconSrc="/shop.svg"
                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}

export default SideBar
