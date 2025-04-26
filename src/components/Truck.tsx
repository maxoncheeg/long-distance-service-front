import { useState } from "react"
import { ITruck } from "../models"

interface TruckProps {
    truck: ITruck
}

export function Truck({ truck }: TruckProps) {
    const [showColor, setShowColor] = useState(false);

    const buttonBgClassName = showColor ? 'bg-yellow-400 hover:bg-amber-500' : 'bg-blue-200 hover:bg-blue-500'
    const buttonClasses = ['py-2 px-4 bg-amber-200 border', buttonBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={truck.image} className="w-1/3" alt={truck.id.toString()} />
            <p style={{ fontSmooth: 2}}>{truck.name}</p>
            <button
                className={buttonClasses.join(' ')}
                onClick={() => setShowColor(showColor => !showColor)}>
                {!showColor ? "Показать цвет" : "Скрыть цвет"}
            </button>

            {showColor && <span className="font-bold">{truck.color}</span>}
        </div>
    )
}