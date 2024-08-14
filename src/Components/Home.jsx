
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function Home() {
  const [price,setPrice]=useState('');
  const [discount,setDiscount]=useState('')
  const [amount,setAmount]=useState('')
  const [saved,setSaved]=useState('');
  const calculate=()=>{
    const disAmount=price*discount/100;
    setSaved(disAmount)
    const totalAmount=price-disAmount;
    setAmount(totalAmount);
    console.log(totalAmount)
  }
  const reset=()=>{
    setAmount(0);
    setDiscount('');
    setPrice('');
    setSaved(0)
  }
  return (
    <>
    <div className="container-fluid m-5">
      <div className="container p-5 bg-info rounded w-75">
        <h1 className='text-white fw-bolder'>Discount Calculator</h1>
        <form action="">
          <label htmlFor="price" className='text-white mt-4'>Price</label>
          <input type="text" value={price} placeholder='Enter price' onChange={(e)=>setPrice(e.target.value)} className='form-control mb-4'/>
          <label htmlFor="discount" className='text-white' >Discount percentage</label>
          <input type="text" name="discount" id="discount" value={discount}placeholder='Enter Discount Percentage' onChange={(e)=>setDiscount(e.target.value)} className='form-control mb-4 bg-light' />
          
        </form>
         <Button className="btn mb-4 fs-5 text-danger" onClick={reset}>Reset</Button>
<Button className="btn mb-4 fs-5 text-success ms-2" onClick={calculate}>Calculate</Button>
         
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className='text-dark'>Discount Details</h5>
              <p  className='text-dark'>
                Discounted Price: &#x20B9;{amount}
              </p>
              <p  className='text-dark'>
                Saved Amount: &#x20B9;{saved}
              </p>
            </div>
          </div>
      </div>


    </div>
    </>
  )
}

export default Home