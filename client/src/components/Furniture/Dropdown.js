import {useState} from "react";

export default function Dropdown(){

    const [showOptions, setShowOptions] = useState(false);

    return(

        <div class="flex flex-col justify-center space-y-2">
            <button className="px-4 py-3 bg-black text-white font-semibold w-full rounded-md"
                 onClick={()=>{ setShowOptions(!showOptions); }}
            >
                <span class="block text-sm w-full mx-auto">Select Demographic</span>
            </button>

            {
                showOptions && <ul className={`py-1 w-full rounded-md shadow-md`} aria-labelledby="dropdown">
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"}>Student</p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"}>First time homeowner</p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"}>Earnings</p>
                    </li>
                    <li>
                        <p className={"p-4 hover:bg-slate-100 cursor-pointer"}>Sign out</p>
                    </li>
                </ul>
            }

        </div>
    )
}