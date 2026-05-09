import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import axios from 'axios'

const Auth = ({setUser}) => {
 

   async function HandleSuccess(googleData){
        try{
            const res=await axios.post("http://localhost:8888/auth/google",{
                tokenId:googleData.credential
            })
            console.log(res.data)
            setUser(res.data.user)

        }catch(error){
            console.error("Error authenticating user",error)
        }

    }


  return (
    <div>

        <GoogleLogin onSuccess={HandleSuccess} />
      
    </div>
  )
}

export default Auth
