import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenue from '../../components/Layout/UserMenue'

const Orders = () => {
  return (
   <Layout title={"Dashboard Profile"}>
    <div className="container-fluid  mt-[6rem] ml-10">
        <div className="row">
            <div className="col-md-3 flex">
                <UserMenue/>
            </div>
            <div className="col-md-9 mt-2">
                <h1>All Orders</h1>
            </div>
        </div>
    </div>
   </Layout>
  )
}

export default Orders