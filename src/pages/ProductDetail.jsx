import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from '../Context/Product';
import { ProductService } from '../Services/ProductSeriveces';

const ProductDetail = () => {
    let { id } = useParams();
    const context = useContext(ProductContext)
    const [product, setProduct] = useState([])
    useEffect(() => {
        let prservice = new ProductService()
        prservice.getProductsById(id).then(result => setProduct(result))
    }, [])

    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col-4">
                        <img src={product.image} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                        <button onClick={()=> context.addToCart(product)} className="btn bg-primary">Ekle</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProductDetail