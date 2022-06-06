import React from 'react'

const Footer = () => {
  return (
    <div className='py-3 mt-3 bg-light text-center'>
      <footer>
        <span>&copy; {new Date().getFullYear()} D-Notes All right reserved.</span>
      </footer>
    </div>
  )
}

export default Footer