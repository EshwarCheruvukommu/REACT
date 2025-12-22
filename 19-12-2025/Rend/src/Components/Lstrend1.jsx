export default function Lstrend1(){
     const products = [{
        name:"sneakers",
        price:3350
    },{
        name: "jacket",
        price: 1500
    },{
        name:"formals",
        price:4000
    }, {
        name:"watch",
        price:8000
    }];
    return(
        <div>
            {
                products.map((products)=>(
                    <div>
                        <h2 style={{backgroundColor:"gold", color:"black", textAlign:"center"}}>{products.name}</h2>
                        <h2 style={{backgroundColor:"black",color:"gold", textAlign:"center"}}>{products.price}</h2>
                    </div>
                ))
            }
        </div>
    )
}