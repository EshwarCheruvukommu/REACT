export function StyledCard(){
    const products = [{
        name:"sneakers",
        price:3350,
        description:"One8 sneakers designed by Virat Kohli"
    },{
        name: "jacket",
        price: 1500,
        description:"This is a vintage leather jacket"
    },{
        name:"formals",
        price:4000,
        description:"Formal Wear"
    }, {
        name:"watch",
        price:8000,
        description:"This is the luxurious brand"
    }];
    return(
        <>
     
            {
                products.map((products)=>(
                    <div>
                        <h2 style={{backgroundColor:"black", color:"white", textAlign:"center"}}>{products.name}</h2>
                        <h2 style={{backgroundColor:"white",color:"black", textAlign:"center"}}>{products.price}</h2>
                        <p style={{backgroundColor:"black", color:"white", textAlign:"center"}}>{products.description}</p>
                    </div>
                ))
            }
      
        </>
    )
}