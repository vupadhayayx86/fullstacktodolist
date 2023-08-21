import React, { useState } from 'react'

const InputComponent = () => {
    const [todoitem,setTodoItem]=useState()
  return (
    <div className="input_main">
        <input type="text" name="input_text" id="input_text" className='form-control' placeholder='Todo Item...'/>
        <div className='button_div'>
        <button className='submit_btn btn btn-primary' onClick={handleClick}>Submit</button>
        <button className='clear_btn btn btn-danger'>Clear</button>
        </div>
    </div>
  )
}

export default InputComponent