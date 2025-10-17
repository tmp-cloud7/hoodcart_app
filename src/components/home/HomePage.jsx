import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import Header from './Header'
import api from '../../api'
import PlaceHolderContainer from '../ui/PlaceHolderContainer'

const HomePage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(function(){
    setLoading(true)
    api.get("products")    
    .then(res => {
      console.log(res.data)
      setProducts(res.data)
      setLoading(false)
  })
  .catch(err => {
    console.log(err.message)
    setLoading(false)
  })

  }, [])
  
  
  return (
    <>
    <Header />
    {loading ? <PlaceHolderContainer /> : <CardContainer products={products} /> }  
    </>
  )
}

export default HomePage
