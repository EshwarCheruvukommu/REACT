export default function StudentList(){
    let students = ["arya","rahul","aisha","kiran"]
    return(
        <>
        <ul>
            {
                students.map((players,index)=>(
                    <li key={index}>{players}</li>
                ))
            }
        </ul>
        </>
    )
}