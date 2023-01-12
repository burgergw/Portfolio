//Importing required packages and components
import React from 'react'
import Link from 'next/link';
import NavLink from '../components/NavLink';
import Head from 'next/head'
import Script from 'next/script';

//Functional arrow component that act as the contact page
const contact = () => {
  return (
    <>
    
    <div>
        <NavLink />
        <h1>Contact me:</h1>
        <h3>Email:</h3>
        <p>gwb@365online.co.za</p>
        <h3>Cell:</h3>
        <p>(+27)7981788307</p>
        <h3><Link href={"https://www.linkedin.com/in/gerrit-wagener-180a21200/"}>Linkedin</Link></h3>
        <h3><Link href={"https://github.com/burgergw"}>Github</Link></h3>
        <style global jsx>{`
            body {
                background: lightgrey;
                
            }
            h1 {
                text-align: center;
            }
            h3 {
              text-align: center;
            }
            p {
              text-align: center;
            }
        
        `}</style>
        <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-S0ECD82STC"></Script>
        <Script>
        {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments)
        }
        gtag('js', new Date());
        gtag('config', 'G-S0ECD82STC');

        }
        </Script>
        
            
        
</Head>
    </div>
    </>
  )
}
//Exporting contact component  
export default contact;