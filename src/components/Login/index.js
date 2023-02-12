import React from 'react'

const Newtrex = () => {
  return (
    <div>
      
      <h1>Нэвтрэх хэсэг</h1>
      <form>
        <label>
          <p>И-мэйл хаяг</p>
          <input type="email" />
        </label>
        <label>
          <p>Нууц үг</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  )
}

export default Newtrex
