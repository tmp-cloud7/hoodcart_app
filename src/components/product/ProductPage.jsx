import React, { useEffect, useState } from 'react'
import RelatedProducts from './RelatedProducts'
import ProductPagePlaceHolder from './ProductPagePlaceholder'
import { useParams } from 'react-router-dom'
import api, { BASE_URL } from '../../api'

const ProductPage = () => {
  const { slug } = useParams()
  const [product, setProduct] = useState({})
  const [similarProducts, setSimilarProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.get(`product_detail/${slug}`)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
        setSimilarProducts(res.data.similar_products)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.message)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <ProductPagePlaceHolder />

  return (
    <div>
      <section className='py-3'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='row gx-4 gx-lg-5 align-items-center'>
            {/* Product Image */}
            <div className='col-md-6'>
              <img
                className='card-img-top mb-5 mb-md-0'
                src={
                  product.image
                    ? `${BASE_URL}${product.image}`
                    : 'https://dummyimage.com/600x700/dee2e6/6c757d.jpg'
                }
                alt={product.name || 'Product'}
              />
            </div>

            {/* Product Details */}
            <div className='col-md-6'>
              <div className='small mb-1'>SKU: {product.id}</div>
              <h1 className='display-5 fw-bolder'>{product.name}</h1>

              <div className='fs-5 mb-5'>
                <span className='text-decoration-line-through'>
                  ${product.price ? (Number(product.price) + 5).toFixed(2) : '0.00'}
                </span>
                <span className='ms-2'>${product.price ? Number(product.price).toFixed(2) : '0.00'}</span>
              </div>


              <p className='lead'>{product.description}</p>

              <div className='d-flex'>
                <input
                  type='number'
                  className='form-control text-center me-3'
                  id='inputQuantity'
                  defaultValue='1'
                  style={{ maxWidth: '3rem' }}
                />
                <button
                  className='btn btn-outline-dark flex-shrink-0'
                  type='button'
                >
                  <i className='bi-cart-fill me-1'></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={similarProducts} />
    </div>
  )
}

export default ProductPage
