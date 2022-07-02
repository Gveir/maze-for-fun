export default ({ value }) => {
    return (
        <>
            <label for="maze-size" className="block mb-2 text-base text-gray-800">Wielkość labiryntu</label>
            <input id="maze-size" type="range" min="1" max="3" value={value} className="w-full h-2 bg-green-700 rounded-lg appearance-none cursor-pointer"></input>
        </>
    )
}