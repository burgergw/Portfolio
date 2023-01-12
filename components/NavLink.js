//Importing required packages
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script';

//Navigation functional arrow component that acts as a header component that the user can use to navigate the pages of the<!-- Google tag (gtag.js) -->
const NavLink = () => {
  return (
    <>
    
    <div className='nav-link'>
    <label>GW Burger</label>
        <ul>
            <li>
                <Link href="/" className='link'>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/projects" className='link'>
                    Projects
                </Link>
            </li>
            <li>
                <Link href="/contact" className='link'>
                    Contact
                </Link>
            </li>  
        </ul>
        <style jsx>{`
        * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        }
        .nav-link {
            font-family: montserrat;
            background: grey;
            height: 80px;
            width: 100%;
        }
        label {
            text-align: left;
            color: black;
            font-size: 35px;
            line-height: 80px;
            font-weight: bold;
            text-align: left;
            margin-left: 20px;
            position: relative;
        }
        ul {
            float: right;
            margin-right: 20px;
        }
        ul li {
            display: inline-block;
            line-height: 80px;
            margin: 0 5px;
        }
        ul li Link {
            color: white;
            font-size: 17px;
            text-transform: uppercase;
        }
        `}
        </style>
        <style global jsx>{`
            
            
        `}</style>
        
        
    </div>
    <Head>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-S0ECD82STC"></Script>
    <Script >
    {`
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments)
    }
    gtag('js', new Date());
    gtag('config', 'G-S0ECD82STC');

  `}
    </Script>
    
        
    
    </Head>
    </>
        )
}
//Exporting NavLink component
export default NavLink;
