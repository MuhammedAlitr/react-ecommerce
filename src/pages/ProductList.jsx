import React, { useContext } from "react"
import { Link } from "react-router-dom"
import ProductContext from "../Context/Product"
const ProductList = () => {
    const context = useContext(ProductContext)
    console.log(context);
    return (
        <div>
            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            context.products.map((product) => (
                                
                                    <tr key={product.id} >
                                        <th scope="row">{product.id}</th>
                                        <td><Link to={`/products/${product.id}`} >{product.title}</Link></td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td><button onClick={()=> context.addToCart(product)} className="btn bg-primary">Ekle</button></td>
                                    </tr>
                                    
                              

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList
