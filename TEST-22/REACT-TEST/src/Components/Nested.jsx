export default function Nested(){
    return(
        <>
        <h1 style={{textAlign:"center", backgroundColor:"orange", color:"white"}}>VIRAT KOHLI</h1>
        <Nest></Nest>
        <Nes></Nes>
        </>
    )
}

function Nest(){
    return(
        <>
        <h1 style={{textAlign:"center", backgroundColor:"white", color:"blue"}}>RUN MACHINE</h1>
        </>
    )
}

function Nes(){
    return(
        <>
        <h1 style={{textAlign:"center", backgroundColor:"green", color:"white"}}>CHASE MASTER</h1>
        </>
    )
}