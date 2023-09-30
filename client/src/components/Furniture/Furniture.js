import Form from "./Form";
import {useEffect, useState} from "react";
import FurnitureCard from "./FurnitureCard";

export default function Furniture(){

    const [response, setResponse] = useState(null);
    const [roomImage, setRoomImage] = useState(null);

    const showForm = ()=>{
        setResponse(null);
    }
    return(
        <div className={"w-full h-full"}>

            {
                response ? (
                    response.listOfFurnitures.length === 0 ? (
                        <div className={"w-full flex flex-col justify-center items-center space-y-10"}>
                            <p className={"text-3xl"}>No selection(s) matched the room</p>
                            <button className={"px-4 py-3 bg-black text-white font-semibold w-[3/5] rounded-md"} onClick={showForm}>Make new selection</button>
                        </div>
                    ) : (
                        <div className={"flex justify-center w-full"}>
                            <div className={"w-[80%] md:w-[60%] lg:basis-[40%] divide-y"}>
                                {
                                    response.listOfFurnitures.map((item)=>{

                                        return <FurnitureCard
                                            key={item}
                                            price={item.price}
                                            title={item.title}
                                            description={item.description}
                                            imageURL={item.imageURL}
                                            productURL={item.productURL}
                                        />
                                    })
                                }
                            </div>

                            <div className={"hidden lg:sticky lg:basis-[60%] lg:ml-20 lg:block"}>
                                <img src={roomImage} className={"w-full object-fit"}/>
                                <p className={"font-bold text-center"}>{response.roomDescription}</p>
                            </div>
                        </div>

                    )
                ) : (
                    <Form getResponseAndRoomImage={(response, roomImage) => { setResponse(response); setRoomImage(roomImage); alert(roomImage) }} />
                )
            }

        </div>
    )
}