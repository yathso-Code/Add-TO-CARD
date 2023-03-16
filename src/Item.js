import { Button } from 'bootstrap'
import React from 'react'

function Item({item , handleClick}) {

  return (
    <>
      <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className=" card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top"/>
                 <div className="card-body text-center">
                       <h5 className="card-title">{item.title}</h5>
                       <p className="card-text">Rs {item.price}</p>
                       <button type="button" className="btn btn-success" 
                       onClick={()=> handleClick(item)}>Add to card</button>
                 </div>
         </div>
        </div> 
    </>
  )
}

export default Item