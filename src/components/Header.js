import React from 'react'
import logo from "../image/logo.png"

export default function Header() {
    return (
        <div className='nav'>
            <img src={logo} alt="logo" className='logo'></img>
        </div>
    )
}