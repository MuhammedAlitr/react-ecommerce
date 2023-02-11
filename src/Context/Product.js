import { createContext, useState, useEffect } from "react";
import { ProductService } from "../Services/ProductSeriveces";
import Cart from "../pages/Cart";


const ProductContext = createContext();

export const ProuctProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let prServices = new ProductService()
        prServices.getProducts().then((result) => setProducts(result))
    }, [])

    const [cartProduct, setCartProduct] = useState({
        productList: products,
        cart: []
    })

    const addToCart = (product) => 
        setCartProduct({
            ...cartProduct,
            cart: cartProduct.cart.find(cartİtem => cartİtem.id === product.id)
                ? cartProduct.cart.map(cartİtem => cartİtem.id === product.id ? { ...cartİtem, count: cartİtem.count + 1 } : cartİtem)
                : [...cartProduct.cart, { ...product, count: 1 }]
    })

    const remevoCart = (id) =>{
        setCartProduct({
            ...cartProduct,
            cart: cartProduct.cart.filter((cartİtem)=> cartİtem.id !== id)
        })
    }

    const incrise = (id) => setCartProduct({
        ...cartProduct,
        cart: cartProduct.cart.map((cartİtem) => cartİtem.id === id ? {...cartİtem,count: cartİtem.count + 1}:cartİtem)
    })

    const decrise = (id) => setCartProduct({
        ...cartProduct,
        cart: cartProduct.cart.map((cartİtem) => cartİtem.id === id ? {...cartİtem,count: cartİtem.count > 1 ? cartİtem.count - 1 : 1}:cartİtem)
    })


return <ProductContext.Provider value={{ cartProduct: cartProduct,remevoCart, incrise, addToCart, decrise ,  products: products }}>{children}</ProductContext.Provider>
}

export default ProductContext