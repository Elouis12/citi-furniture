import Dropdown from "./Dropdown";
import {useState} from "react";

export default function Form({getResponseAndRoomImage, handleLoading}) {

    const [selectedImage, setSelectedImage] = useState(null);
    const [price, setPrice] = useState(null);
    const [priceInvalid, setPriceInvalid] = useState(false);
    const [demographic, setDemographic] = useState("");
    const [furniture, setFurniture] = useState([]);
    const [userPrompt, setUserPrompt] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // Check if a file is selected
        if (file) {
            const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
            // Check if the selected file type is allowed
            if (allowedTypes.includes(file.type)) {
                // Display the selected image
                const reader = new FileReader();
                reader.onload = () => {
                    setSelectedImage(reader.result);
                };
                reader.readAsDataURL(file);


            } else {
                // Invalid file type
                alert("Invalid file type. Please select a PNG, JPEG, JPG, or GIF file.");
            }
        }
    };

    const handleReset = () => {
        // Reset the selected image
        setSelectedImage(null);
    };

    const handleSubmit = async () => {

        // no demographics selected
        if(
            demographic === ""
        ){

            alert("Select a demographic");
           return;
        }

        handleLoading(true);
        const URL = 'http://localhost:5001/get-furniture';
        const response = await fetch(URL, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: selectedImage,
                price: price,
                demographic: demographic
            })
        });

        const data = await response.json();

        console.log(data);

        getResponseAndRoomImage(data, selectedImage);

        handleLoading(false);
    }

    const handlePriceKeyUp = (e)=>{

        const value = e.target.value;

        if(isNaN(value)){
            setPriceInvalid(true)
        }else{
            setPriceInvalid(false); setPrice(value)
        }
    }

    const getUserPrompt = (e)=>{

        const prompt = e.target.value;

        setUserPrompt(prompt);
    }

    return (
        <div className={"w-1/2 mx-auto mt-10 flex flex-col justify-center items-center space-y-4"}>
            <div className="w-full">
                <label htmlFor="cover-photo" className="block font-medium leading-6 text-white font-bold text-2xl">
                    Room Image
                </label>
                <div className={`relative w-full ${ selectedImage ?  'mt-2' :  'mt-2  bg-white flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'}`}>

                {
                    selectedImage ? (
                        <div className={"relative w-full h-full rounded-lg"}>
                            <img src={selectedImage} className={"object-fit w-full h-full rounded-lg"} alt={"room image"}/>
                            <label
                                htmlFor="file-upload"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 p-2"
                            >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" accept=".png, .jpeg, .jpg, .gif" className="sr-only" onChange={handleFileChange} />
                            </label>
                        </div>
                    ) :
                        (
                                <div className="text-center">
                                    {/*<PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />*/}
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" accept=".png, .jpeg, .jpg, .gif" className="sr-only" onChange={handleFileChange} />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                        )
                }
                </div>

            </div>


            <div className={"w-full flex flex-col space-y-10"}>
                {/*<div className={"w-full flex flex-col justify-center items-start space-y-2"}>
                    <span className={"font-medium leading-6 text-white font-bold text-2xl"}>Describe your need</span>
                    <input type={"text"} min={2} className={`w-full ring-slate-200 h-10 p-2 text-sm ring-2 rounded-sm`} placeholder={"Give me some design ideas"} onKeyUp={getUserPrompt}/>
                </div>*/}
                <div className={"w-full flex flex-col justify-center items-start space-y-2"}>
                    <span className={"font-medium leading-6 text-white font-bold text-2xl"}>Budget</span>
                    <input type={"text"} min={2} className={`ring-2 ${priceInvalid ? 'ring-red-300 placeholder-red-300' : 'ring-slate-200' } w-full  h-10 p-2 text-sm ring-2 rounded-sm`} placeholder={"Ex. 100"} onKeyUp={handlePriceKeyUp}/>
                </div>

                <Dropdown getDemographic={(demographic)=>{setDemographic(demographic)}}/>
            </div>

                <button className={"px-4 py-3 bg-[#1877F2] text-white font-semibold w-full rounded-md"} onClick={handleSubmit}>Submit</button>
        </div>
    )
}
