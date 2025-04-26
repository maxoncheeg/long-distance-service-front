import { useState } from "react";
import { ITruck } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const truckData: ITruck = {
    id: 0,
    name: "",
    color: "",
    image: ""
}

interface CreateTruckProps {
    onCreate: () => void
}

export function CreateTruck({ onCreate }: CreateTruckProps) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();


        truckData.name = name;
        truckData.color = color;
        truckData.image = image;

        if (truckData.name.trim().length === 0 || truckData.color.trim().length === 0 || truckData.image.trim().length == 0) {
            setError("Имеются пустые поля!")
            return
        }
        else if (error.length !== 0) setError('')


        const response = await axios.post<ITruck>("http://localhost/api/test/trucks", truckData)
        onCreate();
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <>
            {error.length !== 0 && <ErrorMessage error={error} />}

            <form action="post" onSubmit={submitHandler}>
                <input type="text"
                    value={name}
                    onChange={changeHandler}
                    name="name" placeholder="Название" className="border py-2 px-4 mb-2 w-full outline-0" />
                <input type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    name="color" placeholder="Цвет" className="border py-2 px-4 mb-2 w-full outline-0" />
                <input type="text" name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="URL изображения" className="border py-2 px-4 mb-2 w-full outline-0" />
                <button type="submit" >Создать</button>
            </form>
        </>

    )
}