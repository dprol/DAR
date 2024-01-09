import React from 'react'

const Footer = () => (
    <footer className="bg-dark fixed-bottom d-flex align-items-center justify-content-center" style={{ height: '50px', paddingTop:'10px', fontSize:'14px'}}>
      <div>
        <p className="text-light">Desarrollado por Alberto, Daniel, Alejandro y Lucía - UNIR &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
  
  export default Footer;