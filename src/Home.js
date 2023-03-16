import React from 'react'
import Item from './Item'
import Data from './Data'

const Home = ({handleClick}) => {
  // console.log(data.productData);
  return (
    <>
     <h1 className='text-center mt-3'>All Items</h1>
     <section className='py-4 container'>
         <div className='row justify-content-center'>
               {
                Data.productData.map((item)=>{
                     return (
                       <Item item={item} key={item.id}  handleClick={handleClick}/>
                     )
                })
               }
             
              
         </div>
     </section>
    </> 
  )
}

export default Home