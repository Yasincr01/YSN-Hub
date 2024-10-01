import React from 'react'

const Header = () => {
  return (
    <>
<header>
  <a class="a3" href='#'>YSN</a>
  
  <nav id="nav-links">
    <a class="a1" href="#">HOME</a>
    <a class="a1" href="#products">PRODUCTS</a>
    <a class="a1" href="#about">ABOUT</a>
    <a class="a1" href="#footer">CONTACT</a>
    <a class="a1" href="#"><i class="fa-solid fa-user"></i> LOGIN</a>
  </nav>

  <div class="menu-icon" id="menu-icon">
    <i class="fa-solid fa-bars"></i>
  </div>
</header>

    </>
  )
}

export default Header