import { useEffect, useState } from 'react'
import OrderHistoryItemContainer from './OrderHistoryItemContainer'
import UserInfo from './UserInfo'
import api from '../../api'

const UserProfilePage = () => {

  const [userInfo, setUserInfo] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(function(){
    setLoading(true)
    api.get("user_info")
    .then(res => {
      console.log(res.data)
      setUserInfo(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
      setLoading(false)
    })
  }, [])

  return (
    <div className='container my-5'>
        {/* Profile Header */}
        <UserInfo userInfo={userInfo}/>

        {/* Order History */}
        <OrderHistoryItemContainer/>
         
    </div>
  )
}

export default UserProfilePage
