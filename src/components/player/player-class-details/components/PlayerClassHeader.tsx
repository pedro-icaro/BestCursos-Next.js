interface PropsClassHeader {
    title:string;
    description:string;
}
export default function PlayerClassHeader({description, title}:PropsClassHeader){
    return(
        <div className="flex flex-col gap-2">
            <h3 className=" font-semibold text-lg">{title}</h3>
            <p>{description}</p>
        </div>
    )
}