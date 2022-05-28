import React from 'react'
import logo from './logo.png'

export default function Header() {
    return (
        <div className='nav'>
            <img src={logo} alt="logo" className='logo'></img>
        </div>
    )
}