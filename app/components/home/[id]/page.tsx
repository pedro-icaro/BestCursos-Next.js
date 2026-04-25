import { Metadata } from "next"
import { title } from "process";
import Headercurso from "../../header-curso/page";

interface Props {
    params: Promise<{id:string}>
}

export async function generateMetadata({params}:Props){
    const {id} = await params
        return{
            title:`Curso de ${id}`,
        }
}

export default async function Detalhescursos({params}: Props){
    const {id} = await params;
    return(
        <>
        <Headercurso />
        </>
    )
}