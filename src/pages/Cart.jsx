import React, { useContext } from 'react'
import ProductContext from '../Context/Product'
const Cart = () => {
  const context = useContext(ProductContext)
  const amount = context.cartProduct.cart.reduce((total,product)=> total = total + (product.price * product.count), 0)
  return (
    <div>
      {<h1>{context.cartProduct.cart.map(product => (
        <div className="card">
          <h2>{(amount).toFixed(2)}</h2>
          <div className="row">
            <div className="col-4">
              <img src={product.image} className="card-img-top im" alt="..." />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text ac">{product.description}</p>
                <p>toplam {(product.price * product.count).toFixed(2)}</p>
                <p>{product.count}</p>
                <button onClick={()=> context.decrise(product.id)} className="btn bg-warning">Çıkar</button>
                <button onClick={ ()=> context.incrise(product.id) } className='btn bg-primary'>Ekle</button>
                <button onClick={()=> context.remevoCart(product.id)} className="btn bg-danger">Çıkar</button>
              </div>
            </div>
          </div>


        </div>
      ))}</h1>}
    </div>
  )
}

export default Cart