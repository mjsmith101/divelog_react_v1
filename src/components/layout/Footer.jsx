import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <div>
      <footer id='footer' className='text-center py-1'>
        <div className="container">
          <p>Copyright &copy; MJS Dive Log - {footerYear}</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer