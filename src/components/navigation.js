import React from 'react'
import { Link } from 'react-router-dom';

const navLinks = [
    {
        title: 'Home',
        path: '/'

    },
    {
        title: 'Services',
        path: '/services'

    },
    {
        title: 'Contact Us',
        path: '/contact-us'

    },
    {
        title: 'Login',
        path: '/login',

    }

]

export default function navigation() {
    return (
        <nav className='site-navigation'>
            <span> Airtech Radon </span>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

        </nav >
    )
}
