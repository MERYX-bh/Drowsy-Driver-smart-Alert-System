import Link from 'next/link'
import React from 'react'

const ItemProduct = ({product}) => {

  const productLink = () => {
    return(
        <>
        <Link href={`product/${product._id}`}>
            <button className='btn btn-info flex-fill'>
                View
            </button>
        </Link>
        <Link href={`product/${product._id}`}>
            <button className='btn btn-success flex-fill'>
                Buy
            </button>
        </Link>
        </>
    )
  }
  return (
    <div className="card"  style={{width: "18rem"}}>
      <img className="card-img-top" src={product.images[0].url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-capitalize" title={product.title}>{product.title}</h5>
        <div className='row justify-content-between mx-0'>
            <h6 className='text-danger'>
                ${product.price}
            </h6>
            {
                product.inStock > 0 
                ? <h6>In stock : {product.inStock}</h6>
                : <h6>Not in stock</h6>    
            }
        </div>
        <p className="card-text" title={product.description}>{product.description}</p>
        <p href="#" className="row d-flex mx-0" style={{display: "flex", gap: '1rem'}}>
            {productLink()}
        </p>
       </div>
    </div>
  )
}

export default ItemProduct