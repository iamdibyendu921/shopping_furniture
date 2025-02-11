import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRouter = () => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const navigate = useNavigate()

    useEffect(() =>{
        if (!isLoggedIn){
            navigate('/login' , {replace: true})
        }
    },[isLoggedIn, navigate])
  return (
    <>
    <Outlet/>
    </>
  )
}

export default PrivateRouter