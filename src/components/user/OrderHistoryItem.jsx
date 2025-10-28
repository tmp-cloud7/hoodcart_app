import styles from './OrderHistoryItem.module.css'

const OrderHistoryItem = () => {
  return (
    <div className='card-body'>
        <div className={` order-item mb-3 ${styles.orderItem}`}>
            <div className='row'>
                <div className='col-md-2'>
                    <img
                        src='assets.laptop.jpg'
                        alt='Order Item'
                        className='image-fluid'
                        style={{ borderRadius: '5px' }}
                    />
                </div>
                <div className='col-md-6'>
                    <h6>Product Name</h6>
                    <p>Order Date: June 5, 2024</p>
                    <p>Order ID: 12345</p>
                </div>
                <div className='col-md-2 text-center'>
                    <h6 className='text-muted'>Quantity: 1</h6>
                </div>
                <div className='col-md-2 text-center'>
                    <h6 className='text-muted'>$100.00</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderHistoryItem
