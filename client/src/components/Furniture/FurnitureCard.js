export default function FurnitureCard({title, description, price, imageURL, productURL}){

    return(

        <a href={productURL} className={"p-4 flex flex-col lg:flex-row justify-center items-stretch"}>
            <div>
                <img src={imageURL} className={"object-fit w-full"} alt={title}/>
            </div>

            <div className={"flex flex-col justify-center items-center lg:justify-center lg:items-start space-y-2"}>
                <p className={"font-semibold text-lg text-center lg:text-start"}>{title}</p>
                <p className={"text-sm"}>${price}</p>
                <p className={"mt-30 text-slate-500 text-xs text-center lg:text-start"}>{description}</p>
            </div>
        </a>
    )

}