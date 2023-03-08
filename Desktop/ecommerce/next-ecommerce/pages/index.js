import { getData } from "@/utils/fetchData"
import { useState } from "react"
import Head from "next/head"
import ItemProduct from "@/components/Products/ItemProduct" 

const Home = (props) => {
  const [products, getProducts] = useState(props.productsProps)
  
  return(
    <div className="products">
     <Head>
     <title>Home Page</title>
     </Head>
     {
      products.length === 0 
      ? <h2>No products</h2>
      : products.map(product => (
        <ItemProduct key= {product._id} product={product}/>
      ))      
     }
     </div>
  )
}

export async function getServerSideProps() {
  const res = await getData('product')
  return {
    props: {
      productsProps: res.products,
      result: res.result
    },
  }
}
export default Home