

export class ProductService {
    getProducts() {
        return fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
    };
    getProductsById(id){
        return fetch('https://fakestoreapi.com/products/'+ id)
        .then(res=> res.json())
    }
}