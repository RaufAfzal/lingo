import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "./ui/sheet"
import SideBar from "./sidebar"
import { Menu } from "lucide-react"
const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-0" side="left">
                <SideBar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar
