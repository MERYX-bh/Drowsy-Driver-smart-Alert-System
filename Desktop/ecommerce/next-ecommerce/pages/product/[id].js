import Head from 'next/head'
import { useState } from 'react'

const detailProduct = () => {
  return (
    <div>
      <Head>
      <title>Detail Product</title>
      </Head>
      <div>detail product</div>
    </div>
  )
}


export async function getServerSideProps({params: {id}}) {
  console.log(id)
  //const res = await getData('product')
  return {
    props: {
      // productsProps: res.products,
      // result: res.result
    },
  }
}
export default detailProduct