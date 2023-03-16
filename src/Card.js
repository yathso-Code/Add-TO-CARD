import React, {useEffect} from 'react'

function Card({cart, setCart, handleChange}) {
     const [price, setPrice] = React.useState(0);

      const handleRemove =(id)=>{
           const arr = cart.filter((itme)=> itme.id !== id);
           setCart([...arr]);
           handlePrice();
      }
     
      const handlePrice = () =>{
          let ans = 0;
          cart.map((item)=> (ans +=item.amount * item.price))
          setPrice(ans);
      }

      useEffect(()=>{
          handlePrice();
      })

  // console.log("==="+totalUniqueItems+"=>"+totalItems);
//   if(isEmpty) return <h1 className='text-center'>your card is Empty</h1>
  return (
    <section className='py-4 container'>
       <div className='row justify-content-center'>
            <div className='col-12'>
                 <h5>Total Price of your cart total Rs:{price}</h5>
                 <table className='table table-light table-hover m=0'>
                    <tbody>
                       {cart.map((item, index)=>{
                            return(
                            <tr key={index}>
                                 <td>
                                       <img src={item.img} style={{height: '5rem'}} />
                                 </td>
                                 <td>{item.title}</td>
                                 <td>Rs:{item.price}</td>
                                 {/* <td>Quantity ({item.quantity})</td> */}
                                 <td><button  className="btn btn-success"  onClick={()=> handleChange(item, 1)}>+</button></td>
                                 <td><h5>{item.amount}</h5></td>
                                 <td><button  className="btn btn-success"  onClick={()=> handleChange(item, -1)}>-</button></td>
                                 <td><button className="btn btn-success" onClick={()=> handleRemove(item.id)}>Remove</button></td>
                            </tr>  
                            );
                       })
                       }
                     </tbody>  

                 </table>
            </div>
       </div>
    </section>

  )
}

export default Card