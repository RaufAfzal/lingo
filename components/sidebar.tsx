import { cn } from "@/lib/utils"

type Props = {
    className?: string;
}
const SideBar = ({ className }: Props) => {
    return (
        <div className={cn(
            "flex bg-blue-500 h-full lg:w-[256px] lg:fixed border-r-2 top-0 left-0 flex-col",
            className
        )}>
            SideBar
        </div>
    )
}

export default SideBar
