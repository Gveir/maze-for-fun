import Maze from '../Maze'
import Settings from "../Settings"

export default () => {
    return (
        <div className="flex bg-gray-200 rounded-2xl p-4 w-5/6 h-5/6">
            <Maze />
            <Settings />
        </div>
    )
}