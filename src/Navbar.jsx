import React from 'react';

const Navbar = () => (
  <nav>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="checkbtn">
      <a href="https://github.com/Sayak-Bhunia" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-github bx-md'></i>
      </a>
      <a href="https://www.linkedin.com/in/sayak-bhunia-452419252/" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-linkedin-square bx-md'></i>
      </a>
    </label>
    <label className="logo">こんにちは</label>
  </nav>
);

export default Navbar;