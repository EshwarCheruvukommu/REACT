export default function Lstrend(){
    let cricketers = ['virat','salt','venkatesh iyer','patidar','jitesh','tim david',
                    'romario shepard','krunal','hazelwood','bhuvaneshwar','mangesh yadav']
    return(
        <>
        <ul type='none'>
            {
                cricketers.map((players,index)=>(
                    <li key={index}>{players}</li>
                ))
            }
        </ul>
        </>
    )
}