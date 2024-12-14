import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type Props = {
    title: string
}

export const Header = ({ title }: Props) => {
    return (
        <div className="sticky top-0 bg-white pb-3 lg:pt-[3px] flex
            items-center justify-between border-b-2 text-neutral-500 lg:z-50">
            <Link href="/courses">
                <Button variant="ghost" size="sm">
                    <ArrowLeft className="text-neutral-500 h-5 w-5 stroke-2" />
                </Button>
            </Link>
            <div className="font-bold text-lg">
                {title}
            </div>
            <div />
        </div>
    )
}


