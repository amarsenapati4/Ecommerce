import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenue from '../../components/Layout/AdminMenue'

const CreateProduct = () => {
  return (
    <Layout title={"Dashboard Product"}>
    <div className="row mt-[6rem] ml-10">
        <div className="col-md-3 flex">
            <AdminMenue/>
        </div>
        <div className="col-md-9 mt-2"><h1>Product</h1></div>
    </div>
</Layout>
  )
}

export default CreateProduct