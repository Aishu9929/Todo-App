import React from 'react'

const Footer = () => {
let footerstyle = {
  position: "static",
  top: "100vh",
  width: "100%",
  margin: "16% 0",
}

  return (
      <footer className="bg-dark text-light py-1 my-20%" style={footerstyle}>
        <p className="text-center">Copyright &copy; MyTodosList.com</p>
      </footer>
    
  )
}

export default Footer
