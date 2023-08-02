import React from 'react'

export const Contact = () => {
  return (
    <div className='sec4'id='contact'>
        <div className="head2">
            <h1>Contact</h1>
        </div>
        <form action="#" className='contact'>
            
            <h6>Email</h6>
            <input type="text" id='email' placeholder='Email or username'/>
            {/* <label htmlFor="msg" id='lbl1'>Message</label> */}
            <br />
            <br/>
            <h6>Message</h6>
            <textarea type="text" id='message' placeholder='Message' ></textarea>
            <br />
            <button className='submit'>Submit</button>
        </form>
    </div>
  )
}