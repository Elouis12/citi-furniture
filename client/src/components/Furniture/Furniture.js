import Form from "./Form";
import {useEffect, useState} from "react";
import FurnitureCard from "./FurnitureCard";
import {BsFillSendFill} from "react-icons/bs";

export default function Furniture(){

    const [response, setResponse] = useState(null);
    const [roomImage, setRoomImage] = useState(null);
    const [userPrompt, setUserPrompt] = useState("");

    const showForm = ()=>{
        setResponse(null);
    }

    const sendQuery = async ()=>{
         const URL = 'http://localhost:5001/get-furniture';
            const response = await fetch(URL, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: roomImage,
                    userPrompt: userPrompt
                })
            });

            const data = await response.json();

            console.log(data + " " + " ok");


    }

    const getUserPrompt = (e)=>{

        const prompt = e.target.value;

        setUserPrompt(prompt);
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
                        <div className={"flex flex-col lg:flex-row justify-center w-full"}>


                            <div className={"lg:hidden sticky w-1/2 m-auto flex flex-col justify-center items-start space-y-2"}>
                                <span className={"w-full font-medium leading-6 text-slate-500"}>Describe your need</span>
                                <div className={"w-full flex justify-center items-stretch space-x-2"}>
                                    <input type={"text"} min={2} className={`basis-[70%] ring-slate-200 h-10 p-2 text-sm ring-2 rounded-sm`} placeholder={"Give me some design ideas"} onKeyUp={getUserPrompt}/>
                                    <button className={"bg-[#1877F2] rounded-md h-full p-2"}
                                    onClick={sendQuery}>
                                        <BsFillSendFill color={"white"} size={25}/>
                                    </button>
                                </div>
                            </div>

                            <div className={"w-[80%] m-auto md:w-[60%] lg:basis-[40%] divide-y"}>
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

                            <div className={"hidden lg:sticky lg:basis-[60%] lg:ml-20 lg:block space-y-6"}>

                                <div>
                                    <img src={roomImage} className={"w-full object-fit"}/>
                                    <p className={"font-bold text-center"}>{response.roomDescription}</p>
                                </div>

                                <div className={"w-full flex flex-col justify-center items-start space-y-2"}>
                                    <span className={"w-full font-medium leading-6 text-slate-500"}>Describe your need</span>
                                    <div className={"w-full flex justify-center items-stretch space-x-2"}>
                                        <input type={"text"} min={2} className={`basis-[70%] ring-slate-200 h-10 p-2 text-sm ring-2 rounded-sm`} placeholder={"Give me some design ideas"} onKeyUp={getUserPrompt}/>
                                        <button className={"bg-[#1877F2] rounded-md h-full p-2"}
                                        onClick={sendQuery}>
                                            <BsFillSendFill color={"white"} size={25}/>
                                        </button>
                                    </div>
                                </div>

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