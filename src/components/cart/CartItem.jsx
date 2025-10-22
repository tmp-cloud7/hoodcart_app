import React from 'react'

const CartItem = () => {
  return (
    <div className='col-md-12'>
        <div
         className='cart-item d-flex align-items-center mb-3 p-3'
         style={{backgroundColor: '#f8f9fa', borderRadius: '8px' }}
        >
         <img
         src='https://via.placeholder.com/100'
         alt='Product Image'
         className='img-fluid'
         style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
         />
         <div className='ms-3 flex-grow-1'>
            <h5 className='mb-1'>Product Name</h5>
            <p className='mb-0 text-muted'>$20.00</p>
         </div>
         <div className='d-flex align-items-center'>
            <input
              type='number'
              className='form-control me-3'
              defaultValue= "1"
              style={{ width: "70px" }}
            />
            <button className='btn btn-danger'>Remove</button>
         </div>
        </div>     
    </div>
  )
}

export default CartItem
