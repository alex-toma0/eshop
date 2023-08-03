import { useQuery } from "react-query";
import "../Root.css"
const SERVER = 'http://localhost:8080';

export default function Root() {

    const getProducts = async () => {
        const res = await fetch(SERVER + "/getProducts");
        return res.json();
    }
    const productsQuery = useQuery('products', getProducts);
    
    if (productsQuery.isLoading) return <h1>Loading...</h1>
    if (productsQuery.isError) return <h2>Error</h2>


    return (
        <div className='container'>

        
            <div className='grid-container'>
            
                {productsQuery.data.map((product: any) => {
                    return (
                        <div className='grid-item'>
                                <img src="/shirt.jpg" width="250px"/>
                                <h1>{product.product_name}</h1>
                                <h2>{product.product_price}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

