interface Props{
    params: Promise<{
        classId:string;
        courseId:string;
    }>;
}

export default async function PagePlayer({params}:Props){

    const {courseId, classId} = await params

    return(
        <>
         Player {courseId} {classId}
        </>
    )
}