import React from 'react'
import Layout from '../components/Layout/Layout'
import {useAuth} from "../Context/auth";

const HomePage = () => {
  const [auth,setAuth]=useAuth()
  return (
    <Layout>
    <div className='h-screen flex  w-full  mt-[7rem] flex-col '>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth,null,4)}</pre>
      </div>
    </Layout>
  )
}

export default HomePage
