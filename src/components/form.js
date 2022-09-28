import React, { useState } from 'react'
import '../styles/form.css'

function Form() {
  const [val, setVal] = useState("")
  const handleVal = (e) => {
      setVal(e.target.value)
      console.log(e.target.value);
  }
  const [add, setAdd] = useState("")
  const handleAdd = (e) => {
    setAdd(e.target.value)
  }
  const [email, setEmail] = useState("")
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const submitHandler = () => {
    if(val == ""){
        alert('Name is required')
      }
    if(add == ""){
      alert('Addres is required')
    }
    if(email == ""){
      alert('Email is required')
    }
  }

  return (
    <>
      <div className="form-container">
        <form className='form-content'>
          <input type="text" value={val} onChange={handleVal} placeholder='Enter your name' className='inp-name grad' />
          <label className='label-name'>Name*</label>

          <input type="text" value={add} onChange={handleAdd} placeholder='Enter your address' className='inp-add grad' />
          <label className='label-add'>Address*</label>

          <input type="email" value={email} onChange={handleEmail} placeholder='Enter your email' className='inp-email grad' />
          <label className='label-email'>Email*</label>

          <input type="date" className='inp-dob grad' />
          <label className='label-dob'>DOB*</label>

          <button type='submit' className='submit-btn' onClick={submitHandler}>SUBMIT</button>
        </form>
      </div>
    </>
  )
}

export default Form