import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import api from '../../api'

const CartPage = () => {

    const cart_code = localStorage.getItem("cart_code")
    const [cartitems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0.00)
    const tax = 4.00
    
    useEffect(() => {
        api.get(`get_cart?cart_code=${cart_code}`)
        .then(res => {
            console.log(res.data)
            setCartItems(res.data.items)
            setCartTotal(res.data.sum_total)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])
    if(cartitems.length < 1 ){
        return (
            <div className="alert alert-primary my-5" role='alert'>
                You haven't added any item to cart.
            </div>
        )
    }

  return (
    <div className='container my-3 py-3' style={{ height: "80vh", overflow: "scroll" }}>
        <h5 className='mb-4'>Shopping Cart</h5>
        <div className='row'>
            <div className='col-md-8'>
                {cartitems.map(item =>  <CartItem key={item.id} item={item}/>)}
               
            </div>
                <CartSummary cartTotal={cartTotal} tax={tax} cartitems={cartitems} setCartTotal={setCartTotal} />
        </div>     
    </div>
  )
}

export default CartPage
