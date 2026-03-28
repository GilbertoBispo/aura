import { Settings, House, Plus } from "lucide-react"

function BottomBar() {
    return (
        <nav className="bg-(--secondary-color) h-12.5 w-full shadow-[0px_5px_6px_-1px_#00000040] fixed bottom-0">
            <div className="flex justify-between items-center h-full px-3.5">
                <Settings className="text-white"></Settings>
                <House className="text-white"></House>
                <Plus className="text-white"></Plus>
            </div>
        </nav>
    )
}

export default BottomBar;