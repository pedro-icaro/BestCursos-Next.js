interface Props {
    params: {
        classId:string;
        courseId:string;
    }  
}

export default function pageplayer({params:{classId, courseId}}: Props){
    return(
        <>
        Player {courseId} {classId}
        </>
    )
}