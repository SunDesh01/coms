import React from 'react'
import "./header.css"
import { Link, Route, Routes } from 'react-router-dom'
import Banner from '../../Pages/Banner'
import Cart from '../../Pages/Cart'

import { catData } from '../../Pages/catData'
import Category from '../../Category'
import Detail from '../../Pages/Detail'
Detail

function Header() {
  return (
    <>
    <section className='top'>
        <ul>
            <li>+977 9819938900</li>
            <li>shahsandesh789@gmail.com</li>
        </ul>
        <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Career</li>
        </ul>
        <ul>
            <li>Register</li>
            <li>Log In</li>
            <li>Add Cart(0)</li>
        </ul>
    </section>
    <header>
        <img className='logo' src="/image/logo.png" alt="" />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {catData.map((a)=>(
                   <li key={a.id}>
                    <Link to={`/cat/${a.catname}`}>
                    {a.catname}
                    </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        
    </header>
    <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path='/cat/:cid/' element={<Category/>}/>
        <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default Header
