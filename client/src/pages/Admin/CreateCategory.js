import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenue from '../../components/Layout/AdminMenue'

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard Category"}>
        <div className="row mt-[6rem] ml-10">
            <div className="col-md-3 flex">
                <AdminMenue/>
            </div>
            <div className="col-md-9 mt-2"><h1>Category</h1></div>
        </div>
    </Layout>
  )
}

export default CreateCategory