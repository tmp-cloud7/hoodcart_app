import React from 'react'

const ProductPagePlaceHolder = () => {
  return (
    <section className="py-3">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">

          {/* Image Placeholder */}
         <div className='col-md-6'>
              <img
                className='card-img-top mb-5 mb-md-0'
                src='https://dummyimage.com/600x700/dee2e6/6c757d.jpg'
                alt='Product'
              />
          </div>

          {/* Text Placeholder */}
          <div className="col-md-6">
            <div
              className="bg-secondary bg-opacity-25 mb-3 rounded"
              style={{ width: "40%", height: "18px", animation: "pulse 1.5s infinite" }}
            ></div>

            <div
              className="bg-secondary bg-opacity-25 mb-4 rounded"
              style={{ width: "80%", height: "28px", animation: "pulse 1.5s infinite" }}
            ></div>

            <div
              className="bg-secondary bg-opacity-10 mb-4 rounded"
              style={{ width: "60%", height: "20px", animation: "pulse 1.5s infinite" }}
            ></div>

            <div
              className="bg-secondary bg-opacity-10 mb-4 rounded"
              style={{ width: "90%", height: "60px", animation: "pulse 1.5s infinite" }}
            ></div>

            <div className="d-flex">
              <div
                className="bg-secondary bg-opacity-10 rounded me-3"
                style={{ width: "3rem", height: "2.3rem", animation: "pulse 1.5s infinite" }}
              ></div>
              <div
                className="bg-secondary bg-opacity-25 rounded"
                style={{ width: "8rem", height: "2.3rem", animation: "pulse 1.5s infinite" }}
              ></div>
            </div>
          </div>

        </div>
      </div>

      {/* Pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </section>
  )
}

export default ProductPagePlaceHolder
