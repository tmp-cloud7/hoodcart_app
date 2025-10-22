import React, { useState } from 'react'
import api, { BASE_URL } from '../../api'

const CartItem = ({item, setCartTotal, cartitems}) => {

const [quantity, SetQuantity] = useState(item.quantity)

const itemData = {quantity:quantity, item_id:item.id}

function updateCartitem(){
    api.patch("update_quantity/", itemData)
    .then(res => {
        console.log(res.data)
        setCartTotal(cartitems.map((cartitem) =>
            cartitem.id === item.id ?
            res.data.data:
            cartitem).reduce((acc, curr) => acc + curr.total, 0)
        )
    })
    .catch(err => {
        console.log(err.message)
    })
}

  return (
    <div className='col-md-12'>
        <div
         className='cart-item d-flex align-items-center mb-3 p-3'
         style={{backgroundColor: '#f8f9fa', borderRadius: '8px' }}
        >
         <img
         src={`${BASE_URL}${item.product.image}`}
         alt='Product Image'
         className='img-fluid'
         style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
         />
         <div className='ms-3 flex-grow-1'>
            <h5 className='mb-1'>{item.product.name}</h5>
            <p className='mb-0 text-muted'>{`$${item.product.price}`}</p>
         </div>
         <div className='d-flex align-items-center'>
            <input
              type='number'
              min = "1"
              className='form-control me-3'
              value={quantity}
              onChange={(e) => SetQuantity(e.target.value)}
              style={{ width: "70px" }}
            />
            <button className='btn btn-sm mx-2' 
            onClick={updateCartitem}
            style={{ backgroundColor: "#4b3bcb", color: 'white'}}>Update</button>
            <button className='btn btn-danger'>Remove</button>
         </div>
        </div>     
    </div>
  )
}

export default CartItem
