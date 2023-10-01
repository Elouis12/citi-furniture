import {useState} from "react";

export default function Dropdown({getDemographic}){

    const [showOptions, setShowOptions] = useState(false);
    const [option, setOption] = useState("Select Demographic");
    return(

        // <div className={` ${option === "Select Demographic" && 'ring-red-300 ring-2'} flex flex-col justify-center space-y-2 rounded-md`}>
        <div className={`flex flex-col justify-center space-y-2 rounded-md`}>
            <button className="px-4 py-3 bg-black text-white font-semibold w-full rounded-md"
                 onClick={()=>{ setShowOptions(!showOptions); }}
            >
                <span className="block text-sm w-full mx-auto">{option}</span>
            </button>

            {
                showOptions && <ul className={`bg-white py-1 w-full h-[250px] overflow-y-scroll rounded-md shadow-md`} aria-labelledby="dropdown">
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"} onClick={(e) => { setOption(e.target.innerHTML); setShowOptions(false); getDemographic(e.target.innerHTML) }}>
                            Student
                        </p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"} onClick={(e) => { setOption(e.target.innerHTML); setShowOptions(false); getDemographic(e.target.innerHTML) }}>
                            First-time Homeowner
                        </p>
                    </li>
                    <li>
                        <p className={"p-4 hover-bg-slate-100 cursor-pointer"} onClick={(e) => { setOption(e.target.innerHTML); setShowOptions(false); getDemographic(e.target.innerHTML) }}>
                            Low-Income Family
                        </p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"} onClick={(e) => { setOption(e.target.innerHTML); setShowOptions(false); getDemographic(e.target.innerHTML) }}>
                            Middle-Income Family
                        </p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"} onClick={(e) => { setOption(e.target.innerHTML); setShowOptions(false); getDemographic(e.target.innerHTML) }}>
                            Seniors (Elderly)
                        </p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"} onClick={(e) => { setOption(e.target.innerHTML); setShowOptions(false); getDemographic(e.target.innerHTML) }}>
                            Veteran
                        </p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"} onClick={(e) => { setOption(e.target.innerHTML); setShowOptions(false); getDemographic(e.target.innerHTML) }}>
                            Families with Children
                        </p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"} onClick={(e) => { setOption(e.target.innerHTML); setShowOptions(false); getDemographic(e.target.innerHTML) }}>
                            Individual with Disability
                        </p>
                    </li>
                </ul>

            }

        </div>
    )
}