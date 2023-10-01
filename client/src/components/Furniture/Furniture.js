import React, { useState } from 'react';
import Form from "./Form";
import FurnitureCard from "./FurnitureCard";
import {BsFillSendFill} from "react-icons/bs";
import Spline from '@splinetool/react-spline';  // Import Spline

export default function Furniture() {

    const [response, setResponse] = useState(null);
    const [roomImage, setRoomImage] = useState(null);
    const [userPrompt, setUserPrompt] = useState("");
    const [loading, setLoading] = useState("");

    const showForm = () => {
        setResponse(null);
    }

    const sendQuery = async () => {
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

    const getUserPrompt = (e) => {
        const prompt = e.target.value;
        setUserPrompt(prompt);
    }

    return (
        <>
{/*
             Spline Background
            <Spline
                scene="https://prod.spline.design/sOoV8XZEuyPiIPR3/scene.splinecode"
                style={{
                    position: 'absolute',  // Absolute position
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1  // Ensure it's rendered below your content
                }}
            />
*/}

            <div className={"w-full h-full"} style={{ position: 'relative' }}>  {/* Relative position to overlay the Spline background */}

                {

                    loading ? (

                            <span className="mt-40 w-full h-full flex flex-col justify-center items-center space-y-6">
                                <svg className="animate-spin -ml-1 mr-3 h-4/5 w-1/5 m-auto text-[#1877F2]"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p className={"text-2xl"}>These things can take time. Hang in there...</p>
                            </span>
                        ) :
                    response ? (
                        response.listOfFurnitures.length === 0 ? (
                            <div className={"w-full flex flex-col justify-center items-center space-y-10"}>
                                <p className={"text-3xl"}>No selection(s) matched the room</p>
                                <button className={"px-4 py-3 bg-black text-white font-semibold w-[3/5] rounded-md"} onClick={showForm}>Make new selection</button>
                            </div>
                        ) : (
                            <div className={"flex flex-col lg:flex-row justify-center w-full"}>


                                {/*<div className={"lg:hidden sticky w-1/2 m-auto flex flex-col justify-center items-start space-y-2"}>
                                    <span className={"w-full font-medium leading-6 text-slate-500"}>Describe your need</span>
                                    <div className={"w-full flex justify-center items-stretch space-x-2"}>
                                        <input type={"text"} min={2} className={`basis-[70%] ring-slate-200 h-10 p-2 text-sm ring-2 rounded-sm`} placeholder={"Give me some design ideas"} onKeyUp={getUserPrompt} />
                                        <button className={"bg-[#1877F2] rounded-md h-full p-2"}
                                            onClick={sendQuery}>
                                            <BsFillSendFill color={"white"} size={25} />
                                        </button>
                                    </div>
                                </div>*/}

                                <div className={"w-[80%] m-auto md:w-[60%] lg:basis-[40%] divide-y"}>
                                    {
                                        response.listOfFurnitures.map((item) => {

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

                                <div className={"hidden lg:flex lg:flex-col lg:justify-start lg:items-center lg:sticky lg:top-0 lg:basis-[60%] lg:ml-20 lg:block space-y-6"}>

                                    <div>
                                        <img src={roomImage} className={"w-full object-fit"} />
                                        <p className={"font-bold text-center"}>{response.roomDescription}</p>
                                    </div>


                                    <button className={"bg-[#1877F2] w-4/5 m-auto text-white rounded-md p-2"}
                                            onClick={()=>{setResponse(null)}}>
                                        Try a different room
                                    </button>

                                </div>
                            </div>

                        )
                    ) : (
                        <Form getResponseAndRoomImage={(response, roomImage) => { setResponse(response); setRoomImage(roomImage); }} handleLoading={(loading)=>{setLoading(loading);}}/>
                    )
                }

            </div>
        </>
    )
}
